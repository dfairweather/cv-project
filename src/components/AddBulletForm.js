import AddButton from './AddButton';

function AddBulletForm(props) {
    return (
        <li>
            <form 
                onSubmit={(e) => {
                props.handleAddBullet(e)
                }} 
                className="bullet-form">
                <input 
                    type="text" 
                    name="bullet" 
                    placeholder="Add bullet point..."
                ></input>
            </form>
            <AddButton/>
        </li>
    )
}

export default AddBulletForm
           