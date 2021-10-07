import React, { Component } from 'react';
import axios from 'axios';
import style from '../Styles/EstiloBarra.module.css';

class SearchBar extends React.Component {
    key = "AIzaSyCSOPDrTyaq2rDHaQb6YPxnfFZwBWFqfW4";
    constructor(props) {
        super(props);
        this.state = { video: '' };

      this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        
        this.setState({ video: event.target.value });
    }

    handleSubmit(event) {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q="+this.state.video+'&key=' + this.key)
            .then(res => {
                const users = res.data;
                this.setState({ resultados: users });
                console.log(this.state.video)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SearchBar;