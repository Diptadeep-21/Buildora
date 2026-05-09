import {
  AppConfig,
} from "@/types/config.types";

export const validateConfig = (
  config: AppConfig
) => {

  if (!config.appName) {

    throw new Error(
      "App name required"
    );
  }

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

  config.pages.forEach(
    (page) => {

      if (!page.route) {

        throw new Error(
          "Page route missing"
        );
      }

      if (
        !page.entities
      ) {

        throw new Error(
          "Entities missing"
        );
      }
    }
  );

  return true;
};