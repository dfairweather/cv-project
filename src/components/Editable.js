import React from 'react';
import EditableForm from './EditableForm';

class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            beingEdited: this.props.beingEdited
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
        let editable;
        if(!this.props.editMode) {
            editable = (
                <span className={"fixed " + this.props.field}>
                    {this.props.text}
                </span>
            );   
        } else {
            editable = (
                <span className="editable" onClick={ () => this.setState({ beingEdited: true }) }>
                    {this.props.text}
                </span>
            )
        }
        if (!this.state.beingEdited) {
            return ( <>
                 {editable}
            </>
               
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