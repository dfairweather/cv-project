import Editable from '../../Editable.js';

function JobTitle(props) {
    return (
        <h4 className="job-title">
            <Editable 
                text={props.text.toUpperCase()} 
                field = {"title"} 
                jobId={props.jobId} 
                handleEdit={props.handleEdit}>
            </Editable>
        </h4>
    );
  }
  
export default JobTitle;
  


