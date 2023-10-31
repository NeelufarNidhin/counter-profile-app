import React from 'react'

function ProfileCard(props) {
  return (
    <div className='pcard'>
    <div className='row'>
    <div className='col'>
    <h3>{props.email}</h3>
    
    </div>
   
   <div className='col'>
   <p>{props.name}</p>
   </div>
   
   </div>
  
   </div>
  )
}

export default ProfileCard
