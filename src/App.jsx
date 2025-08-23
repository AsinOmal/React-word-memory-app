import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/layouts/Challenge"
import { useState } from "react"



function App() {
  const [selectedPage, setSeletedPage] = useState(0)
  // const selectedPage = 2 
  // zero is for welcome, 1 is for dashboard, 2 is for challenge

  const [name, setName] = useState('')

  const pages = {
    0: <Welcome name={name} username="hello world" setName={setName} />,
    1: <Dashboard />,
    2: <Challenge />,
  }


  return (

    <div>
      <Layout>
        {pages[selectedPage]}
      </Layout>
    </div>

  )
}

export default App
