import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2411-ftb-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;


// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.
const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Puppy'],
    endpoints: () => ({})
  });
  
  export default api;