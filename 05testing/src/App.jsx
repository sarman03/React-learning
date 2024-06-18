
import React, {Fragment} from 'react'
import { useState } from 'react'

// import './App.css'

function App() {
  const [title, setTitle] = useState("my name is harkirat1");

  function updateTitle(){
    setTitle("my name is " +Math.random());
  }

  return (
    <>
    <Fragment>
    <button onClick={updateTitle}>Update the Title</button>
      <Header title={title}></Header>
      <Header title="harkirat2"></Header>
      </Fragment>
    </>
  )
}

function Header({title}){
  return <div>
{title}
  </div>
}

export default App
