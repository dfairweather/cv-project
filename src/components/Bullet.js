import DeleteButton from './DeleteButton';
import Editable from './Editable';

import React from 'react';

class Bullet extends React.Component {
    render() {
        let deleteButton = null;
        if (this.props.editMode) {
            deleteButton = (
                <DeleteButton
                id={this.props.id} 
                bulletId={this.props.field}
                handleDelete={this.props.handleDelete}
                ></DeleteButton>
            )
        }
        return (
            
            <li 
                className="skills-bullet">
                <Editable 
                    jobId={this.props.id}
                    handleEdit={this.props.handleEdit}
                    text={this.props.text}
                    field={this.props.field}
                    editMode={this.props.editMode}
                ></Editable>
                {deleteButton}
            </li>
        );
    }
    
  }
  
export default Bullet;
 