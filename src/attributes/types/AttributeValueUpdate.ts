/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AttributeValueCreateInput, AttributeTypeEnum, MeasurementUnitsEnum, AttributeInputTypeEnum, AttributeEntityTypeEnum, AttributeErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: AttributeValueUpdate
// ====================================================

export interface AttributeValueUpdate_attributeValueUpdate_attribute_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface AttributeValueUpdate_attributeValueUpdate_attribute_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface AttributeValueUpdate_attributeValueUpdate_attribute_values_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface AttributeValueUpdate_attributeValueUpdate_attribute_values_edges_node_file {
  __typename: "File";
  url: string;
  contentType: string | null;
}

export interface AttributeValueUpdate_attributeValueUpdate_attribute_values_edges_node {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  slug: string | null;
  file: AttributeValueUpdate_attributeValueUpdate_attribute_values_edges_node_file | null;
  reference: string | null;
  richText: any | null;
}

export interface AttributeValueUpdate_attributeValueUpdate_attribute_values_edges {
  __typename: "AttributeValueCountableEdge";
  cursor: string;
  node: AttributeValueUpdate_attributeValueUpdate_attribute_values_edges_node;
}

export interface AttributeValueUpdate_attributeValueUpdate_attribute_values {
  __typename: "AttributeValueCountableConnection";
  pageInfo: AttributeValueUpdate_attributeValueUpdate_attribute_values_pageInfo;
  edges: AttributeValueUpdate_attributeValueUpdate_attribute_values_edges[];
}

export interface AttributeValueUpdate_attributeValueUpdate_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
  type: AttributeTypeEnum | null;
  visibleInStorefront: boolean;
  filterableInDashboard: boolean;
  filterableInStorefront: boolean;
  unit: MeasurementUnitsEnum | null;
  metadata: (AttributeValueUpdate_attributeValueUpdate_attribute_metadata | null)[];
  privateMetadata: (AttributeValueUpdate_attributeValueUpdate_attribute_privateMetadata | null)[];
  availableInGrid: boolean;
  inputType: AttributeInputTypeEnum | null;
  entityType: AttributeEntityTypeEnum | null;
  storefrontSearchPosition: number;
  valueRequired: boolean;
  values: AttributeValueUpdate_attributeValueUpdate_attribute_values | null;
}

export interface AttributeValueUpdate_attributeValueUpdate_errors {
  __typename: "AttributeError";
  code: AttributeErrorCode;
  field: string | null;
}

export interface AttributeValueUpdate_attributeValueUpdate {
  __typename: "AttributeValueUpdate";
  attribute: AttributeValueUpdate_attributeValueUpdate_attribute | null;
  errors: AttributeValueUpdate_attributeValueUpdate_errors[];
}

export interface AttributeValueUpdate {
  attributeValueUpdate: AttributeValueUpdate_attributeValueUpdate | null;
}

export interface AttributeValueUpdateVariables {
  id: string;
  input: AttributeValueCreateInput;
  firstValues?: number | null;
  afterValues?: string | null;
  lastValues?: number | null;
  beforeValues?: string | null;
}
