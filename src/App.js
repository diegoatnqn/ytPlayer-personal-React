import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import MyPlayer from './components/myPlayer';
import MyRelated from './components/myRelated';
import styleMain from './Styles/Estilos.module.css';

class App extends React.Component {
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    key = "AIzaSyCSOPDrTyaq2rDHaQb6YPxnfFZwBWFqfW4";
    state = {
        showContainer : false,
        resultados: [],
        video: ""
    };
       
    handleChange(event) {

        this.setState({ video: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        axios("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=" + this.state.video + '&key=' + this.key).then((res) => {
            console.log(res);
            this.setState({
                showContainer: true,
                resultados: res.data.items,
                video: res.data.items[0].id.videoId
            });
            
            this.showContainer();
        }) 
        
    }

    nuevoFeatured = (nuevoId) => {
        const newFeature = nuevoId;
        this.setState({ video: newFeature })
    }

    showContainer() {
        if (this.state.showContainer) {
            console.log("THIS STATE ")
            console.log(this.state)
            return (<div className={styleMain.container}>
                <MyPlayer videoSelected={this.state.video} />
                <MyRelated lista={this.state.resultados} nuevoFeatured={this.nuevoFeatured} />
            </div>)
        } else {
            return false;
        }

    }
    render() {
        return (
            <div className="App">
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.showContainer()}
          </div>
        );
    };
    
}

export default App;
