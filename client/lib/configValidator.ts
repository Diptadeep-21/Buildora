import {
  AppConfig,
} from "@/types/config.types";

export const validateConfig = (
  config: AppConfig
) => {

  /*
    APP NAME
  */

  if (!config.appName) {

    throw new Error(
      "App name required"
    );
  }

  /*
    PAGES
  */

  if (
    !config.pages ||

    !Array.isArray(
      config.pages
    )
  ) {

    throw new Error(
      "Pages missing"
    );
  }

  /*
    VALIDATE PAGES
  */

  config.pages.forEach(
    (page) => {

      /*
        PAGE NAME
      */

      if (!page.name) {

        throw new Error(
          "Page name missing"
        );
      }

      /*
        ENTITIES
      */

      if (
        !page.entities ||

        !Array.isArray(
          page.entities
        )
      ) {

        throw new Error(
          `Entities missing in page "${page.name}"`
        );
      }

      /*
        VALIDATE ENTITIES
      */

      page.entities.forEach(
        (entity) => {

          if (!entity.name) {

            throw new Error(
              `Entity name missing in page "${page.name}"`
            );
          }

          /*
            FIELDS
          */

          if (
            !entity.fields ||

            !Array.isArray(
              entity.fields
            )
          ) {

            throw new Error(
              `Fields missing in entity "${entity.name}"`
            );
          }

          /*
            VALIDATE FIELDS
          */

          entity.fields.forEach(
            (field) => {

              if (!field.name) {

                throw new Error(
                  `Field name missing in entity "${entity.name}"`
                );
              }

              if (!field.type) {

                throw new Error(
                  `Field type missing in field "${field.name}"`
                );
              }
            }
          );
        }
      );
    }
  );

  return true;
};