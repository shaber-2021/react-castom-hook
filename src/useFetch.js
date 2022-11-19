import React , {useState,useEffect} from 'react'

const useFetch = (URL) => {
    const [data,setdata]=useState(null)
    const [loading,setloading]=useState(true);
    const [error,setError]=useState(null)
    useEffect(() => {
      fetch(URL)
      .then((res)=>{
        if(!res.ok){
          throw Error ()
        }else{
          return res.json();
        }
        })
      .then((mydata)=>{setdata(mydata);
        setloading(false);
        setError(null)
      })
      .catch((error)=>{setError(error.message);
        setloading(false)
      })
      
    },[URL])
    return {data,loading,error}
}

export default useFetch