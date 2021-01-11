
import Editable from '../Editable';

function Name(props) {
    return (
      <div>
        <div className="name">
          <Editable
            text={props.name.toUpperCase()}
            handleEdit={props.handleEditName}
            editMode={props.editMode}
          />
        </div>
       
        <br></br>
        <Editable
          text={props.occupation.toUpperCase()}
          handleEdit={props.handleEditOccupation}
          editMode={props.editMode}
        />
      </div>
    );
  }
  
export default Name;
  