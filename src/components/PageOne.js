import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function PageOne(props){
   const [number, setNumber] = useState(1)
   return (
      <div>
         PageOne.js
         <br/>
         this is the number: {number}
         <br/>
         <button onClick={() => setNumber(number + 1)}>Increase number</button>
         <br/>
         <Link to={`/pagetwo/${number}`} > <button>Take me to page two</button> </Link>
      </div>
   )
}

export default PageOne