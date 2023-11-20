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
    <div className="flex">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <textarea
          id={id}
          rows={1}
          className="bg-gray-50 border border-primary-200 text-gray-900 text-xs lg:text-sm rounded-s-xl focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

              if (textarea.scrollHeight >= 45) {
                textarea.rows = 1
              }
              if (textarea.scrollHeight >= 65) {
                textarea.rows = 2
              }
              if (textarea.scrollHeight >= 85) {
                textarea.rows = 3
              }
            }
          }}
        />
      </div>
      <div className="flex flex-row items-start">
        <div className="flex flex-row flex-center gap-2 bg-gray-50 p-2.5 rounded-e-xl border border-primary-200">
          <button
            type="button"
            className={`flex items-center text-blue-700  ${
              listening ? "p-2 border-2 bg-gray-300 rounded-full -my-2.5" : ""
            }`}
            onClick={handleSpeechRecognition}
          >
            <svg
              className="w-5 h-5 text-primary-700 hover:text-primary-500 dark:text-primary-600 dark:hover:text-primary-700 dark:focus:ring-primary-800"
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
            className="flex items-center"
            onClick={() => {
              setShowDropzone(!showDropzone)
            }}
          >
            <svg
              className="w-5 h-5 text-primary-700 hover:text-primary-500 dark:text-primary-600 dark:hover:text-primary-700 dark:focus:ring-primary-800"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          </button>
          <button
            type="submit"
            className="text-primary-700 hover:text-primary-500 dark:text-primary-600 dark:hover:text-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              className="w-5 h-5"
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
      </div>
    </div>
  )
}

export default SearchInput
