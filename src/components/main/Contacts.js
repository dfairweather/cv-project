import Contact from './Contact';

function Contacts(props) {
    return(
        <div className="contacts">
            <Contact 
                icon={"email"}
                text={props.contacts.email}
                handleEdit={props.handleEdit}
                category={"email"}
                editMode={props.editMode}
            ></Contact>
            <Contact 
                icon={"phone_iphone"}
                text={props.contacts.phone}
                handleEdit={props.handleEdit}
                category={"phone"}
                editMode={props.editMode}
            ></Contact>
            <Contact 
                icon={"language"}
                text={props.contacts.website}
                handleEdit={props.handleEdit}
                category={"website"}
                editMode={props.editMode}
            ></Contact>
            
        </div>
    )
}

export default Contacts;