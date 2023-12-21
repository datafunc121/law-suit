import { createSlice } from "@reduxjs/toolkit"

interface QueryCase {
  sessionId: string | null
  queriesList: Array<{ question: string; answer: string; related_cases: any[] }>
}

const initialState = {
  sessionId: null,
  queriesList: [],
} as QueryCase

const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    setSessionId: (state, action) => {
      state.sessionId = action.payload
    },
    insertQueryCase: (state, action) => {
      const { question, answer, related_cases } = action.payload
      state.queriesList.push({ question, answer, related_cases })
    },
    resetQueryList: (state) => {
      state.queriesList = []
    },
  },
})

export const { setSessionId, insertQueryCase, resetQueryList } =
  caseSlice.actions
export default caseSlice.reducer
