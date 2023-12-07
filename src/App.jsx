import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function App() {

  const loadedTeas = useLoaderData();
  const [teas, setTeas] = useState(loadedTeas);




  return (
    <>
      
      <h1>Hello</h1>
     
    
    </>
  )
}

export default App
