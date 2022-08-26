import { useContext } from 'react'
import { CustomerContext } from '../contexts/customer'

function Hello() {
    const { name } = useContext(CustomerContext)
    return <h1>{name}</h1>
}

export default Hello