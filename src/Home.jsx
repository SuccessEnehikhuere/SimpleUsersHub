import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'

function Home() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    )
  }

  return (
    <div className="container">
      <h2>Users List</h2>
      <Link to="/create" className="btn btn-primary my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/edit/${user?.id}`}
                    className="btn btn-sm btn-secondary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
