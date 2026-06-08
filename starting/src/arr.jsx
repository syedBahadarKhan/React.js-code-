function Component() {
        const users= [
            {firstName:"Bahadar", lastName: "Khan", age:25},
            {firstName:"salman", lastName:"khan", age:60},
            {firstName:"shahrukh", lastName:"khan", age:57},
            {firstName:"amir", lastName:"khan", age:57},
            {firstName:"sallu", lastName:"khan", age:57},
        ]

        function fullname (user){
             return user.firstName + " " + user.lastName;
        }
    return(
        <div style={{backgroundColor:"blue", width:200}}>
           <ul>
           {users.map((user) =>(
             <li>{fullname(user)} is {user.age}years old</li>
           ))}
           </ul>

        </div>
    )
}

export default Component