import DeleteButton from './DeleteButton';
import Editable from './Editable';

function Bullet(props) {
    return (
        <li 
            className="skills-bullet">
            <Editable 
            jobId={props.id}
            handleJobEdit={props.handleEditSkill}
            text={props.text}></Editable>
            <DeleteButton id={props.id} handleDelete={props.handleDelete}></DeleteButton>
        </li>
    );
  }
  
export default Bullet;
 