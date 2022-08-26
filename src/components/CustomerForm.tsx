import React, { useContext, useState } from "react"
import { CustomerContext } from "../contexts/customer"

function CustomerForm() {

    const { handleForm } = useContext(CustomerContext)

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("dados componente", name, email)
        handleForm({ name, email })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="label">
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="label">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default CustomerForm