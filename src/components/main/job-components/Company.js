import Editable from '../../Editable.js';

function Company(props) {
    return (
        <h4 className="company-year">
            <Editable 
                text={props.company} 
                jobId={props.id} 
                handleEdit={props.handleEdit} 
                field={'company'}
                editMode={props.editMode}
            ></Editable> 
            &nbsp;&nbsp;
            | 
            &nbsp;&nbsp;
            <Editable 
                text={props.start}
                jobId={props.id}
                handleEdit={props.handleEdit}
                field={'start'}
                editMode={props.editMode}
            ></Editable>
            &nbsp;
            <span style={{ fontWeight: '200' }}>to</span>
            &nbsp;
            <Editable 
                text={props.end}
                jobId={props.id}
                handleEdit={props.handleEdit}
                field={'end'}
                editMode={props.editMode}
            ></Editable> 
        </h4>
    );
  }
  
export default Company;
  
