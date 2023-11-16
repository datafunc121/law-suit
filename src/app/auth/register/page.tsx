"use client"

import "regenerator-runtime/runtime"
import { CheckField, Form, InputField } from "@/components/shared/form"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Register = () => {
  const router = useRouter()
  const onSubmit = (data: any) => {
    console.log(data)
    router.push("/")
  }

  return (
    <main>
      <section
      //    className="bg-gray-50 dark:bg-gray-900"
      // style={{
      //   backgroundImage: `url("https://png.pngtree.com/background/20230611/original/pngtree-legal-documents-of-an-attorney-for-an-international-client-picture-image_3170646.jpg")`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white"
          >
            <img className="w-12 h-12 mr-2" src="/logo.png" alt="logo" />
            VerdictWise
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-lg font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>

              <Form formStyles="space-y-4 md:space-y-6" onSubmit={onSubmit}>
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

                <InputField
                  label="Confirm Password"
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="••••••••"
                />

                <CheckField id="terms" name="terms">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <Link
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </CheckField>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-xs lg:text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
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

export default Register
