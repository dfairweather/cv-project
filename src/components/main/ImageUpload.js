import React from 'react';
import firebase from '../../firebase';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: "",
            progress: 0
        }
        firebase.storage()
            .ref("images")
            .child('mypic.jpg')
            .getDownloadURL()
            .then(url => {
                this.setState({ url });
            }).catch( error => {
                console.log(error);
                
            });
    }

    handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({ image }));
        }
    };


    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = firebase.storage().ref(`images/mypic.jpg`).put(image);
        uploadTask.on(
        "state_changed",
        snapshot => {
            // progress function ...
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progress });
        },
        error => {
            // Error function ...
            console.log(error);
        },
        () => {
            // complete function ...
            firebase.storage()
            .ref("images")
            .child('mypic.jpg')
            .getDownloadURL()
            .then(url => {
                this.setState({ url });
            });
        }
        );
    };

    render() {
        let form = null
        if (this.props.editMode) {
            form = (
                <div>
                    <div className="row">
                        <progress value={this.state.progress} max="100" className="progress" />
                    </div>
                
                    <div className="file-field input-field">
                        <div className="btn">
                            <input type="file" onChange={this.handleChange} />
                        </div>
                    </div>
                    <button
                        onClick={this.handleUpload}
                        className="waves-effect waves-light btn"
                    >
                    Upload
                    </button>  
                </div> 
            );
        }
        return (
            <div className="center">
                 <img
                    src={this.state.url || "https://via.placeholder.com/400x300"}
                    alt="Uploaded Images"
                    style={{filter: "grayscale(100%)"}}
                    height="260"
                />
                {form}
            </div>
        );
    }
}

export default ImageUpload;