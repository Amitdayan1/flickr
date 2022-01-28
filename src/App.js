import './App.css';
import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
      photos:[],
      photoLink:[]
  }


    getPhotos = () => {
        axios.get("https://api.flickr.com/services/rest/", {
            params: {
                method: 'flickr.photos.getRecent',
                extras: 'url_s',
                format:'json' ,
                nojsoncallback:'1',
                api_key: 'aabca25d8cd75f676d3a74a72dcebf21'
            }}).then((response=>{
            console.log(response.data.photos);
                this.setState({
                    photos:response.data.photos,
                })

        }))
    }

  render() {
    return (
        <div>
<h1>Gallery</h1>

            {console.log(this.state.photos)}
            <button onClick={this.getPhotos}>click</button>
        </div>
    );
  }
}
export default App;
