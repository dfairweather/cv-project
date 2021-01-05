function Bullet(props) {
    return (
        <p  
            className="bullet-text"
            onClick={() => {
                props.handleEditBullet(props.jobId, props.value.bulletId)} }
            >{props.value.text} 
        </p>
    );
  }
  
export default Bullet;
 
 