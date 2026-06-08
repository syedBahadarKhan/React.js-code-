function  Newcomponent () {
       const isLoggedIn = false;

    return(

         <div>
            <h2>{isLoggedIn ? <h2>wellcome User</h2> : <h2>please login</h2>}</h2>
         </div>
    )
}

export default Newcomponent