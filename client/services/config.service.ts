import API from "@/lib/api";

/*
  SAVE CONFIG
*/

export const saveConfig =
  async (
    name: string,
    config: any
  ) => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await API.post(
        "/configs",

        {
          name,
          config,
        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };

/*
  GET USER CONFIGS
*/

export const getConfigs =
  async () => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await API.get(
        "/configs",

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };

/*
  DELETE CONFIG
*/

export const deleteConfig =
  async (
    id: string
  ) => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await API.delete(

        `/configs/${id}`,

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };