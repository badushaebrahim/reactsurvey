import axios from 'axios'
import React, { useState } from 'react'

function Listobject(props) {

  return (
    
        <div className='card'>
       Name: {props.obj.name}<br/>
      Email:  {props.obj.email}<br/>
       Age: {props.obj.age}<br/>
       broken: {props.obj.id}<br/>
    
        </div>
    
  )
}

export default Listobject