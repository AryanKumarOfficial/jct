export interface ApiHeader {
  name: string;
  description: string;
  required: boolean;
}

export interface ApiParameter {
  name: string;
  description: string;
  required: boolean;
  type: "path" | "query" | "body";
}

export interface ApiRequestBody {
  type: "json" | "formData" | "none";
  example?: string;
}

export interface ApiResponseBody {
  type: "json" | "text" | "none";
  example: string;
}

export interface ApiEndpoint {
  id: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
  requestBody: ApiRequestBody;
  responseBody: ApiResponseBody;
  parameters: ApiParameter[];
  headers: ApiHeader[];
}

export interface ApiSection {
  name: string;
  endpoints: ApiEndpoint[];
}
