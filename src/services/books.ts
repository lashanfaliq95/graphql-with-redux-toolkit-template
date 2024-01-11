import { api as generatedApi } from "./generated"

export const booksApi = generatedApi.enhanceEndpoints({
  addTagTypes: ["Books"],
  endpoints: {
    getBooks: {
      providesTags: ["Books"],
      transformResponse: (res: any) => {
        return res.books
      },
    },
  },
})

export const { useGetBooksQuery } = booksApi
