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

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType', null, global);

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
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.displayName = 'proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum';
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
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum}
 */
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum;
  return proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum}
 */
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  SEARCH_MOBILE_APP: 2,
  DISPLAY_MOBILE_APP: 3,
  SEARCH_EXPRESS: 4,
  DISPLAY_EXPRESS: 5,
  SHOPPING_SMART_ADS: 6,
  DISPLAY_GMAIL_AD: 7,
  DISPLAY_SMART_CAMPAIGN: 8,
  VIDEO_OUTSTREAM: 9,
  VIDEO_ACTION: 10,
  VIDEO_NON_SKIPPABLE: 11
};

goog.object.extend(exports, proto.google.ads.googleads.v1.enums);
