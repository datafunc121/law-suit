"use client"

import { useState, useRef } from "react"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
// import Modal from "../modal/Modal"
import Dropzone from "./Dropzone"
import { useFormContext } from "react-hook-form"

interface SearchInputProps {
  id: string
  name: string
  showDropzone: Boolean
  setShowDropzone: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchInput: React.FC<SearchInputProps> = ({
  id,
  name,
  showDropzone,
  setShowDropzone,
}) => {
  const { register, setValue } = useFormContext()
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition()

  // if (browserSupportsSpeechRecognition) {
  //   return <div>Your Browser doesnt support speech recognition</div>
  // }

  if (listening) {
    setValue(name, transcript)
  }

  const handleSpeechRecognition = () => {
    if (!listening) {
      SpeechRecognition.startListening({
        continuous: true,
      })
    } else {
      SpeechRecognition.stopListening()
      // Use the transcript for searching or update the input value
      // setValue(name, transcript)
      resetTranscript() // Clear the transcript after stopping
    }
  }

  let timeoutId: any = null

  const textareaRef = useRef<any>()
  const { ref, ...rest } = register(name)

  return (
    <div className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        {/* <input
          type="text"
          id={id}
          // value={transcript}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-s-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Cases, Judgement..."
          {...register(name)}
          required
        /> */}

        <textarea
          id={id}
          // rows={1}
          // minLength={}
          // rows={2} // Set the maximum number of rows to 2
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-s-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Cases, Judgement..."
          // {...register(name)}
          ref={(e) => {
            ref(e)
            textareaRef.current = e
          }}
          {...rest}
          required
          onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (textareaRef && textareaRef.current) {
              const textarea = textareaRef.current

              // Set the maximum number of rows to 2
              const maxRows = 2

              // Set the minimum number of rows to 1
              const minRows = 1
              console.log(textarea.clientHeight, textarea.clientHeight)

              // Calculate the number of rows based on content height
              const rows = Math.min(
                maxRows,
                Math.max(
                  minRows,
                  Math.ceil(textarea.scrollHeight / textarea.clientHeight)
                )
              )

              textarea.rows = rows
            }
          }}
        />

        <button
          type="button"
          className={`absolute inset-y-0 right-6 flex items-center mr-2  ${
            listening ? "p-2 border-2 bg-gray-200 rounded-full" : ""
          }`}
          onClick={handleSpeechRecognition}
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center mr-2"
          onClick={() => {
            setShowDropzone(!showDropzone)
          }}
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            // className="feather feather-upload"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className="py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-e-xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  )
}

export default SearchInput
