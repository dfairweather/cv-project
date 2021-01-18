import Editable from '../Editable';
import DeleteButton from '../DeleteButton';

function School(props) {
  const {major, school, start, end, id} = props.school
  let deleteButton = null;
  if (props.editMode) {
    deleteButton = (
      <DeleteButton 
        handleDelete={props.handleDeleteSchool}
        id={id}
      ></DeleteButton>
    )
  }
  return (
    <div className="school">
      
      <Editable 
        jobId={id} 
        text={major.toUpperCase()}
        field={"major"}
        handleEdit={props.handleEditSchool}
        editMode={props.editMode}
      ></Editable>
      {deleteButton}
      <br></br>
     
  
      <Editable 
        text={school.toUpperCase()}
        jobId={id} 
        field={"school"}
        handleEdit={props.handleEditSchool}
        editMode={props.editMode}
      ></Editable>
      <br></br>
      <div className="school-date">
        <Editable 
          text={start}
          jobId={id}
          field={"start"}
          handleEdit={props.handleEditSchool}
          editMode={props.editMode}
        ></Editable>
        &nbsp;
        <span>-</span>
        &nbsp;
        <Editable 
          text={end}
          jobId={id}
          field={"end"}
          handleEdit={props.handleEditSchool}
          editMode={props.editMode}
        ></Editable>
      </div>
      
    </div>
  );
}
  
export default School;
  