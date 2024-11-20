import React from 'react'

function Home() {
  return (
    <div className='container'>
      <h2>Users List</h2>
      <button className='btn btn-success my-3'>Create</button>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Home