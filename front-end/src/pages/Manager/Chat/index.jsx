import { useState } from 'react'
import './index.css'

const Chat =()=>{

    const[username,setUsername]=useState('')

    const submit = (e)=>{
        e.preventDefault()
    }

    return(
        <div className='chat bg-secondary flex column'>
            <div>
                
            </div>
            <form onSubmit={(e)=>submit(e)}>
                <input type="text" />
            </form>
        </div>
    )
}

 export default Chat