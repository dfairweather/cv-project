import React from 'react';
import Save from './Save';
import Icon from '../Icon';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <button 
                    className='add-school'
                    onClick={() => {this.props.handleShowModal("school")}}
                >
                   Add New School
                    <Icon type={"add"} ></Icon>
                </button>
                <button onClick={this.props.handleUndo}>
                    
                    <Icon type={"undo"} ></Icon>
                    Undo
                </button>
                <button onClick={this.props.handleRedo}>
                Redo
                
                <Icon type={"redo"} ></Icon>
                </button>
                
                <button 
                    className='add-job'
                    onClick={() => {this.props.handleShowModal("job")}}
                >
                   Add New Job
                    <Icon type={"add"} ></Icon>
                </button>
                <Save handleSave={this.props.handleSave}></Save>
            </footer>
        )
    }
}

export default Footer;