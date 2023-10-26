type SchemaFieldTypes = 'id' | 'string' | 'number' | 'boolean' | 'timestamp' | any;

type SchemaField = {
	name: string;
	type: SchemaFieldTypes;
	value?: string | null;
	default?: string | null;
};

export type ResourceSchema = SchemaField[];
