import React, { useReducer } from 'react'


const reducer = (state, action) => {
    Object.freeze(state)
    return ({ ...state, [action.type]: action.payload })
}



export default (props) => {
    const argOptions = {
        button: {
            actionButton: ['function', 'title', 'function args']
        }
    }
    

    // let selectedArgOptions = argOptions['button']['actionButton']
    let selectedArgOptions = argOptions
    let i = 0
    while(i < props.path.length){
        let step = props.path[i]
        selectedArgOptions = selectedArgOptions[step]        
        i++
    }

    const defaultState = {}
    selectedArgOptions.forEach((arg) => {
        defaultState[arg] = ''
    })

    const handleChange = (argName) => {
        return (e) => {
            // setFileName(e.currentTarget.value)
            dispatch({ type: argName, payload: e.currentTarget.value})
        }
    }

    

    const [state, dispatch] = useReducer(reducer, defaultState)

    return (
        <div>
            {Object.entries(state).map(([argName, argValue]) => {
                return(
                    <div>
                        <input
                            placeholder={argName}
                            value={argValue}
                            onChange={handleChange(argName)}
                        />
                    </div>
                )
            })}
        <button
                onClick={() => { 
                    props.setArgs(state)
                    props.setPathState('FinalOutput')
                }}
        >
            Continue
        </button>
        </div>
    )
}