function Icon(props) {
    return (
          <i className="material-icons" onClick={props.onClick}>{props.type}</i>
    );
  }
  
export default Icon;
  