import API from "@/lib/api";

/*
  SAVE CONFIG
*/

export const saveConfig =
  async (
    name: string,
    config: any
  ) => {

    const response =
      await API.post(
        "/configs",
        {
          name,
          config,
        }
      );

    return response.data;
  };

/*
  GET USER CONFIGS
*/

export const getConfigs =
  async () => {

    const response =
      await API.get(
        "/configs"
      );

    return response.data;
  };

  export const deleteConfig =
  async (
    id: string
  ) => {

    const response =
      await API.delete(
        `/configs/${id}`
      );

    return response.data;
  };