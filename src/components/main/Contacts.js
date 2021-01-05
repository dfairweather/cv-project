import Editable from '../Editable';

function Contacts(props) {
    return(
        <div className="contacts">
            <Editable 
                text={props.contacts.email}
                handleJobEdit={props.handleEdit}
                jobId={"email"}
                />
            <br></br>
            <Editable 
                text={props.contacts.phone}
                handleJobEdit={props.handleEdit}
                jobId={"phone"}   
            />
            <br></br>
            <Editable 
                text={props.contacts.website}
                handleJobEdit={props.handleEdit}
                jobId={"website"}    
            />
            
        </div>
    )
}

export default Contacts;