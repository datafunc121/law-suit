"use client"

import React, { useState } from "react"
import { Form, SearchInput } from "./fields"
import Modal from "../modal/Modal"
import Dropzone from "./fields/Dropzone"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"
import {
  useQueryCaseMutation,
  useQuerySimilarCasesMutation,
} from "@/redux/features/caseApiSlice"
import { useAppDispatch } from "@/redux/hooks"
import { insertQueryCase } from "@/redux/features/caseSlice"

interface SearchFormProps {
  containerStyles: string
}

const SearchForm: React.FC<SearchFormProps> = ({ containerStyles }) => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const dispatch = useAppDispatch()
  const [queryCase, { isLoading }] = useQueryCaseMutation()
  const [querySimilarCases] = useQuerySimilarCasesMutation()

  console.log(router)

  const onSearch = async (data: any) => {
    try {
      const resonseSummary = await queryCase({
        question: data,
        session_id: null,
      }).unwrap()

      const responseSimilarCases = await querySimilarCases({
        question: data,
        session_id: null,
      }).unwrap()

      dispatch(
        insertQueryCase({
          question: data?.query,
          answer: resonseSummary?.result,
          related_cases: responseSimilarCases?.result,
        })
      )

      router.push(`/case/${responseSimilarCases?.session_id}`)
      // console.log("Query Case Successful")
      // router.push("/")
    } catch (error) {
      console.error("Query Case Failed", error)
      // Handle login failure
    }
  }

  return (
    <Form onSubmit={onSearch}>
      <div className={containerStyles}>
        <SearchInput
          id="query"
          name="query"
          showDropzone={showModal}
          setShowDropzone={setShowModal}
        />
      </div>
      <Modal headerTitle="" showModal={showModal} setShowModal={setShowModal}>
        <Dropzone id="query-files" name="queryFiles" />
      </Modal>
    </Form>
  )
}

export default SearchForm
