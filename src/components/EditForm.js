import React from 'react';

class EditForm extends React.Component {
    constructor(props) {
        super() 
        this.state = {
            inputValue: props.value.text
        }
    }

    componentDidMount(){
      this.textInput.focus();
    }

    handleChange = e => {
        this.setState({inputValue: e.target.value});
    }
    render() {
        return (
          <form 
            className="edit-form"
            onSubmit={e => {this.props.handleSubmit(e, this.props.jobId, this.props.value.bulletId, this.state.inputValue)}}
            onChange={this.handleChange}
            onBlur={e => {this.props.handleSubmit(e, this.props.jobId, this.props.value.bulletId, this.state.inputValue)}}
            >
              <input 
                ref={(input) => { this.textInput = input; }}
                type="text" 
                name="edit" 
                defaultValue={this.props.value.text}
                ></input> 
          </form>
        );
    }
}
  
export default EditForm;
  