import React from 'react';
import firebase from '../../firebase';

function Picture(props){

    const uploadedImage = React.useRef(props.picture);
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            props.handleSavePicture(file)
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            console.log(reader.readAsDataURL(file));
        }
    }; 

   
    let upload = null;
    if (props.editMode) {
        upload = (
            <div>
                <input 
                    type="file"
                    accept="image/*"
                    multiple={false}
                    onChange={handleImageUpload}
                ></input>

            </div>
        )
    }
    let picurl;
   
    let storageRef = firebase.storage().ref();
    let picRef = storageRef.child('images/mypic.jpg');
    picRef.getDownloadURL().then(function(url) {
        picurl=url;
        
    })
    

    return (

        <div className = 'picture'>
            <div>
               <img
                ref={uploadedImage}
                alt="your pic goes heres"
                style={{
                    filter: "grayscale(100%)",
               
                    height: "200px",
                    
                }}
                
                /> 
            <img alt="work" src={picurl}></img>
            </div>
            {upload}
            
            
        </div>
    )

}

export default Picture;