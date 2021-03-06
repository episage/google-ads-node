import { Client } from "grpc";

// Based on https://github.com/leaves4j/grpc-promisify/blob/master/src/index.js
export function promisifyServiceClient(client: Client) {
  Object.keys(Object.getPrototypeOf(client)).forEach((functionName: string) => {
    if (functionName.charAt(0) === "$" || functionName.charAt(0) === "_") {
      return;
    }
    const originalFunction = (client as any)[functionName];

    (client as any)[functionName] = (request: any, callback: any) => {
      if (callback && typeof callback === "function") {
        return originalFunction.call(client, request, (error: any, response: any) => {
          callback(error, response);
        });
      }

      return new Promise((resolve, reject) => {
        originalFunction.call(client, request, (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
      });
    };
  });
}

interface FieldMask {
  pathsList: string[];
}

export function formatCallResults(resultsList: any[], fieldMask: FieldMask) {
  const parsedResults: any[] = [];
  const { pathsList } = fieldMask;

  for (const result of resultsList) {
    const parsedRow = parseNestedEntities(result, pathsList);
    parsedResults.push(parsedRow);
  }
  return parsedResults;
}

function toCamelCase(str: string) {
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
}

function parseNestedEntities(data: any, props: string[], parent: any = {}) {
  for (let path of props) {
    path = toCamelCase(path);

    if (path.includes(".")) {
      const splitPath = path.split(".");
      const firstProp = splitPath[0];
      const firstPropExists = parent.hasOwnProperty(firstProp);

      if (!firstPropExists) {
        parent[firstProp] = {};
      }

      const remainingProps = splitPath.slice(1).join(".");
      const child = data[firstProp];

      if (!parent[firstProp].resourceName && child.hasOwnProperty("resourceName")) {
        parent[firstProp].resourceName = child.resourceName;
      }

      parseNestedEntities(child, [remainingProps], parent[firstProp]);
    } else {
      const value = data[path];
      const isObject = typeof value === "object";

      parent[path] = isObject ? value.value : value;
    }
  }

  return parent;
}
