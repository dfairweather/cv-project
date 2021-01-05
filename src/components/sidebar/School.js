import Editable from '../Editable';
import DeleteButton from '../DeleteButton';

function School(props) {
  const {major, school, start, end, id} = props.school
  return (
    <div className="school">
      
      <Editable 
        jobId={id} 
        text={major}
        field={"major"}
        handleJobEdit={props.handleEditSchool}
      ></Editable>
      <DeleteButton 
        handleDelete={props.handleDeleteSchool}
        id={id}
      ></DeleteButton>
      <br></br>
     
  
      <Editable 
        text={school}
        jobId={id} 
        field={"school"}
        handleJobEdit={props.handleEditSchool}
      ></Editable>
      <br></br>
      <Editable 
        text={start}
        jobId={id}
        field={"start"}
        handleJobEdit={props.handleEditSchool}
      ></Editable>
      &nbsp;
      <span style={{ fontWeight: '200' }}>to</span>
      &nbsp;
      <Editable 
        text={end}
        jobId={id}
        field={"end"}
        handleJobEdit={props.handleEditSchool}
      ></Editable>
    </div>
  );
}
  
export default School;
  