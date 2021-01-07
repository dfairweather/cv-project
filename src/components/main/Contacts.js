import Editable from '../Editable';

function Contacts(props) {
    return(
        <div className="contacts">
            <Editable 
                text={props.contacts.email}
                handleEdit={props.handleEdit}
                jobId={"email"}
                />
            <br></br>
            <Editable 
                text={props.contacts.phone}
                handleEdit={props.handleEdit}
                jobId={"phone"}   
            />
            <br></br>
            <Editable 
                text={props.contacts.website}
                handleEdit={props.handleEdit}
                jobId={"website"}    
            />
            
        </div>
    )
}

export default Contacts;