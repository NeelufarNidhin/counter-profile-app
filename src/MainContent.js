import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ProfileCard from './ProfileCard'

function MainContent() {
   const [count,setCount] = useState(0)
   const [Data,setData] = useState("")
  useEffect ( () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        setData(res.data[count])
    },[count])
})
  return (
    <div >
       <h1 style={{textAlign:"center"}}>{count}</h1>
       <ProfileCard name={Data.name} email={Data.email} />
        <br/>
      <button className='buttonstyle1' onClick={() => setCount(count+1)}>+</button>
      <button  className='buttonstyle2' onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default MainContent
