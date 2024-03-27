import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Welcome to Auth System!</h1>
            <p className='lead'>This is an incredible authentication system with production level features!</p>
            <hr className='my-4' />
            <p>Click the Log In button</p>
            <Link to='/login' className='btn btn-primary btn-lg' role='button'>Login</Link>
            {/* <a href='/login' className='btn btn-primary btn-lg' role='button'>Login</a> */}
        </div>
    </div>
  )
}

export default Home
