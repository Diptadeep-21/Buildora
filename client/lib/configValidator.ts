import { AppConfig } from "@/types/config.types";

export const validateConfig = (
  config: AppConfig
) => {
  if (!config.appName) {
    throw new Error(
      "App name is required"
    );
  }

  if (
    !config.entities ||
    !Array.isArray(config.entities)
  ) {
    throw new Error(
      "Entities array missing"
    );
  }

  config.entities.forEach(
    (entity) => {
      if (!entity.name) {
        throw new Error(
          "Entity name missing"
        );
      }

      if (
        !entity.fields ||
        !Array.isArray(entity.fields)
      ) {
        throw new Error(
          `Fields missing in ${entity.name}`
        );
      }

      entity.fields.forEach(
        (field) => {
          if (!field.name) {
            throw new Error(
              "Field name missing"
            );
          }

          if (!field.type) {
            throw new Error(
              `Field type missing for ${field.name}`
            );
          }
        }
      );
    }
  );

  return true;
};