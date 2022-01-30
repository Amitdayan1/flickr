import './App.css';
import axios from "axios";
import React from "react";
import Photo from "./Photo";

class App extends React.Component {
    state = {
        photos: [],
    }

    componentDidMount() {
        this.getPhotos();
    }

    getPhotos = () => {
        axios.get("https://api.flickr.com/services/rest/", {
            params: {
                method: 'flickr.photos.getRecent',
                extras: 'url_s',
                format: 'json',
                nojsoncallback: '1',
                api_key: 'aabca25d8cd75f676d3a74a72dcebf21'
            }
        }).then((response => {
            console.log("ress " + response.data.photos.photo);
            this.setState({
                photos: response.data.photos.photo,
            })

        }))
    }

    render() {
        return (
            <div>
                <h1>Gallery</h1>
                <div className={"row"}>
                    {this.state.photos.map((photo) => {
                        return (
                            <Photo data={photo}/>)
                    })
                    }
                </div>

            </div>
        );
    }

}

export default App;
