import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupID, setFeatPupId] = useState(null);
  console.log(puppies);

  return (
    <>
    {
      puppies.map((puppy) => {
        return <p onClick={() => {console.log("puppy id: ", puppy.id)}} keys={puppy.id}>{puppy.name}</p>
      })
    }
    </>
  )
}

export default App
