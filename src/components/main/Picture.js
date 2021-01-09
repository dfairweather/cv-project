import React from 'react';

function Picture(){
    
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

   
 
    return (
        <div className = 'picture'>
            <div>
                <input 
                    type="file"
                    accept="image/*"
                    multiple={false}
                    onChange={handleImageUpload}
                ></input>

            </div>

            <div>
               <img
                ref={uploadedImage}
                alt="your pic"
                style={{
                    filter: "grayscale(100%)",
               
                    height: "200px",
                    
                }}
            /> 
            </div>
            
            
            
        </div>
    )

}

export default Picture;