
import Editable from '../Editable';

function Name(props) {
    return (
      <div className="name-container">
        <div className="name">
          <Editable
            text={props.name.toUpperCase()}
            handleEdit={props.handleEditName}
            editMode={props.editMode}
          />
        </div>
       
        <br></br>
        <div className="occupation-container" style={{paddingTop: '10px'}}>
          <div style={{
            width: "20px",
            height: "10px",
            background: "#454545",
            display: 'inline-block',
            marginRight: '20px'
          }}></div>

          <Editable
          text={props.occupation.toUpperCase()}
          handleEdit={props.handleEditOccupation}
          editMode={props.editMode}
         />
        </div>
        
      </div>
    );
  }
  
export default Name;
  