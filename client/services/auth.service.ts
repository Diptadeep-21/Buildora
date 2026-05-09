import API from "@/lib/api";

/*
  SIGNUP
*/

export const signupUser =
  async (
    email: string,
    password: string
  ) => {

    const response =
      await API.post(
        "/auth/signup",
        {
          email,
          password,
        }
      );

    return response.data;
  };

/*
  LOGIN
*/

export const loginUser =
  async (
    email: string,
    password: string
  ) => {

    const response =
      await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

    return response.data;
  };