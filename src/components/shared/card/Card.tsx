import React from "react"

interface CardProps {
  title: string
  description?: string
  imageSrc?: string
  onClick?: () => void
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  onClick,
}) => {
  return (
    <div
      className="cursor-pointer hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 
        w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
      onClick={onClick}
    >
      <div className="flex flex-col  px-5 py-2 md:py-4 ">
        {imageSrc && (
          <div className="p-1 rounded-[50%] bg-black">
            <img
              className="w-10 h-15 md:w-16 md:h-16 rounded-full shadow-lg"
              src={imageSrc}
              alt="Card Image"
            />
          </div>
        )}

        <h5 className="md:mb-1 text-sm md:text-base font-medium text-gray-900 dark:text-white">
          {title}
        </h5>
        {description && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

export default Card
