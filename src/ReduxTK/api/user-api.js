import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_Base_Url,
    prepareHeaders: (headers, { getState }) => {
      console.log(getState().token);
      const token = sessionStorage.getItem("token");
      console.log(token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getInfoAboutUser: builder.query({
      query: () => ({
        url: `api/v1/users/me`,
      }),
    }),
  }),
});
export const { useGetInfoAboutUserQuery } = userApiSlice;
export default userApiSlice;
