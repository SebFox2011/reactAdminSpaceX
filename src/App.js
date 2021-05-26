// in src/App.js
import * as React from "react"
import { Admin, Resource,  fetchUtils,EditGuesser , ListGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server" // fake data
import fetchProvider from "./simpleProvider"
import {UserList} from './users'
import {CapsuleList} from './capsules'
import Dashboard from './DashBoard';


const App = () => {
    const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');//

  return (
    <Admin dashboard={Dashboard} dataProvider={fetchProvider}>
      <Resource name="capsules" list={CapsuleList} edit={EditGuesser}/>
      <Resource name="crew" list={UserList} edit={EditGuesser}/>
    </Admin>
  )
}

export default App
