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

var google_ads_googleads_v1_enums_budget_delivery_method_pb = require('../../../../../google/ads/googleads/v1/enums/budget_delivery_method_pb.js');
var google_ads_googleads_v1_enums_budget_period_pb = require('../../../../../google/ads/googleads/v1/enums/budget_period_pb.js');
var google_ads_googleads_v1_enums_budget_status_pb = require('../../../../../google/ads/googleads/v1/enums/budget_status_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.resources.CampaignBudget', null, global);

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
proto.google.ads.googleads.v1.resources.CampaignBudget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.resources.CampaignBudget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.resources.CampaignBudget.displayName = 'proto.google.ads.googleads.v1.resources.CampaignBudget';
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
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.CampaignBudget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.CampaignBudget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    amountMicros: (f = msg.getAmountMicros()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    totalAmountMicros: (f = msg.getTotalAmountMicros()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    deliveryMethod: jspb.Message.getFieldWithDefault(msg, 7, 0),
    explicitlyShared: (f = msg.getExplicitlyShared()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    referenceCount: (f = msg.getReferenceCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    hasRecommendedBudget: (f = msg.getHasRecommendedBudget()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    recommendedBudgetAmountMicros: (f = msg.getRecommendedBudgetAmountMicros()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    period: jspb.Message.getFieldWithDefault(msg, 13, 0),
    recommendedBudgetEstimatedChangeWeeklyClicks: (f = msg.getRecommendedBudgetEstimatedChangeWeeklyClicks()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    recommendedBudgetEstimatedChangeWeeklyCostMicros: (f = msg.getRecommendedBudgetEstimatedChangeWeeklyCostMicros()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    recommendedBudgetEstimatedChangeWeeklyInteractions: (f = msg.getRecommendedBudgetEstimatedChangeWeeklyInteractions()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    recommendedBudgetEstimatedChangeWeeklyViews: (f = msg.getRecommendedBudgetEstimatedChangeWeeklyViews()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v1.resources.CampaignBudget}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.CampaignBudget;
  return proto.google.ads.googleads.v1.resources.CampaignBudget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.CampaignBudget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.CampaignBudget}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setAmountMicros(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setTotalAmountMicros(value);
      break;
    case 6:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.BudgetStatusEnum.BudgetStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod} */ (reader.readEnum());
      msg.setDeliveryMethod(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setExplicitlyShared(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setReferenceCount(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setHasRecommendedBudget(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setRecommendedBudgetAmountMicros(value);
      break;
    case 13:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.BudgetPeriodEnum.BudgetPeriod} */ (reader.readEnum());
      msg.setPeriod(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setRecommendedBudgetEstimatedChangeWeeklyClicks(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setRecommendedBudgetEstimatedChangeWeeklyCostMicros(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setRecommendedBudgetEstimatedChangeWeeklyInteractions(value);
      break;
    case 17:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setRecommendedBudgetEstimatedChangeWeeklyViews(value);
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
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.CampaignBudget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.CampaignBudget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAmountMicros();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountMicros();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getDeliveryMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getExplicitlyShared();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getReferenceCount();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getHasRecommendedBudget();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getRecommendedBudgetAmountMicros();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getRecommendedBudgetEstimatedChangeWeeklyClicks();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getRecommendedBudgetEstimatedChangeWeeklyCostMicros();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getRecommendedBudgetEstimatedChangeWeeklyInteractions();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getRecommendedBudgetEstimatedChangeWeeklyViews();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int64Value amount_micros = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getAmountMicros = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setAmountMicros = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearAmountMicros = function() {
  this.setAmountMicros(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasAmountMicros = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value total_amount_micros = 10;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getTotalAmountMicros = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 10));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setTotalAmountMicros = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearTotalAmountMicros = function() {
  this.setTotalAmountMicros(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasTotalAmountMicros = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.ads.googleads.v1.enums.BudgetStatusEnum.BudgetStatus status = 6;
 * @return {!proto.google.ads.googleads.v1.enums.BudgetStatusEnum.BudgetStatus}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.BudgetStatusEnum.BudgetStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.BudgetStatusEnum.BudgetStatus} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.ads.googleads.v1.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod delivery_method = 7;
 * @return {!proto.google.ads.googleads.v1.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getDeliveryMethod = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setDeliveryMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.BoolValue explicitly_shared = 8;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getExplicitlyShared = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 8));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setExplicitlyShared = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearExplicitlyShared = function() {
  this.setExplicitlyShared(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasExplicitlyShared = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Int64Value reference_count = 9;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getReferenceCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 9));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setReferenceCount = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearReferenceCount = function() {
  this.setReferenceCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasReferenceCount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.BoolValue has_recommended_budget = 11;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getHasRecommendedBudget = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 11));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setHasRecommendedBudget = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearHasRecommendedBudget = function() {
  this.setHasRecommendedBudget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasHasRecommendedBudget = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Int64Value recommended_budget_amount_micros = 12;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getRecommendedBudgetAmountMicros = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 12));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setRecommendedBudgetAmountMicros = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearRecommendedBudgetAmountMicros = function() {
  this.setRecommendedBudgetAmountMicros(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasRecommendedBudgetAmountMicros = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.ads.googleads.v1.enums.BudgetPeriodEnum.BudgetPeriod period = 13;
 * @return {!proto.google.ads.googleads.v1.enums.BudgetPeriodEnum.BudgetPeriod}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getPeriod = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.BudgetPeriodEnum.BudgetPeriod} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.BudgetPeriodEnum.BudgetPeriod} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setPeriod = function(value) {
  jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional google.protobuf.Int64Value recommended_budget_estimated_change_weekly_clicks = 14;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyClicks = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 14));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyClicks = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyClicks = function() {
  this.setRecommendedBudgetEstimatedChangeWeeklyClicks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyClicks = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Int64Value recommended_budget_estimated_change_weekly_cost_micros = 15;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyCostMicros = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 15));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyCostMicros = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyCostMicros = function() {
  this.setRecommendedBudgetEstimatedChangeWeeklyCostMicros(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyCostMicros = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Int64Value recommended_budget_estimated_change_weekly_interactions = 16;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyInteractions = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 16));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyInteractions = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyInteractions = function() {
  this.setRecommendedBudgetEstimatedChangeWeeklyInteractions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyInteractions = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Int64Value recommended_budget_estimated_change_weekly_views = 17;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyViews = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 17));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyViews = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyViews = function() {
  this.setRecommendedBudgetEstimatedChangeWeeklyViews(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyViews = function() {
  return jspb.Message.getField(this, 17) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.resources);
