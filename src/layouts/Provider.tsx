"use client"

import { makeStore } from "@/redux/store"
import { Provider } from "react-redux"

interface Props {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props) => {
  return <Provider store={makeStore()}>{children}</Provider>
}

export default AppProvider
