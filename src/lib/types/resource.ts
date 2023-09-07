type SchemaFieldTypes = "id" | "string" | "number" | "boolean" | "timestamp";

type SchemaField = {
  name: string;
  type: SchemaFieldTypes;
};

export type ResourceSchema = SchemaField[];
