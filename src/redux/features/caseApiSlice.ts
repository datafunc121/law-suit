import { apiSlice } from "../services/apiService"

interface User {
  first_name: string
  last_name: string
  email: string
}

interface Case {
  question: string
  answer: string
}

interface RetrieveCasesQueryParams {
  session_id: string
}

interface CreateUserResponse {
  success: boolean
  user: User
}

const caseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveCases: builder.query<Case[], RetrieveCasesQueryParams>({
      query: ({ session_id }) => ({
        url: `/law/chat_history/${session_id}`,
        method: "GET",
        headers: {
          Authorization: `JWT ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    queryCase: builder.mutation({
      query: ({ question, session_id }) => ({
        url: "/law/query_case_chat/",
        method: "POST",
        body: { question, session_id },
        headers: {
          Authorization: `JWT ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    querySimilarCases: builder.mutation({
      query: ({ question, session_id }) => ({
        url: "/law/query_similar_cases/",
        method: "POST",
        body: { question, session_id },
        headers: {
          Authorization: `JWT ${localStorage.getItem("access_token")}`,
        },
        // transformResponse: (rawResponse) => {
        //   const { session_id, result } = rawResponse;
        //   return { session_id, result };
        // },
      }),
    }),
  }),
})

export const {
  useRetrieveCasesQuery,
  useQueryCaseMutation,
  useQuerySimilarCasesMutation,
} = caseApiSlice
