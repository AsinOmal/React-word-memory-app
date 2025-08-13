import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/layouts/Challenge"


function App() {

  return (
    <div>
      <Layout>

        <Welcome/>
        <Dashboard/>
        <Challenge/>

      </Layout>
      
    </div>

  )
}

export default App
