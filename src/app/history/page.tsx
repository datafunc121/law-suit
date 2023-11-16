"use client"

import "regenerator-runtime/runtime"
import { useState } from "react"
import { Grid } from "@/components/shared/list"
import { questionAnswers } from "./qs"
import Popover from "@/components/shared/popover/Popover"
import SearchForm from "@/components/shared/form/SearchForm"
import Drawer from "@/layouts/Drawer"

export default function History() {
  const [showDrawer, setShowDrawer] = useState(false)

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
        {/* Drawer */}
        {/* <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} /> */}

        {/* Query list Grid  */}
        <div className="w-full lg:w-4/5 mx-auto overflow-hidden pb-56">
          <Grid
            data={questionAnswers}
            keyExtractor={(item) => String(item?.question)}
            renderItem={(item) => (
              <article className="my-4">
                <div
                  className="flex items-start my-1 px-4 py-1 md:py-2 rounded-xl bg-white hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
                  onClick={() => {}}
                >
                  <img
                    className="w-6 h-6 rounded-full mr-2"
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
                    className="md:w-6 md:h-6 rounded-full md:mr-2"
                    src="search.svg"
                    alt="search result"
                  />
                  <section className="flex divide-x">
                    <section className="flex-1 p-1 md:p-4">
                      <p className="flex-1 text-xs text-gray-500 dark:text-gray-400 text-justify">
                        {item?.answer}
                      </p>
                    </section>
                    <section className="flex-1 p-1 md:p-4">
                      <h6 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">
                        Related Results:
                      </h6>
                      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                          {topSearches.map((search) => (
                            <li key={search.id}>
                              <Popover>
                                <div className="flex">
                                  <h6 className="md:mb-0.5 text-xs font-medium text-gray-900 dark:text-white  flex-1">
                                    {search.title}
                                    <span className="text-xs font-normal text-gray-700 ms-1">
                                      (Accuracy: 80%)
                                    </span>
                                  </h6>
                                  <span className="text-xs font-normal text-gray-700">
                                    Citations Count: 10
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {search.description}
                                </p>
                              </Popover>

                              <Popover>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-xl dark:bg-blue-900 dark:text-blue-300">
                                  {search.title}
                                </span>
                              </Popover>
                            </li>
                          ))}
                        </ul>
                      </ul>
                    </section>
                  </section>
                </div>
              </article>
            )}
          />
        </div>
        {/* Query list Grid  */}

        {/* Search Form */}
        <SearchForm containerStyles="w-full lg:w-3/4 mx-auto py-4 px-4 md:px-10 fixed bottom-0 left-1/2 transform -translate-x-1/2" />
        {/* Search Form */}
      </main>
    </div>
  )
}
