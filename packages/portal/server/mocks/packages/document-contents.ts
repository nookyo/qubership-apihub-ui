/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { DocumentDto } from './types'
import { JSON_FILE_FORMAT } from '../global-search/types'

export const OPENAPI_SPEC: DocumentDto = {
  fileId: 'openapi-sample.yaml',
  slug: 'openapi-yaml',
  type: 'openapi-3-0',
  format: 'yaml',
  title: 'OpenApi Sample',
  labels: ['QS', 'APIHUB'],
  metaData: {
    description: 'Hello world Hello world Hello world',
    version: '2022.1',
  },
  operations: [
    {
      operationId: 'get-v1-pets',
      title: 'List Pets',
      deprecated: true,
      apiKind: 'bwc',
      apiType: 'rest',
      dataHash: 'sdfsdfsf242',
      metadata: {
        tags: ['RestControllerV1'],
        path: '/v1/pets',
        method: 'get',
      },
    },
    {
      operationId: 'get-v3-fruit',
      title: 'Get Fruit',
      deprecated: false,
      apiKind: 'no-bwc',
      apiType: 'rest',
      dataHash: 'sdfsdfsf243',
      metadata: {
        tags: ['RestControllerV3'],
        path: '/v3/fruit',
        method: 'get',
      },
    },
    {
      operationId: 'get-v5-array-cars',
      title: 'Array Cars',
      apiKind: 'bwc',
      apiType: 'rest',
      dataHash: 'sdfsdfsf244',
      metadata: {
        tags: ['RestControllerV5'],
        path: '/v5/cars/array',
        method: 'get',
      },
    },
    {
      operationId: 'get-v5-array-cars',
      title: 'Get Cars 2',
      apiKind: 'bwc',
      apiType: 'rest',
      dataHash: 'sdfsdfsf245',
      metadata: {
        tags: ['A', 'B'],
        path: '/v5/cars/array',
        method: 'post',
      },
    },
  ],
  description: 'TEST TEST TEST',
  info: {
    contact: {
      name: 'API Support',
      url: 'https://example.com/support',
      email: 'apiteam@swager.io',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://httpd.apache.org',
    },
    termsOfService: 'https://example.com/support',
  },
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'https://example.com/support',
  },
}

export const MARKDOWN_SPEC: DocumentDto = {
  fileId: 'markdown-sample.md',
  slug: 'api-md',
  type: 'unknown',
  format: 'md',
  title: 'Markdown Sample',
}

export const DOC_SPEC: DocumentDto = {
  fileId: 'unknown-sample.doc',
  slug: 'api-doc',
  type: 'unknown',
  format: 'unknown',
  title: 'Unknown Sample',
}

export const GRAPHQLAPI_SPEC: DocumentDto = {
  fileId: 'unknown-sample.graphql',
  slug: 'api-graphql',
  type: 'graphql',
  format: JSON_FILE_FORMAT,
  title: 'Graphql Sample',
}

export const OPENAPI_3_0_SPEC_RAW = `
{
  "openapi": "3.0.2",
  "servers": [
    {
      "url": "/v3"
    }
  ],
  "info": {
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/main/src/main/resources/openapi.yaml)",
    "version": "1.0.20-SNAPSHOT",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "tags": [
    {
      "name": "pet",
      "description": "Everything about your Pets",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://swagger.io"
      }
    },
    {
      "name": "store",
      "description": "Access to Petstore orders",
      "externalDocs": {
        "description": "Find out more about our store",
        "url": "http://swagger.io"
      }
    },
    {
      "name": "user",
      "description": "Operations about user"
    }
  ],
  "paths": {
    "/pet": {
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "Add a new pet to the store",
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ],
        "requestBody": {
          "description": "Create a new pet in the store",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "pet"
        ],
        "summary": "Update an existing pet",
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Pet not found"
          },
          "405": {
            "description": "Validation exception"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ],
        "requestBody": {
          "description": "Update an existent pet in the store",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            }
          }
        }
      }
    },
    "/pet/findByStatus": {
      "get": {
        "tags": [
          "pet"
        ],
        "summary": "Finds Pets by status",
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "description": "Status values that need to be considered for filter",
            "required": false,
            "explode": true,
            "schema": {
              "type": "string",
              "enum": [
                "available",
                "pending",
                "sold"
              ],
              "default": "available"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid status value"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pet/findByTags": {
      "get": {
        "tags": [
          "pet"
        ],
        "summary": "Finds Pets by tags",
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": [
          {
            "name": "tags",
            "in": "query",
            "description": "Tags to filter by",
            "required": false,
            "explode": true,
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid tag value"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pet/{petId}": {
      "get": {
        "tags": [
          "pet"
        ],
        "summary": "Find pet by ID",
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": [
          {
            "name": "petId",
            "in": "path",
            "description": "ID of pet to return",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Pet not found"
          }
        },
        "security": [
          {
            "api_key": []
          },
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      },
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "Updates a pet in the store with form data",
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": [
          {
            "name": "petId",
            "in": "path",
            "description": "ID of pet that needs to be updated",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "name",
            "in": "query",
            "description": "Name of pet that needs to be updated",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Status of pet that needs to be updated",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "405": {
            "description": "Invalid input"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      },
      "delete": {
        "tags": [
          "pet"
        ],
        "summary": "Deletes a pet",
        "description": "",
        "operationId": "deletePet",
        "parameters": [
          {
            "name": "api_key",
            "in": "header",
            "description": "",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "petId",
            "in": "path",
            "description": "Pet id to delete",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid pet value"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pet/{petId}/uploadImage": {
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "uploads an image",
        "description": "",
        "operationId": "uploadFile",
        "parameters": [
          {
            "name": "petId",
            "in": "path",
            "description": "ID of pet to update",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "additionalMetadata",
            "in": "query",
            "description": "Additional Metadata",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiResponse"
                }
              }
            }
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ],
        "requestBody": {
          "content": {
            "application/octet-stream": {
              "schema": {
                "type": "string",
                "format": "binary"
              }
            }
          }
        }
      }
    },
    "/store/inventory": {
      "get": {
        "tags": [
          "store"
        ],
        "summary": "Returns pet inventories by status",
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "x-swagger-router-controller": "OrderController",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "integer",
                    "format": "int32"
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "api_key": []
          }
        ]
      }
    },
    "/store/order": {
      "post": {
        "tags": [
          "store"
        ],
        "summary": "Place an order for a pet",
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "x-swagger-router-controller": "OrderController",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Order"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Order"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Order"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Order"
              }
            }
          }
        }
      }
    },
    "/store/order/{orderId}": {
      "get": {
        "tags": [
          "store"
        ],
        "summary": "Find purchase order by ID",
        "x-swagger-router-controller": "OrderController",
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.",
        "operationId": "getOrderById",
        "parameters": [
          {
            "name": "orderId",
            "in": "path",
            "description": "ID of order that needs to be fetched",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Order"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Order"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Order not found"
          }
        }
      },
      "delete": {
        "tags": [
          "store"
        ],
        "summary": "Delete purchase order by ID",
        "x-swagger-router-controller": "OrderController",
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": [
          {
            "name": "orderId",
            "in": "path",
            "description": "ID of the order that needs to be deleted",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Order not found"
          }
        }
      }
    },
    "/user": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Create user",
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            }
          },
          "description": "Created user object"
        }
      }
    },
    "/user/createWithList": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Creates list of users with given input array",
        "description": "Creates list of users with given input array",
        "x-swagger-router-controller": "UserController",
        "operationId": "createUsersWithListInput",
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "default": {
            "description": "successful operation"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          }
        }
      }
    },
    "/user/login": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Logs user into the system",
        "description": "",
        "operationId": "loginUser",
        "parameters": [
          {
            "name": "username",
            "in": "query",
            "description": "The user name for login",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "password",
            "in": "query",
            "description": "The password for login in clear text",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "headers": {
              "X-Rate-Limit": {
                "description": "calls per hour allowed by the user",
                "schema": {
                  "type": "integer",
                  "format": "int32"
                }
              },
              "X-Expires-After": {
                "description": "date in UTC when token expires",
                "schema": {
                  "type": "string",
                  "format": "date-time"
                }
              }
            },
            "content": {
              "application/xml": {
                "schema": {
                  "type": "string"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          },
          "400": {
            "description": "Invalid username/password supplied"
          }
        }
      }
    },
    "/user/logout": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Logs out current logged in user session",
        "description": "",
        "operationId": "logoutUser",
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/user/{username}": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Get user by user name",
        "description": "",
        "operationId": "getUserByName",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "400": {
            "description": "Invalid username supplied"
          },
          "404": {
            "description": "User not found"
          }
        }
      },
      "put": {
        "tags": [
          "user"
        ],
        "summary": "Update user",
        "x-swagger-router-controller": "UserController",
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "name that needs to be updated",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        },
        "requestBody": {
          "description": "Update an existent user in the store",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "user"
        ],
        "summary": "Delete user",
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "The name that needs to be deleted",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid username supplied"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    }
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "components": {
    "schemas": {
      "Order": {
        "x-swagger-router-model": "io.swagger.petstore.model.Order",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "petId": {
            "type": "integer",
            "format": "int64",
            "example": 198772
          },
          "quantity": {
            "type": "integer",
            "format": "int32",
            "example": 7
          },
          "shipDate": {
            "type": "string",
            "format": "date-time"
          },
          "status": {
            "type": "string",
            "description": "Order Status",
            "enum": [
              "placed",
              "approved",
              "delivered"
            ],
            "example": "approved"
          },
          "complete": {
            "type": "boolean"
          }
        },
        "xml": {
          "name": "order"
        },
        "type": "object"
      },
      "Customer": {
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 100000
          },
          "username": {
            "type": "string",
            "example": "fehguy"
          },
          "address": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Address"
            },
            "xml": {
              "wrapped": true,
              "name": "addresses"
            }
          }
        },
        "xml": {
          "name": "customer"
        },
        "type": "object"
      },
      "Address": {
        "properties": {
          "street": {
            "type": "string",
            "example": "437 Lytton"
          },
          "city": {
            "type": "string",
            "example": "Palo Alto"
          },
          "state": {
            "type": "string",
            "example": "CA"
          },
          "zip": {
            "type": "string",
            "example": 94301
          }
        },
        "xml": {
          "name": "address"
        },
        "type": "object"
      },
      "Category": {
        "x-swagger-router-model": "io.swagger.petstore.model.Category",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 1
          },
          "name": {
            "type": "string",
            "example": "Dogs"
          }
        },
        "xml": {
          "name": "category"
        },
        "type": "object"
      },
      "User": {
        "x-swagger-router-model": "io.swagger.petstore.model.User",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "username": {
            "type": "string",
            "example": "theUser"
          },
          "firstName": {
            "type": "string",
            "example": "John"
          },
          "lastName": {
            "type": "string",
            "example": "James"
          },
          "email": {
            "type": "string",
            "example": "john@email.com"
          },
          "password": {
            "type": "string",
            "example": 12345
          },
          "phone": {
            "type": "string",
            "example": 12345
          },
          "userStatus": {
            "type": "integer",
            "format": "int32",
            "example": 1,
            "description": "User Status"
          }
        },
        "xml": {
          "name": "user"
        },
        "type": "object"
      },
      "Tag": {
        "x-swagger-router-model": "io.swagger.petstore.model.Tag",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "tag"
        },
        "type": "object"
      },
      "Pet": {
        "x-swagger-router-model": "io.swagger.petstore.model.Pet",
        "required": [
          "name",
          "photoUrls"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "category": {
            "$ref": "#/components/schemas/Category"
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "$ref": "#/components/schemas/Tag",
              "xml": {
                "name": "tag"
              }
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        },
        "type": "object"
      },
      "ApiResponse": {
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "type": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        },
        "xml": {
          "name": "##default"
        },
        "type": "object"
      }
    },
    "requestBodies": {
      "Pet": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Pet"
            }
          },
          "application/xml": {
            "schema": {
              "$ref": "#/components/schemas/Pet"
            }
          }
        },
        "description": "Pet object that needs to be added to the store"
      },
      "UserArray": {
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        },
        "description": "List of user object"
      }
    },
    "securitySchemes": {
      "petstore_auth": {
        "type": "oauth2",
        "flows": {
          "implicit": {
            "authorizationUrl": "https://petstore.swagger.io/oauth/authorize",
            "scopes": {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    }
  }
}
`

export const MARKDOWN_SPEC_RAW = `
# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

\`code\`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^
`
