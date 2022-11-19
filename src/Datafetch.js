import React from 'react'
import useFetch from './useFetch'

const Datafetch = () => {
  const{data,loading,error}=useFetch('https://jsonplaceholder.typicode.com/users')
  const mydata = data && data.map((mango)=>{
    return <h1 key={mango.id}>{mango.name}</h1>})
  return (
    <div>
      <h1>this is my fetch data</h1>
      {loading && <p>{'your data is loading....'}</p>}
      {error && <p>{'your data is not found...'}</p>}
      {mydata}
    </div>
  )
}

export default Datafetch