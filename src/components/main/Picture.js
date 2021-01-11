import React from 'react';

function Picture(props){
    
    const uploadedImage = React.useRef(null);
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
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
            </div>
            {upload}
            
            
        </div>
    )

}

export default Picture;