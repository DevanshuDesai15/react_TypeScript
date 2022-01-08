import React from "react"

type Inputprops={
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

export const Input = (props: Inputprops) =>{
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event);
        
    }

    return <input type='text' value={props.value} onChange={props.handleChange}/>
}
