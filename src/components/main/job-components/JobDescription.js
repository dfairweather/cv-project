import Editable from '../../Editable.js';

function JobDescription(props) {
    return (
        <div className="job-description">
            <Editable 
                text={props.text} 
                field = {"description"} 
                jobId={props.jobId} 
                handleEdit={props.handleEdit}>
            </Editable>
        </div>
    );
  }
  
export default JobDescription;
  

