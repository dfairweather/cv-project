
import Editable from '../Editable';

function Name(props) {
    return (
      <div>
        <div className="name">
          <Editable
            text={props.name.toUpperCase()}
            handleJobEdit={props.handleEditName}
          />
        </div>
       
        <br></br>
        <Editable
          text={props.occupation.toUpperCase()}
          handleJobEdit={props.handleEditOccupation}
        />
      </div>
    );
  }
  
export default Name;
  