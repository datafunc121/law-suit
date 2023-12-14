"use client"

import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [userMenu, setUserMenu] = useState(false)

  return (
    <nav className="fixed w-full bg-white dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 md:px-24">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            // className="h-4 mr-3"
            alt="Case Polaris Logo"
            height={60}
            width={60}
          />
          <span className="self-center text-lg lg:text-xl font-semibold whitespace-nowrap dark:text-white">
            Case Polaris
          </span>
        </Link>
        <div className="flex-1"></div>
        <div className="flex items-center md:order-2 relative">
          <button
            type="button"
            className="flex mr-3 md:mr-0 p-1 text-sm rounded-full border-2 border-gray-500 focus:ring-4 ring-gray-300 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => setUserMenu(!userMenu)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/user.svg"
              alt="user photo"
            />
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            // className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            className={`z-50 ${
              userMenu ? "absolute right-0 top-0 mt-5" : "hidden"
            }
          my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="user-dropdown"
          >
            <div className="px-4 py-4">
              <span className="block text-xs text-gray-900 dark:text-white">
                M.Junaid
              </span>
              <span className="block text-xs  text-gray-500 truncate dark:text-gray-400">
                junaidt07@gmail.com
              </span>
            </div>
            <hr />
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Search History
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li> */}
              <li>
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
