// in src/admin/App.jsx
import * as React from "react"
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import { LoginPage } from "./LoginPage"
import { AuthProvider } from "./AuthProvider"

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")
const dataProvider = jsonServerProvider("http://localhost:8002")

const App = () => (
  // https://jsonplaceholder.typicode.com/tab?_end=10&_order=ASC&_sort=id&_start=0

  <Admin
    loginPage={LoginPage}
    dataProvider={dataProvider}
    authProvider={AuthProvider}
  >
    <Resource
      name="product"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    {/* <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
)

export default App
