// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var google_ads_googleads_v1_services_topic_constant_service_pb = require('../../../../../google/ads/googleads/v1/services/topic_constant_service_pb.js');
var google_ads_googleads_v1_resources_topic_constant_pb = require('../../../../../google/ads/googleads/v1/resources/topic_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_TopicConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_topic_constant_pb.TopicConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.TopicConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_TopicConstant(buffer_arg) {
  return google_ads_googleads_v1_resources_topic_constant_pb.TopicConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetTopicConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_topic_constant_service_pb.GetTopicConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetTopicConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetTopicConstantRequest(buffer_arg) {
  return google_ads_googleads_v1_services_topic_constant_service_pb.GetTopicConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch topic constants.
var TopicConstantServiceService = exports.TopicConstantServiceService = {
  // Returns the requested topic constant in full detail.
  getTopicConstant: {
    path: '/google.ads.googleads.v1.services.TopicConstantService/GetTopicConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_topic_constant_service_pb.GetTopicConstantRequest,
    responseType: google_ads_googleads_v1_resources_topic_constant_pb.TopicConstant,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetTopicConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetTopicConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_TopicConstant,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_TopicConstant,
  },
};

exports.TopicConstantServiceClient = grpc.makeGenericClientConstructor(TopicConstantServiceService);
