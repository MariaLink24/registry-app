import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Registry() {
    const [registryData, setRegisrtyData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)


    const addItem = (e) => {
        e.preventDefault();
        if (error) return

        const tempData = [...registryData]
        tempData.push(textInput)
        setRegisrtyData(tempData)
        setTextInput("")
    }
    useEffect(() => {
        if (textInput.length > 10) setError(true)
        else setError(false)
    }, [textInput])

    const removeItem = (index) => {
        const newData = [...registryData]
        newData.splice(index, 1)
        setRegisrtyData(newData)
    }

    const editItem = (index)=>{
        if (error) return
        let newData = [...registryData]
        newData[index]= textInput
        setRegisrtyData(newData)
    }
    return (
        <div>
            <h1>Registry</h1>
            <Link to='/'>Click here to go to home</Link>
            <form onSubmit={addItem}>
                <label>text input:
    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {error ? <span style={{ color: "red" }}>Error occured</span> : null}
            {
                registryData.map((item, index) => {
                    return (
                        <li key={index}>{item}
                        <button onClick={() => removeItem(index)}>remove</button  >
                        <button onClick={()=>editItem(index)}>update</button>
                        </li>

                    )
                })
            }
        </div>
    )
}
export default Registry;