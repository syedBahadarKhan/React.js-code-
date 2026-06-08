import { use, useState } from "react"
function Likebutton () {
    const [like, isLiked] = useState(true)
    return(
        <div>
            <button onClick={() =>isLiked(!like)}>
             {like ? "🤍 Unlike" : " ❤️ Like"}
            </button>
        </div>
    )
}

export default Likebutton