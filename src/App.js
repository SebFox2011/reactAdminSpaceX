// in src/App.js
import * as React from "react"
import { Admin, Resource, EditGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server" // fake data
import fetchProvider from "./simpleProvider"
import { UserList } from "./users"
import { CapsuleList } from "./capsules"
import Dashboard from "./DashBoard"
import MyLoginPage from "./MyLoginPage"
import MyLogoutButton from "./MyLogoutButton"

const authProvider = {
  login: ({ username, password }) => {
    if (username === "sm" && password === "0000") {
      localStorage.setItem("username", username)
      return Promise.resolve()
    } else return Promise.reject()
  },
  logout: () => {
    localStorage.removeItem("username")
    return Promise.resolve()
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username")
      return Promise.reject()
    }
    return Promise.resolve()
  },
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject()
  },
  getPermissions: (params) => {
      console.log("Permissions",params
      )
      return Promise.resolve()},
}

const App = () => {
  const dataProvider = jsonServerProvider(
    "https://jsonplaceholder.typicode.com"
  ) //

  return (
    <Admin
      authProvider={authProvider}
      dashboard={Dashboard}
      dataProvider={fetchProvider}
    >
      <Resource name="capsules" list={CapsuleList} edit={EditGuesser} />
      <Resource name="crew" list={UserList} edit={EditGuesser} />
    </Admin>
  )
}

export default App
