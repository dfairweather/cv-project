import Editable from '../../Editable.js';

function JobTitle(props) {
    return (
        <h4 className="job-title">
            <Editable 
                text={props.text.toUpperCase()} 
                field = {"title"} 
                jobId={props.jobId} 
                handleEdit={props.handleEdit}
                editMode={props.editMode}
            ></Editable>
        </h4>
    );
  }
  
export default JobTitle;
  


