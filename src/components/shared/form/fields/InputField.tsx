import { useFormContext } from "react-hook-form"

interface InputFieldProps {
  label?: string
  id: string
  name: string
  type?: "text" | "password" | "email" | "number" | "tel" | "url"
  placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
}) => {
  const { register } = useFormContext()

  return (
    <div>
      {label ? (
        <label
          htmlFor={id || name}
          className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      ) : null}
      <input
        type={type}
        // name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 lg:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        {...register(name)}
      />
    </div>
  )
}

export default InputField
