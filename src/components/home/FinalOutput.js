import React, { useState } from 'react'

export default (props) => {

    if (props.pathStatus != 'FinalOutput') {return null}
    const createOutput = () => {

        const getArgs = (arg) => {
            try {
                return props.args[arg]
            } catch {
                return null
            }
        }

        const outputOptions = {
            button: {
                actionButton: [
                    { content: `<button`, indent: 0 },
                    { content: `    onClick={() => { ${getArgs('function')}(${getArgs('function args')}) }}`, indent: 1 },
                    { content: `>${getArgs('title')}</button>`, indent: 0 },
                ]
            }, 
        }
        let finalOutput = outputOptions
        props.path.forEach((step) => {
            finalOutput = finalOutput[step]
        })
        return { finalOutput, outputOptions }
    }




    const output = createOutput({ path: props.path})
    console.log(output)
    return (
        <div className='HomeContainer'>
            {output.finalOutput.map((line) => {
                return (<div style={{paddingLeft: line.indent*20}}>{line.content}</div>)
            })}
        </div>
    )
}