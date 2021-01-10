import React from 'react';
import UndoButton from '../UndoButton';
import RedoButton from '../RedoButton';
import Save from './Save';
import Icon from '../Icon';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <button 
                    className='add-school'
                    onClick={this.props.handleShowSchoolForm}
                >
                   Add New School
                    <Icon type={"add"} ></Icon>
                </button>
                <button onClick={this.props.handleUndo}>
                    
                    <UndoButton ></UndoButton>
                    Undo
                </button>
                <button onClick={this.props.handleRedo}>
                Redo
                
                    <RedoButton ></RedoButton>
                </button>
                
                <button 
                    className='add-job'
                    onClick={this.props.handleShowJobForm}
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