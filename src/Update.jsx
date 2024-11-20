import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Update() {
  const {id} = useParams();
  const users = useSelector((state)=>state.users)
  const existingUser = users.filter(user => user.id == id)
  console.log(existingUser)
  const {name, email} = existingUser[0];
  const [updateName, setUpdateName] = useState(name)
  const [updateEmail, setUpdateEmail] = useState(email)


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Add Name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Add Email"
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update