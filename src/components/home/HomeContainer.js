import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FinalOutput from './FinalOutput'
import CreateArgs from './CreateArgs';



class HomeContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pathStatus: 'x',
            args: { 'function': 'act', 'title': 'deploy act' },
            path: ['button', 'actionButton']
        }
        this.setPathState = this.setPathState.bind(this)
        this.setArgs = this.setArgs.bind(this)
    }
    setPathState(payload){
        this.setState({['pathStatus']: payload})
    }

    setArgs(payload){
        this.setState({ ['args']: payload })
    }


    render(){
        return (
            <div>
                <CreateArgs
                    path={this.state.path}
                    args={this.state.args}
                    setPathState={this.setPathState}
                    setArgs={this.setArgs}
                    />
                <FinalOutput
                    pathStatus={this.state.pathStatus}
                    path={this.state.path}
                    args={this.state.args}
                    setPathState={this.setPathState}
                    setArgs={this.setArgs}
                />
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


