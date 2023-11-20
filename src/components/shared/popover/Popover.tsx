import Link from "next/link"
import React, { ReactNode, useState } from "react"

interface PopoverProps {
  children: ReactNode
}

const Popover: React.FC<PopoverProps> = ({ children }) => {
  const [isPopoverVisible, setPopoverVisible] = useState<boolean>(false)

  const showPopover = () => {
    setPopoverVisible(true)
  }

  const hidePopover = () => {
    setPopoverVisible(false)
  }

  let classesList = `absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm w-75  dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600  ${
    isPopoverVisible ? "visible opacity-1 bottom-full" : "invisible opacity-0"
  }`

  return (
    <div
      className={`text-gray-500 dark:text-gray-400 ${
        isPopoverVisible ? "relative" : ""
      }`}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      {children}
      <div
        data-popover
        id="popover-image"
        role="tooltip"
        className={classesList}
      >
        <div className="grid grid-cols-5">
          <div className="col-span-5 p-3">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white ">
                Land Dispute
              </h3>
              <p>
                Italy is located in the middle of the Mediterranean Sea, in
                Southern Europe it is also considered part of Western Europe. A
                unitary parliamentary republic with Rome as its capital and
                largest city.
              </p>
              <Link
                href="/case"
                className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
              >
                Read more{" "}
                <svg
                  className="w-2 h-2 ml-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  )
}

export default Popover
