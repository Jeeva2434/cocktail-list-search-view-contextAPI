import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='container'>
      <div>
        <div className='errorText'>
          Page Not Found !
        </div>
        <div className='backNav'>
          <Link to='/' className='btn_details'>Back to home</Link>
        </div>
      </div>
    </section>
  )
}

export default Error