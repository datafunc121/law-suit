"use client"

import "regenerator-runtime/runtime"
import { useEffect, useState } from "react"
import { CheckField, Form, InputField } from "@/components/shared/form"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import Link from "next/link"
import { useLoginMutation } from "@/redux/features/authApiSlice"
import { useAppDispatch } from "@/redux/hooks"
import { setAuth } from "@/redux/features/authSlice"

const Login = () => {
  const router = useRouter()
  // const [isLoading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const onLogin = async (data: any) => {
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      }).unwrap()

      // Store tokens securely
      localStorage.setItem("access_token", response.access)
      localStorage.setItem("refresh_token", response.refresh)

      // Dispatch setAuth action
      dispatch(setAuth())

      console.log("Login Successful")
      router.push("/")
    } catch (error) {
      console.error("Login Failed", error)
      // Handle login failure
    }
  }

  return (
    <main>
      <section
        //    className="bg-gray-50 dark:bg-gray-900"
        style={{
          backgroundImage: `url("https://png.pngtree.com/background/20230611/original/pngtree-legal-documents-of-an-attorney-for-an-international-client-picture-image_3170646.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white"
          >
            <img className="w-12 h-12 mr-2" src="/logo.png" alt="logo" />
            {isLoading} VerdictWise
          </Link>
          <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-lg font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to platform
              </h1>
              {/* <form  action="#"> */}
              <Form formStyles="space-y-4 md:space-y-6" onSubmit={onLogin}>
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                />

                <InputField
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                />

                <div className="flex items-center justify-between">
                  <CheckField id="remember" name="remember">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </CheckField>

                  <Link
                    href="#"
                    className="text-xs lg:text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  //   onClick={() => router.push("/")}
                >
                  Sign in
                </button>
                <p className="text-xs lg:text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account?{" "}
                  <Link
                    href="/auth/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
