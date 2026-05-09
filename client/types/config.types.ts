export interface FieldConfig {

  name: string;

  label?: string;

  type: string;

  required?: boolean;

  placeholder?: string;

  options?: string[];
}

export interface EntityConfig {

  name: string;

  fields: FieldConfig[];
}

export interface PageConfig {

  name: string;

  route: string;

  entities: EntityConfig[];
}

export interface AppConfig {

  appName: string;

  pages: PageConfig[];
}