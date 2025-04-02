import { useState } from "react";

function AddSub() {
    let [num,setNum] = useState(0)

    const AddNum = ()=>{
        setNum(num+1)
    }

    const SubNum = ()=>{
        setNum(num-1)
    }
    
    return (
        <div>
            <h1>Num: {num}</h1>
            <button onClick={AddNum} style={{marginRight: "10px"}} >Add</button>
            <button onClick={SubNum}>Subtract</button>
        </div>
    )
}

export default AddSub;