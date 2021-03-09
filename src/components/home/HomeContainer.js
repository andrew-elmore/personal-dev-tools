import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HomeContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            args: {},
            path: []
        }
    }

    createOutput(input){
        const getArgs = (arg) => {
            try{
                return input.args[arg]
            } catch {
                return null
            }
        }
        const outputOptions = {
            button: {
            actionButton: [
                    `<button`,
                    `    onClick={() => { ${getArgs('action')}() }}`,
                    `>${getArgs('title')}</button>`,
                ]
            }
        }
        let finalOutput = outputOptions
        input.path.forEach((step) => {
            finalOutput = finalOutput[step]
        })
        return { finalOutput, outputOptions}
    }

    componentDidMount(){
        this.setState({ ['path']: Object.keys(this.createOutput({args: {}, path: []}).outputOptions)})
    }


    render(){
        const output = this.createOutput({ args: {'action': 'act', 'title': 'deploy act'}, path: ['button', 'actionButton'] })
        console.log(output)
        return (
            <div className='HomeContainer'>
                {output.finalOutput.map((line) => {
                    return (<div>{line}</div>)
                })}
            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    return ({

    })
};

const mdtp = (dispatch) => ({

})

export default HomeContainer


