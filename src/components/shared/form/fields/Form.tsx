import { Children } from "react"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"

interface FormProps {
  formStyles?: string
  Inputs?: Object
  onSubmit: SubmitHandler<any>
  children: React.ReactNode
}

const Form: React.FC<FormProps> = ({
  formStyles = "",
  Inputs,
  children,
  onSubmit,
}) => {
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const methods = useForm()
  // } = useForm<Inputs>()

  return (
    <FormProvider {...methods}>
      <form className={formStyles} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
