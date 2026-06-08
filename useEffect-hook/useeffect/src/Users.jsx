import { useState, useEffect } from "react";

function Users(){
    const [users, setUsers] = useState([])

    useEffect(() =>{
    const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch(err => console.log(err));
    };

    // ✅ Initial fetch (runs immediately)
    fetchUsers();

    // 🔁 Fetch every 5 seconds
    const interval = setInterval(fetchUsers, 5000);
    console.log("data ir refreshed")

    // 🧹 Cleanup
    return () => {
      clearInterval(interval);
    };
    },[])
        return(
        <div>
            <h2>Users List</h2>
             {users.map((user) =>(
                <li key={user.id}>{user.id}- {user.name}</li>
             ))}
        </div>
    )
}

export default Users