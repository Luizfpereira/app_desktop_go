import React from "react"
import PathConstants from "./pathConstants"

const InsertUser = React.lazy(() => import("../pages/InsertUser"))
// other page components...
const Users = React.lazy(() => import("../pages/Users"))

const routes = [
    { path: PathConstants.USERS, element: <Users /> },
    { path: PathConstants.INSERT_USER, element: <InsertUser /> },
]

export default routes