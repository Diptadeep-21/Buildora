export type FieldType =
  | "text"
  | "email"
  | "number"
  | "textarea"
  | "select"
  | "checkbox";

export interface FieldConfig {
  name: string;
  label?: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface EntityConfig {
  name: string;
  fields: FieldConfig[];
}

export interface AppConfig {
  appName: string;
  entities: EntityConfig[];
}