import React from "react"
import PathConstants from "./pathConstants"

const InsertUser = React.lazy(() => import("../pages/InsertUser"))
// other page components...
const UsersPersonalInfo = React.lazy(() => import("../pages/UsersPersonalInfo"))
const UsersAnamnesis = React.lazy(() => import("../pages/UsersAnamnesis"))
const UsersHabits = React.lazy(() => import("../pages/UsersHabits"))
const UsersSurgeries = React.lazy(() => import("../pages/UsersSurgeries"))
const UsersExams = React.lazy(() => import("../pages/UsersExams"))


const routes = [

    { path: PathConstants.INSERT_USER, element: <InsertUser /> },
    { path: PathConstants.USERS_PERSONAL_INFO, element: <UsersPersonalInfo /> },
    { path: PathConstants.USERS_ANAMNESIS, element: <UsersAnamnesis /> },
    { path: PathConstants.USERS_HABITS, element: <UsersHabits /> },
    { path: PathConstants.USERS_SURGERIES, element: <UsersSurgeries /> },
    { path: PathConstants.USERS_EXAMS, element: <UsersExams /> }
]

export default routes