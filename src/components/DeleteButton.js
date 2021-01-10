function DeleteButton(props) {
    return (
          <i 
            className={
              "material-icons delete-button " +
              (props.className ? (props.className) : '')}
            onClick={() => {
              props.handleDelete(props.id, props.bulletId)}
            }>
            delete
            </i>
    );
  }
  
export default DeleteButton;
  