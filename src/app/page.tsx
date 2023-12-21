"use client"

import "regenerator-runtime/runtime"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Grid, List } from "@/components/shared/list"
import Card from "@/components/shared/card/Card"
import Modal from "@/components/shared/modal/Modal"
import SearchForm from "@/components/shared/form/SearchForm"

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false)

  const clickHandler: () => void = () => {
    setShowDrawer(!showDrawer)
  }
  const topSearches = [
    {
      id: 1,
      title: "Land Dispute",
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
    {
      id: 4,
      title: "Family Custody",
      description:
        "The court granted custody to the mother, ensuring visitation rights for the father and grandparents",
    },
  ]

  return (
    <div
    // style={{
    //   backgroundImage: `url("https://png.pngtree.com/background/20230611/original/pngtree-legal-documents-of-an-attorney-for-an-international-client-picture-image_3170646.jpg")`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   height: "100vh",
    // }}
    >
      <main className="flex min-h-screen flex-col items-center mx-auto px-4 md:px-24 pt-24 z-10">
        {/* Search Form */}
        <div className="w-full lg:w-[70%] mx-auto">
          <SearchForm containerStyles="" />
        </div>
        {/* Search Form */}
        {/* Top Search Grid  */}
        <div className="mt-8 md:mt-10 lg:w-[65%] mx-auto">
          <Grid
            containerClass="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 place-content-between lg:mx-2"
            data={topSearches}
            keyExtractor={(item: any) => String(item?.id)}
            renderItem={(item: any) => (
              <Link href="/search">
                <Card
                  title={item?.title}
                  description={item?.description}
                  onClick={clickHandler}
                />
              </Link>
            )}
          />
        </div>
        {/* Top Search Grid  */}

        {/* Recent Search Grid  */}
        <div className="mt-8 md:mt-10 lg:w-[64%] mx-auto bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="m-4 text-base font-medium text-gray-900 dark:text-white">
            Your Recent Searches
          </h5>
          <hr />

          <Grid
            // containerClass="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 place-content-between"
            containerClass="w-full"
            data={topSearches}
            keyExtractor={(item: any) => String(item?.id)}
            renderItem={(item: any) => (
              <Link href="/history">
                <div
                  className="flex flex-col  px-5 py-1 md:py-2 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
                  onClick={() => {}}
                >
                  <h5 className="md:mb-0.5 text-sm md:text-sm font-medium text-gray-900 dark:text-white">
                    {item?.title}
                  </h5>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item?.description}
                  </span>
                </div>
              </Link>
            )}
          />
        </div>
        {/* Recent Search Grid  */}
      </main>
    </div>
  )
}
