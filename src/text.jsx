import { useState , useEffect, useRef} from "react";


export default function Test(){
    
    const user = useRef(null);

    const [name, setName] = useState("John")
    
    function onclick(){
        
        

        
        user.current.focus();

        user.current.value =""
        
    }
    function onclic(e){
        setName(e.target.value)
    }

    return(
        <>
          <div>
            {name}
            <input type="text" placeholder="input" ref={user} onChange={onclic} />
            <button onClick={onclick}>click me</button>
          </div>
        </>
    )
}