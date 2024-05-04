import React from "react"
import Card from "../components/Card"

const user = {
    name: "Patrícia",
    age: 27,
    email: "patricia@example.com",
    address: "Rua das Neves, 246",
    city: "Teresina",
    state: "PI"
}




export default function Users() {
    return (
        <div>
            <Card user={user}>
            
            </Card>
        </div>
    )
}
