import React from 'react';

class EditableForm extends React.Component {
    constructor(props) {
        super() 
        this.state = {
            inputValue: props.text
        }
    }

    componentDidMount(){
      this.textInput.focus();
    }

    handleChange = e => {
        this.setState({inputValue: e.target.value});
    }

    render() {
      let FormType = 'input'
      if (this.props.field==='description') {
        FormType = 'textarea';
      }
        return (
          <form 
            className="editable-form"
            onSubmit={e => {this.props.handleBeingEdited(e, this.state.inputValue)
            this.props.handleEdit(this.state.inputValue, this.props.jobId, this.props.field )
            }}
            onChange={this.handleChange}
            onBlur={e => {this.props.handleBeingEdited(e, this.state.inputValue)
            this.props.handleEdit(this.state.inputValue, this.props.jobId, this.props.field )
            }}
            >
              <FormType
                ref={(input) => { this.textInput = input; }}
                type="text" 
                name="edit" 
                defaultValue={this.props.text}
              ></FormType>

              
          </form>
        );
    }
}
  
export default EditableForm;