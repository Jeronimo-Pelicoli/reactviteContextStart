import { createContext, useState } from "react";

type CustomerForm = {
    name: string,
    email: string
  }

type IContextProps = {
    name: string,
    email: string,
    handleForm: ({ name, email }: CustomerForm) => void
}

const CustomerContext = createContext({} as IContextProps)

const CustomerProvider = ({ children }: any) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
  
    function handleForm({ name, email }: CustomerForm){
      console.log("dados App", name, email)
      setName(name)
      setEmail(email)
    }

    return (
        <CustomerContext.Provider value={{ name, email, handleForm}}>
            {children}
        </CustomerContext.Provider>
    )
}

export { 
    CustomerContext,
    CustomerProvider
}