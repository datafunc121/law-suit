interface CheckFieldProps {
  containerStyles?: string
  id: string
  name: string
  type?: "checkbox" | "radio"
  children?: React.ReactNode
}

const CheckField: React.FC<CheckFieldProps> = ({
  containerStyles = "",
  id,
  name,
  children,
}) => {
  return (
    <div className={`flex items-start ${containerStyles}`}>
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={name}
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
        />
      </div>
      <div className="ml-3 text-xs lg:text-sm">{children}</div>
    </div>
  )
}

export default CheckField
