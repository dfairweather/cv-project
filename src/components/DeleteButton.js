function DeleteButton(props) {
    return (
          <i 
            className="material-icons delete-button" 
            onClick={() => {
              props.handleDelete(props.id, props.bulletId)}
            }>
            delete
            </i>
    );
  }
  
export default DeleteButton;
  