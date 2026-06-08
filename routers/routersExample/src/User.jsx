import { useParams } from "react-router-dom"

function User () {
    console.log(useParams())
    const { id } = useParams()

    return (
        <h2>User profile for id : {id}</h2>
    )
}
export default User