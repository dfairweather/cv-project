

function EditButton(props) {
    return (
          <i className="material-icons" onClick={function() {console.log(props.value); }}>create</i>
    );
  }
  
export default EditButton;
  