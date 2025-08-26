import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/layouts/Challenge"
import { useState, useEffect } from "react"



function App() {
  const [selectedPage, setSeletedPage] = useState(0)
  // const selectedPage = 2 
  // zero is for welcome, 1 is for dashboard, 2 is for challenge

  const [name, setName] = useState('')
  const [day, setDay] = useState(1)
  const [datetime, setDatetime] = useState(null)
  const [History, setHistory] = useState([])
  const [attempts, setAttempts] = useState(0)

  function handleChangePage(pageIndex) {
    setSeletedPage(pageIndex)
  }

  function handleCreateAccount() {
    if (!name) { return }
    localStorage.setItem('username', name)
    handleChangePage(1)
  }

  //! this callback function is triggered on page load
  useEffect(() => {
    if (!localStorage) { return }
    //if we don't have access to the database, 
    // then exit the callback function

    if (localStorage.getItem('username')) {
      // if we find the item, (get item returns something) 
      // then we enter the if block
      setName(localStorage.getItem('username'))

      // we have a name, so we can skip to the dashboard
      setSeletedPage(1)
    }

  }, [])


  const pages = {
    0: < Welcome
      handleCreateAccount={handleCreateAccount}
      name={name} username="hello world"
      setName={setName}
    />,
    1: <Dashboard name={name} />,
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
