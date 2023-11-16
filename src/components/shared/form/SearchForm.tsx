"use client"

import React, { useState } from "react"
import { Form, SearchInput } from "./fields"
import Modal from "../modal/Modal"
import Dropzone from "./fields/Dropzone"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"

interface SearchFormProps {
  containerStyles: string
}

const SearchForm: React.FC<SearchFormProps> = ({ containerStyles }) => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const onSearch = (data: any) => {
    console.log(data)
    router.push("/search")
  }

  return (
    <Form onSubmit={onSearch}>
      <div className={containerStyles}>
        <SearchInput
          id="search-query"
          name="search-query"
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
