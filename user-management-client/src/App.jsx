import { useState,useEffect } from 'react'
import './App.css'


function App() {
  const [users, setUsers] = useState([])

  useEffect (()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })

  const handleAddUser = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name ,email}
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    } )
      .then(res => res.json())
      .then(data => {
        console.log(data);
       const newUsers = [...users ,data]
        setUsers(newUsers)
        form.reset();

      })

  }



  return (
    <>
      <h1>User management system client</h1>
      <h3>Number of users {users.length}</h3>
      {users.map(user => (
      <>
        <p key={user.id}>{user.id} {user.name} {user.email}</p>
      </>
    ))}
      <form onSubmit={handleAddUser}>
            <input type="text" name="name" id="" /><br />
            <input type="email" name="email" id="" /><br />
            <input type="submit" value="ADD USER" /><br />
      </form>
    </>
  )
}

export default App
