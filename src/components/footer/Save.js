import Icon from '../Icon';

function Save(props) {
    return (
        <button
            onClick={props.handleSave}
        >
            
            <Icon type={"save_alt"}></Icon>
            Save
        </button>
    )
}
            
export default Save;