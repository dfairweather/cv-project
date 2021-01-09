import Editable from '../Editable';
import Icon from '../Icon';

function Contact(props) {
    return (
        <div className="contact">
            <Icon 
                type={props.icon}
            ></Icon>
            <Editable 
                text={props.text}
                handleEdit={props.handleEdit}
                jobId={props.category}
            ></Editable>
        </div>
    )
}

export default Contact
          