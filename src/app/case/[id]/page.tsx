"use client"

import "regenerator-runtime/runtime"
import { useState } from "react"
import { Grid } from "@/components/shared/list"
import { questionAnswers } from "./qs"
import Popover from "@/components/shared/popover/Popover"
import SearchForm from "@/components/shared/form/SearchForm"
import { useRetrieveCasesQuery } from "@/redux/features/caseApiSlice"
import { useRouter } from "next/router"
import { useAppSelector } from "@/redux/hooks"

export default function CaseDetail() {
  const [showDrawer, setShowDrawer] = useState(false)
  const [searchList, setSearchList] = useState([...questionAnswers])
  const queriesList = useAppSelector((state) => state.case.queriesList)
  //   const router = useRouter()
  //   const { id: string } = router.query
  const { data, error, isLoading } = useRetrieveCasesQuery({
    session_id: "d265a2cd-c0db-43cc-b969-2895c08c336f1",
  })

  console.log(data)

  const clickHandler = () => {
    setShowDrawer(!showDrawer)
  }

  const topSearches = [
    {
      id: 1,
      title: "Contract Breach",
      description:
        "The judgment ruled in favor of the plaintiff, awarding them ownership of the disputed property",
    },
    {
      id: 2,
      title: "Contract Breach",
      description:
        "The defendant was found liable for breaching the contract and ordered to pay damages to the plaintiff",
    },
    {
      id: 3,
      title: "Criminal Assault",
      description:
        "The defendant was found liable for breaching the contract and ordered to pay damages to the plaintiff",
    },
  ]

  return (
    <div className="overflow-y-auto">
      <main className="min-h-screen mx-auto px-4 md:px-24 pt-20">
        {/* Recent Search Grid  */}
        <div className="w-full lg:w-4/5 mx-auto overflow-hidden pb-56">
          <Grid
            data={data || []}
            keyExtractor={(item) => String(item?.question)}
            renderItem={(item) => (
              <article className="my-4">
                <div
                  className="flex items-start my-1 px-4 py-1 md:py-2 rounded-xl bg-white hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
                  onClick={() => {}}
                >
                  <img
                    className="w-6 h-6 rounded-full hidden md:inline-block mr-2"
                    src="help-circle.svg"
                    alt="question"
                  />
                  <p className="flex-1 text-xs font-semibold align-middle text-gray-900 dark:text-white">
                    {item?.question}
                  </p>
                </div>
                <div
                  className="flex items-start px-4 py-1 my-2 md:py-2 rounded-xl bg-white hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
                  onClick={() => {}}
                >
                  <img
                    className="md:w-6 md:h-6 rounded-full hidden md:inline-block md:mr-2"
                    src="search.svg"
                    alt="search result"
                  />
                  <section className="flex flex-col lg:flex-row xs:divide-x md:divide-y">
                    <section className="flex-1 p-1 md:p-4">
                      <p className="flex-1 text-xs text-justify text-gray-500 dark:text-gray-400 ">
                        {item?.answer}
                      </p>
                    </section>
                    <section className="flex-1 p-1 md:p-4">
                      <h6 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">
                        Related Results:
                      </h6>
                      <ul className="max-w-md space-y-1 divide-y-2 text-gray-500 list-none list-inside dark:text-gray-400">
                        {item?.related_cases?.map((relatedCase) => (
                          <li key={relatedCase.Doc_id}>
                            <Popover>
                              <h6 className="md:mb-0.5 text-xs font-medium text-gray-900 dark:text-white  flex-1">
                                {relatedCase.title}
                              </h6>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {relatedCase.Summery}
                              </p>
                            </Popover>
                            <Popover>
                              {/* {relatedCase?.tags?.map( */}
                              {["domestic", "violance"]?.map(
                                (tag: string | number) => (
                                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-xl dark:bg-blue-900 dark:text-blue-300">
                                    {tag}
                                  </span>
                                )
                              )}
                            </Popover>
                            <div className="flex flex-col md:flex-row justify-between text-xs font-medium text-gray-700">
                              <small>
                                Similarity:{" "}
                                {(relatedCase?.Score).toFixed(1) || 0}%
                              </small>
                              <small>
                                Citations: {relatedCase?.citationCount || 0}
                              </small>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </section>
                </div>
              </article>
            )}
          />
          <Grid
            data={queriesList || []}
            keyExtractor={(item) => String(item?.question)}
            renderItem={(item) => (
              <article className="my-4">
                <div
                  className="flex items-start my-1 px-4 py-1 md:py-2 rounded-xl bg-white hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
                  onClick={() => {}}
                >
                  <img
                    className="w-6 h-6 rounded-full hidden md:inline-block mr-2"
                    src="help-circle.svg"
                    alt="question"
                  />
                  <p className="flex-1 text-xs font-semibold align-middle text-gray-900 dark:text-white">
                    {item?.question}
                  </p>
                </div>
                <div
                  className="flex items-start px-4 py-1 my-2 md:py-2 rounded-xl bg-white hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
                  onClick={() => {}}
                >
                  <img
                    className="md:w-6 md:h-6 rounded-full hidden md:inline-block md:mr-2"
                    src="search.svg"
                    alt="search result"
                  />
                  <section className="flex flex-col lg:flex-row lg:divide-x lg:divide-y">
                    <section className="flex-1 p-1 md:p-4">
                      <p className="flex-1 text-xs text-justify text-gray-500 dark:text-gray-400 ">
                        {item?.answer}
                      </p>
                    </section>
                    <section className="flex-1 p-1 md:p-4">
                      <h6 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">
                        Related Results:
                      </h6>
                      <ul className="max-w-md space-y-1 divide-y-2 text-gray-500 list-none list-inside dark:text-gray-400">
                        {/* <ul className="space-y-3  text-gray-500 dark:text-gray-400"> */}
                        {item.related_cases?.map((relatedCase) => (
                          <li key={relatedCase.Doc_id}>
                            <Popover>
                              <h6 className="md:mb-0.5 text-xs font-medium text-gray-900 dark:text-white  flex-1">
                                {relatedCase.title}
                              </h6>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {relatedCase.Summery?.split(/\s+/)
                                  .slice(0, 50)
                                  .join(" ")}
                              </p>
                            </Popover>

                            <Popover>
                              {/* {relatedCase?.tags?.map( */}
                              {["domestic", "violance"]?.map(
                                (tag: string | number) => (
                                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-xl dark:bg-blue-900 dark:text-blue-300">
                                    {tag}
                                  </span>
                                )
                              )}
                            </Popover>
                            <div className="flex flex-col md:flex-row justify-between text-xs font-medium text-gray-700">
                              <small>
                                Similarity:{" "}
                                {(relatedCase?.Score).toFixed(1) || 0}%
                              </small>
                              <small>
                                Citations: {relatedCase?.citationCount || 0}
                              </small>
                            </div>
                          </li>
                        ))}
                        {/* </ul> */}
                      </ul>
                    </section>
                  </section>
                </div>
              </article>
            )}
          />
        </div>
        {/* Recent Search Grid  */}

        {/* Search Form */}
        <SearchForm containerStyles="w-full lg:w-3/4 mx-auto py-4 px-4 md:px-10 fixed bottom-0 left-1/2 transform -translate-x-1/2" />
        {/* Search Form */}
      </main>
    </div>
  )
}
