import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TeaCard from "./components/TeaCard";

function App() {

  const loadedTeas = useLoaderData();
  const [teas, setTeas] = useState(loadedTeas);




  return (
    <>
      
      <h1  className='text-6xl my-20 text-center text-purple-600'>Hot Tea</h1>
     
      <div className='grid md:grid-cols-2'>
    {
       teas.map(tea => <TeaCard
        
          key={tea._id}
          tea={tea}
          teas={teas}
          setTeas={setTeas}
        ></TeaCard>)
      }
    
    </div>
    </>
  )
}

export default App
