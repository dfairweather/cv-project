function DeleteButton(props) {
    return (
          <i 
            className="material-icons delete-button" 
            onClick={() => {
              props.handleDelete(props.id, props.jobId)}
            }>
            delete
            </i>
    );
  }
  
export default DeleteButton;
  