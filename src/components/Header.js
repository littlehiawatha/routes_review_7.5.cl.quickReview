import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Header(props) {
   return (
      <div>
         Header.js
         <br />
         <Link to='/' ><button>Landing</button></Link>
         <br />
         <Link to='/pageone' ><button>Page One</button></Link>
      </div>
   )
}

export default withRouter(Header)