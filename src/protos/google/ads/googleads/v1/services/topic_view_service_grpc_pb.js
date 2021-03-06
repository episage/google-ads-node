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
var google_ads_googleads_v1_services_topic_view_service_pb = require('../../../../../google/ads/googleads/v1/services/topic_view_service_pb.js');
var google_ads_googleads_v1_resources_topic_view_pb = require('../../../../../google/ads/googleads/v1/resources/topic_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_TopicView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_topic_view_pb.TopicView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.TopicView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_TopicView(buffer_arg) {
  return google_ads_googleads_v1_resources_topic_view_pb.TopicView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetTopicViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_topic_view_service_pb.GetTopicViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetTopicViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetTopicViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_topic_view_service_pb.GetTopicViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage topic views.
var TopicViewServiceService = exports.TopicViewServiceService = {
  // Returns the requested topic view in full detail.
  getTopicView: {
    path: '/google.ads.googleads.v1.services.TopicViewService/GetTopicView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_topic_view_service_pb.GetTopicViewRequest,
    responseType: google_ads_googleads_v1_resources_topic_view_pb.TopicView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetTopicViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetTopicViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_TopicView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_TopicView,
  },
};

exports.TopicViewServiceClient = grpc.makeGenericClientConstructor(TopicViewServiceService);
