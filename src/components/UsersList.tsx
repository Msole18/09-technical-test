import { type User } from "../types"

interface Props {
  showColor: boolean
  users: User[],
}

const UsersList = ({showColor, users}: Props) => {
  return (
  <table width="100%">
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Country</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {users.map((user, index) => {
        const backgroundColor = index % 2 === 0 ? '#333' : '#555'
        const color = showColor ? backgroundColor : 'transparent'
        return (
          <tr key={user.email} style={{ backgroundColor : color}}>
            <td>
              <img
                src={user.picture.thumbnail}
                alt={`a picture of ${user.email}`}
              />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button
                // onClick={() => {
                //   deleteUser(user.email)
                // }}
              >
                delete
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default UsersList