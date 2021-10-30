import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = "http://localhost:8000/api/v1";

//const createRequest = (url) => ({url, headers: toursApiHeaders})

export const toursApi = createApi({
    reducerPath: 'toursApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllTours: builder.query({
            query: () => '/tours'
        })
    })
})

export const {
    useGetAllToursQuery 
} = toursApi;