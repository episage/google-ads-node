/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v1_resources_feed_pb = require('../../../../../google/ads/googleads/v1/resources/feed_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.services.FeedOperation', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.GetFeedRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateFeedResult', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateFeedsRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateFeedsResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.services.GetFeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.GetFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.services.GetFeedRequest.displayName = 'proto.google.ads.googleads.v1.services.GetFeedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.services.GetFeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.GetFeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.GetFeedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.GetFeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.services.GetFeedRequest}
 */
proto.google.ads.googleads.v1.services.GetFeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.GetFeedRequest;
  return proto.google.ads.googleads.v1.services.GetFeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.GetFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.GetFeedRequest}
 */
proto.google.ads.googleads.v1.services.GetFeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.services.GetFeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.GetFeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.GetFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.GetFeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.services.GetFeedRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.GetFeedRequest.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.services.MutateFeedsRequest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateFeedsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.services.MutateFeedsRequest.displayName = 'proto.google.ads.googleads.v1.services.MutateFeedsRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateFeedsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.google.ads.googleads.v1.services.FeedOperation.toObject, includeInstance),
    partialFailure: jspb.Message.getFieldWithDefault(msg, 3, false),
    validateOnly: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.services.MutateFeedsRequest}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateFeedsRequest;
  return proto.google.ads.googleads.v1.services.MutateFeedsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateFeedsRequest}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new proto.google.ads.googleads.v1.services.FeedOperation;
      reader.readMessage(value,proto.google.ads.googleads.v1.services.FeedOperation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPartialFailure(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidateOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateFeedsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v1.services.FeedOperation.serializeBinaryToWriter
    );
  }
  f = message.getPartialFailure();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getValidateOnly();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.setCustomerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated FeedOperation operations = 2;
 * @return {!Array<!proto.google.ads.googleads.v1.services.FeedOperation>}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.services.FeedOperation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.services.FeedOperation, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v1.services.FeedOperation>} value */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.setOperationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.services.FeedOperation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.services.FeedOperation}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v1.services.FeedOperation, opt_index);
};


proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.clearOperationsList = function() {
  this.setOperationsList([]);
};


/**
 * optional bool partial_failure = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.getPartialFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.setPartialFailure = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool validate_only = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.getValidateOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.ads.googleads.v1.services.MutateFeedsRequest.prototype.setValidateOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.services.FeedOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v1.services.FeedOperation.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v1.services.FeedOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.services.FeedOperation.displayName = 'proto.google.ads.googleads.v1.services.FeedOperation';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v1.services.FeedOperation.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.services.FeedOperation.OperationCase = {
  OPERATION_NOT_SET: 0,
  CREATE: 1,
  UPDATE: 2,
  REMOVE: 3
};

/**
 * @return {proto.google.ads.googleads.v1.services.FeedOperation.OperationCase}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.getOperationCase = function() {
  return /** @type {proto.google.ads.googleads.v1.services.FeedOperation.OperationCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v1.services.FeedOperation.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.FeedOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.FeedOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.FeedOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    create: (f = msg.getCreate()) && google_ads_googleads_v1_resources_feed_pb.Feed.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && google_ads_googleads_v1_resources_feed_pb.Feed.toObject(includeInstance, f),
    remove: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.services.FeedOperation}
 */
proto.google.ads.googleads.v1.services.FeedOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.FeedOperation;
  return proto.google.ads.googleads.v1.services.FeedOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.FeedOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.FeedOperation}
 */
proto.google.ads.googleads.v1.services.FeedOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 1:
      var value = new google_ads_googleads_v1_resources_feed_pb.Feed;
      reader.readMessage(value,google_ads_googleads_v1_resources_feed_pb.Feed.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 2:
      var value = new google_ads_googleads_v1_resources_feed_pb.Feed;
      reader.readMessage(value,google_ads_googleads_v1_resources_feed_pb.Feed.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.FeedOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.FeedOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.FeedOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_ads_googleads_v1_resources_feed_pb.Feed.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_ads_googleads_v1_resources_feed_pb.Feed.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v1.services.FeedOperation.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v1.resources.Feed create = 1;
 * @return {?proto.google.ads.googleads.v1.resources.Feed}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.getCreate = function() {
  return /** @type{?proto.google.ads.googleads.v1.resources.Feed} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_resources_feed_pb.Feed, 1));
};


/** @param {?proto.google.ads.googleads.v1.resources.Feed|undefined} value */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.setCreate = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.google.ads.googleads.v1.services.FeedOperation.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.services.FeedOperation.prototype.clearCreate = function() {
  this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.ads.googleads.v1.resources.Feed update = 2;
 * @return {?proto.google.ads.googleads.v1.resources.Feed}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.getUpdate = function() {
  return /** @type{?proto.google.ads.googleads.v1.resources.Feed} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_resources_feed_pb.Feed, 2));
};


/** @param {?proto.google.ads.googleads.v1.resources.Feed|undefined} value */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.setUpdate = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.ads.googleads.v1.services.FeedOperation.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.services.FeedOperation.prototype.clearUpdate = function() {
  this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string remove = 3;
 * @return {string}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.getRemove = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.setRemove = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v1.services.FeedOperation.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.services.FeedOperation.prototype.clearRemove = function() {
  jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v1.services.FeedOperation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.services.FeedOperation.prototype.hasRemove = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.services.MutateFeedsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateFeedsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.services.MutateFeedsResponse.displayName = 'proto.google.ads.googleads.v1.services.MutateFeedsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateFeedsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partialFailureError: (f = msg.getPartialFailureError()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.ads.googleads.v1.services.MutateFeedResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.services.MutateFeedsResponse}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateFeedsResponse;
  return proto.google.ads.googleads.v1.services.MutateFeedsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateFeedsResponse}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setPartialFailureError(value);
      break;
    case 2:
      var value = new proto.google.ads.googleads.v1.services.MutateFeedResult;
      reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateFeedResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateFeedsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartialFailureError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v1.services.MutateFeedResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.rpc.Status partial_failure_error = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.getPartialFailureError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/** @param {?proto.google.rpc.Status|undefined} value */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.setPartialFailureError = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.clearPartialFailureError = function() {
  this.setPartialFailureError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.hasPartialFailureError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MutateFeedResult results = 2;
 * @return {!Array<!proto.google.ads.googleads.v1.services.MutateFeedResult>}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.services.MutateFeedResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.services.MutateFeedResult, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v1.services.MutateFeedResult>} value */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.services.MutateFeedResult}
 */
proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v1.services.MutateFeedResult, opt_index);
};


proto.google.ads.googleads.v1.services.MutateFeedsResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.services.MutateFeedResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateFeedResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.services.MutateFeedResult.displayName = 'proto.google.ads.googleads.v1.services.MutateFeedResult';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.services.MutateFeedResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateFeedResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateFeedResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.services.MutateFeedResult}
 */
proto.google.ads.googleads.v1.services.MutateFeedResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateFeedResult;
  return proto.google.ads.googleads.v1.services.MutateFeedResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateFeedResult}
 */
proto.google.ads.googleads.v1.services.MutateFeedResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.services.MutateFeedResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateFeedResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateFeedResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateFeedResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.services.MutateFeedResult.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.MutateFeedResult.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v1.services);
