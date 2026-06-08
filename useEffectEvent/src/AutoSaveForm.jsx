import React, { useEffectEvent } from 'react'
import { useState, useEffect } from 'react'

function AutoSaveForm() {
      const [formdata, setFormdata] = useState({name:"", email:""})
       
      const check = useEffectEvent(() =>{
              console.log('Auto-saving form data...', formdata)
               });

      useEffect( () =>{
        const interval = setInterval(() =>{
              check();
        }, 3000)

        return () => clearInterval(interval)
      }, [])

      
    return (
        <form>
            <input
             type="text"
             placeholder='Enter Your Name'
             value={formdata.name}
             onChange={ e => setFormdata({...formdata, name: e.target.value})}
             />
             
             <br /><br />
             <input
             type="email"
             placeholder='Enter Your Email'
             value={formdata.email}
             onChange={ e => setFormdata({...formdata, email: e.target.value})}
             />
        </form>
    )
}

export default AutoSaveForm
