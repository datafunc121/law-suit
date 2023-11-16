"use client"

import Link from "next/link"

export default function Profile() {
  return (
    <main className="min-h-screen mx-auto px-4 py-5 pt-24">
      <div className="w-full lg:w-11/12 mx-auto flex flex-col lg:flex-row gap-8">
        <section className="h-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-36 h-36 rounded-2xl p-1 bg-gray-300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6x9MfYNWeItVatVSX3vB7zFB60b5YE0Gxw&usqp=CAU"
            alt="Profile Image"
          />

          <div className="dark:text-white">
            <div className="text-lg font-semibold">M. Junaid Tariq</div>
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-400">
              Software Engineer, Datafunction
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Joined in August 2023
            </div>
          </div>

          <div className="mt-4 font-medium text-sm">
            <label className="block text-gray-500">Email:</label>
            <p className="text-gray-800">muhammadjunaidtariq@datafunction.ca</p>
          </div>

          <div className="mt-4 font-medium text-sm">
            <label className="block text-gray-500">Address:</label>
            <p className="text-gray-800">
              House X121 Moh XYZ Sambrial, Sialkot
            </p>
          </div>

          <div className="mt-4 font-medium text-sm">
            <label className="block text-gray-500">Phone Number:</label>
            <p className="text-gray-800">+92 331 3333333, +92 312 1211212</p>
          </div>

          <div className="mt-4 font-medium text-sm">
            <label className="block text-gray-500">Bio:</label>
            <p className="text-gray-800">
              I'm passionate about exploring new places and trying different
              cuisines. In my free time, you'll find me with a good book or
              enjoying the outdoors. I love photography and capturing beautiful
              moments. Let's connect and share our favorite travel stories!
            </p>
          </div>
        </section>

        <section className="h-auto flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mb-2 text-lg font-medium tracking-tight text-gray-800 dark:text-white">
            Membership & Billing
          </h2>

          <div className="flex items-center gap-4">
            <div>
              <img className="w-16" src="./mastercard.svg" alt="Credit Card" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">
                <span className="hidden md:inline">XXXX XXXX XXXX </span>
                4444
              </p>
            </div>
            <div>
              <Link href="#" className="text-sm text-blue-600">
                Edit
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Your next billing date is August 20, 2023
          </p>

          <hr className="my-10 border-gray-300 shadow dark:bg-gray-800 dark:border-gray-700" />

          <h2 className="mb-2 text-lg font-medium tracking-tight text-gray-800 dark:text-white">
            Plan Details
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
            <div className="lg:flex-1 text-gray-800">
              <p className="text-sm font-medium">Standard</p>

              <div className="flex text-sm text-gray-600">
                <span className="flex-1">Billing Amount:</span>
                <span className="flex-1">$10</span>
              </div>

              <div className="flex text-sm text-gray-600">
                <span className="flex-1">Plan Term:</span>
                <span className="flex-1">
                  August 23, 2023 to August 23, 2024
                </span>
              </div>

              <div className="flex text-sm text-gray-600">
                <span className="flex-1">Billing Term:</span>
                <span className="flex-1">Monthly</span>
              </div>

              <div className="flex text-sm text-gray-600 mt-2">
                <span className="flex-1">Available Credits:</span>
                <span className="flex-1">4000 (Approx 400 Searches)</span>
              </div>

              <div className="flex text-sm text-gray-600">
                <span className="flex-1">Monthly Credits:</span>
                <span className="flex-1">5500 (Approx 550 Searches)</span>
              </div>
            </div>
            <div className="self-start">
              <a href="#" className="text-sm text-blue-600">
                Change Plan
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// "use client"

// export default function Profile() {
//   return (
//     <main className="min-h-screen mx-auto px-4 py-5 pt-24">
//       <div className="w-full lg:w-11/12 mx-auto flex flex-col lg:flex-row gap-8">
//         <div className="h-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//           <img
//             className="w-36 h-36 rounded-2xl p-1 bg-gray-300"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6x9MfYNWeItVatVSX3vB7zFB60b5YE0Gxw&usqp=CAU"
//             alt=""
//           />

//           <div className="dark:text-white">
//             <div className="text-lg font-semibold">M. Junaid Tariq</div>
//             <div className="text-sm font-semibold text-gray-800 dark:text-gray-400">
//               Software Engineer, Datafunction
//             </div>
//             <div className="text-xs text-gray-500 dark:text-gray-400">
//               Joined in August 2023
//             </div>
//           </div>

//           <div className="mt-4 font-medium text-sm">
//             <label className="block text-gray-500 ">Email:</label>
//             <p className="text-gray-800">muhammadjunaidtariq@datafunction.ca</p>
//           </div>

//           <div className="mt-4 font-medium text-sm">
//             <label className="block text-gray-500">Address:</label>
//             <p className="text-gray-800">
//               House X121 Moh XYZ Sambrial, Sialkot
//             </p>
//           </div>

//           <div className="mt-4 font-medium text-sm">
//             <label className="block text-gray-500 ">Phone Number:</label>
//             <p className="text-gray-800">+92 331 3333333, +92 312 1211212</p>
//           </div>

//           <div className="mt-4 font-medium text-sm">
//             <label className="block text-gray-500 ">Bio:</label>
//             <p className="text-gray-800">
//               I'm passionate about exploring new places and trying different
//               cuisines. In my free time, you'll find me with a good book or
//               enjoying the outdoors. I love photography and capturing beautiful
//               moments. Let's connect and share our favorite travel stories!
//             </p>
//           </div>
//         </div>
//         <div className="h-auto flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-800 dark:text-white">
//             Membership & Billing
//           </h5>

//           <div className="flex items-center gap-4">
//             <div>
//               <img className="w-16" src="./mastercard.svg" alt="credit-card" />
//             </div>
//             <div className="flex-1">
//               <p className="text-sm text-gray-800">
//                 <span className="hidden md:inline">XXXX XXXX XXXX </span>
//                 4444
//               </p>
//             </div>
//             <div>
//               <a href="#" className="text-sm text-blue-600">
//                 Edit
//               </a>
//             </div>
//           </div>
//           <p className="text-sm text-gray-500">
//             Your next billing date is August 20, 2023
//           </p>

//           <hr className="my-10 border-gray-300 shadow dark:bg-gray-800 dark:border-gray-700" />

//           <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-800 dark:text-white">
//             Plan Details
//           </h5>

//           <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
//             <div className="lg:flex-1 text-gray-800">
//               <p className="text-sm font-medium">Standard</p>

//               <div className="flex text-sm text-gray-600">
//                 <span className="flex-1">Billing Amount:</span>
//                 <span className="flex-1">$10</span>
//               </div>

//               <div className="flex text-sm text-gray-600">
//                 <span className="flex-1">Plan Term:</span>
//                 <span className="flex-1">
//                   August 23, 2023 to August 23, 2024
//                 </span>
//               </div>

//               <div className="flex text-sm text-gray-600">
//                 <span className="flex-1">Billing Term:</span>
//                 <span className="flex-1">Monthly</span>
//               </div>

//               <div className="flex text-sm text-gray-600 mt-2">
//                 <span className="flex-1">Available Credits:</span>
//                 <span className="flex-1">4000 (Approx 400 Searches)</span>
//               </div>

//               <div className="flex text-sm text-gray-600">
//                 <span className="flex-1">Monthly Credits:</span>
//                 <span className="flex-1">5500 (Approx 550 Searches)</span>
//               </div>
//             </div>
//             <div className="self-start">
//               <a href="#" className="text-sm text-blue-600">
//                 Change Plan
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
