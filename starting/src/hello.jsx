
function Hello() {
    
    const  yourName= (name) =>{
    return name;
    }
    function handleClick(){
        alert("the Button is Clicked")
    }
    const handleInput = (event) => {
        console.clear()
        console.log("value :", event.target.value)
    }
        const name = "bahadar Khan wellcome to react world";
        const name2 = "react is a javascript library for building user interfaces";

        const handleOver = () => console.log("mouse is over")
        const handleDouble = () => console.log("double click is working")
    return(
        <>
           <h1>Hello</h1>
           <h2>Hello </h2>
           <p>Age</p>
           <p>City:</p>
           <p>{yourName(name2)}</p>

           <p onMouseOver={handleOver} onDoubleClick={handleDouble}>This is the multiple events check</p>

           <button onClick={handleClick}>Click Me</button>
           <button onClick ={() =>alert("inline button is clicked")}>Click mee bos</button>
           <br />
           <input type="text" onChange={handleInput} placeholder="type something" />
        </>
    )
}
export default Hello