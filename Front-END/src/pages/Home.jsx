import React from "react"
import {Button} from "react-bootstrap"
import ConsigliatoPerTe from "../components/bundle/ConsigliatoPerTe";
const Home = () => {

  return (
    <>
     <h1>Hello Word</h1>
     <div className="btn btn-secondary mb-3">
     click me
    </div>
    <div>
      {<Button variant="primary">Cliccami</Button>}
      <ConsigliatoPerTe/>
    </div>
    </>
  )
}

export default Home;