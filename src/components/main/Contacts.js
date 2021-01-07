import Contact from './Contact';

function Contacts(props) {
    return(
        <div className="contacts">
            <Contact 
                icon={"email"}
                text={props.contacts.email}
                handleEdit={props.handleEdit}
                category={"email"}
            ></Contact>
            <Contact 
                icon={"phone_iphone"}
                text={props.contacts.phone}
                handleEdit={props.handleEdit}
                category={"phone"}
            ></Contact>
            <Contact 
                icon={"language"}
                text={props.contacts.website}
                handleEdit={props.handleEdit}
                category={"website"}
            ></Contact>
            
        </div>
    )
}

export default Contacts;