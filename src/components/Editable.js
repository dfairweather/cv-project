import React from 'react';
import EditableForm from './EditableForm';

class Editable extends React.Component {
    constructor(props) {
        super();
        this.state = {
            text: props.text,
            beingEdited: props.beingEdited
        }
    }

    handleBeingEdited = (e, updatedText) => {

        e.preventDefault();
        this.setState({
            text: updatedText,
            beingEdited: false
        })
    }

    render() {
        
        if (!this.state.beingEdited) {
            return (
                <span className="editable" onClick={ () => this.setState({ beingEdited: true }) }>
                    {this.props.text}
                </span>
            )
        } else if(this.state.beingEdited && this.props.field === 'description') {
            return (
                <EditableForm
                    category={this.props.category}
                    field={this.props.field}
                    jobId = {this.props.jobId}
                    text={this.props.text}
                    handleBeingEdited={this.handleBeingEdited}
                    handleEdit={this.props.handleEdit}
                    >

                </EditableForm>
            )
        
        
        } else {
            return (
                <div className="being-edited">
                    <EditableForm 
                    category={this.props.category}
                    field={this.props.field}
                    jobId = {this.props.jobId}
                    text={this.props.text}
                    handleBeingEdited={this.handleBeingEdited}
                    handleEdit={this.props.handleEdit}
                    >

                    </EditableForm>
                </div>
            )
        }
    }  
 } 

 export default Editable;