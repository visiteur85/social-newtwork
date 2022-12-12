import React from 'react';

type PropsType = {
    status: any
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })


    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })


    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)} autoFocus value={this.props.status}/>
                    </div>}

            </div>
        );
    }
}