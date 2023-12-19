import { useEffect, useState } from "react";
import Body from "./Body";
import Header from "./Header";

const url = "https://course-api.com/react-tabs-project"
function App() {
  const [loading,setLoading] = useState(true)
  const [jobs,setJobs] = useState([])
const [value,setValue] = useState(0)


const fetchData =async ()=>{
const respones = await fetch(url)
const convertResponse = await respones.json()
console.log(convertResponse);
setJobs(convertResponse)
setLoading(false)
}

useEffect(()=>{
fetchData()
},[])

if (loading) {
  return(
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  )
}
  return (
    <>
<Header/>
<Body jobs={jobs} value={value} setValue={setValue}/>
  
    </>
  );
}

export default App;
