import React,{useEffect, useState} from 'react'

const App = () => {
  const [mangos,setstate]=useState(null)
  const [loading,setloading]=useState(true);
  const [error,setError]=useState(null)
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      if(!res.ok){
        throw Error ()
      }else{
        return res.json();
      }
      })
    .then((data)=>{setstate(data);
      setloading(false);
      setError(null)
    })
    .catch((error)=>{setError(error.message);
      setloading(false)
    })
    
  },[])
  const mydata = mangos && mangos.map((mango)=>{
    return <h1 key={mango.id}>{mango.email}</h1>})
  return (
    <div>
      <h1>this is my fetch data</h1>
      {loading && <p>{'your data is loading....'}</p>}
      {error && <p>{'your data is not'}</p>}
      {mydata}
    </div>
  )
}

export default App