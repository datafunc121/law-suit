import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query"
import { setAuth, logout } from "../features/authSlice"
import { Mutex } from "async-mutex"

const mutex = new Mutex()

// Function to get and set the access token from some secure storage
const getAccessToken = () => {
  // Use your own logic to retrieve the access token from storage
  return localStorage.getItem("access_token")
}

const setAccessToken = (token: string) => {
  // Use your own logic to securely store the access token
  localStorage.setItem("access_token", token)
}

const baseQuery = fetchBaseQuery({
  baseUrl: `https://api.casepolaris.com/api`,
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult: any = await baseQuery(
          {
            url: "/law/auth/jwt/refresh/",
            method: "POST",
            body: { refresh: localStorage.getItem("refresh_token") },
          },
          api,
          extraOptions
        )

        if (refreshResult?.data && refreshResult.data?.access) {
          // Update the access token and store it securely
          setAccessToken(refreshResult?.data?.access)
          api.dispatch(setAuth())
          // Retry the original request with the new access token
          result = await baseQuery(args, api, {
            ...extraOptions,
            headers: {
              // ...extraOptions?.headers,
              Authorization: `JWT ${refreshResult.data.access}`,
            },
          })
        } else {
          api.dispatch(logout())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
})

// Additional utility function to get the current access token
export const getAccessTokenFromStorage = () => {
  return getAccessToken()
}
