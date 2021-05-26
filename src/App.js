// in src/App.js
import * as React from "react"
import { Admin, Resource,  fetchUtils,EditGuesser , ListGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server" // fake data
import fetchProvider from "./simpleProvider"
import {UserList} from './users'
import {CapsuleList} from './capsules'
import Dashboard from './DashBoard';

const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('https://mydomain.com/authenticate', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json()
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth))
            })
            .catch(() => {
                throw new Error('Network error')
            })},
    logout: params => Promise.resolve(),
    checkAuth: params => Promise.resolve(),
    checkError: error => Promise.resolve(),
    getPermissions: params => Promise.resolve(),
}

const App = () => {
    const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');//

  return (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={fetchProvider}>
      <Resource name="capsules" list={CapsuleList} edit={EditGuesser}/>
      <Resource name="crew" list={UserList} edit={EditGuesser}/>
    </Admin>
  )
}

export default App
