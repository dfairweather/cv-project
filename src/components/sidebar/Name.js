
import Editable from '../Editable';

function Name(props) {
    return (
      <div>
        <div className="name">
          <Editable
            text={props.name.toUpperCase()}
            handleEdit={props.handleEditName}
          />
        </div>
       
        <br></br>
        <Editable
          text={props.occupation.toUpperCase()}
          handleEdit={props.handleEditOccupation}
        />
      </div>
    );
  }
  
export default Name;
  