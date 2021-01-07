import DeleteButton from './DeleteButton';
import Editable from './Editable';

function Bullet(props) {
    return (
        <li 
            className="skills-bullet">
            <Editable 
                jobId={props.id}
                handleEdit={props.handleEdit}
                text={props.text}
                field={props.field}
            ></Editable>
            <DeleteButton 
                id={props.field} 
                jobId={props.id}
                handleDelete={props.handleDelete}
            ></DeleteButton>
        </li>
    );
  }
  
export default Bullet;
 