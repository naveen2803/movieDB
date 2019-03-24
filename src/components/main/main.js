/**
 * Created By: Naveen Malhotra
 * Created Date: 24/03/2019(dd/mm/yyyy)
*/

import React from 'react';
import Logo from '../../assets/iconMovieLogo';
import Search from '../../assets/iconSearch';
import Line from '../../assets/iconLine';
import Header from '../header/header';
import Tile from '../movieTile/tile';
import API from '../../common/services/api';
import axios, { AxiosRequestConfig } from 'axios';
import { Label, Input } from 'reactstrap';
import Config from '../../constants/config';

import './main.css';

class Main extends React.Component{
    api = new API();
    constructor(props) {

        super(props);

        this.state = {
            placeHolderText: "Search",
            popularMovies: []
        };

        this.searchChange = this.searchChange.bind(this);
    }

    searchChange(event) {
        let searchText = event.target.value;
        if(searchText.length > 0) {
            this.setState({
                placeHolderText: ""
            });
        }
        else {
            this.setState({
                placeHolderText: "Search"
            });
        }

        if(searchText.length > 2) {

        }
    }

    componentDidMount() {
        // GET POPULAR MOIES
        let config = {
            params: {
                "language": "en-US",
                "api_key": Config.API_KEY,
                "page":"1"
            }
        };
        this.api.getPopularMovies(config)
        .then((response) => {
            this.setState({popularMovies: response.data.results})
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
    }

    createMovieTiles(item, index) {
        let imgSource = "https://image.tmdb.org/t/p/w200" + item.poster_path;
        let votePercentage = item.vote_average * 10 + "%";
        return(
            <Tile key={index}
                src={imgSource}
                votePercentage={votePercentage}
                title={item.title}
                releaseDate={item.release_date}
                overview={item.overview}
                id={item.id}/>
        );
    }

    render (){
        return (
            <div>
                <Header />
                <div className="contentContainerStyle">
                    <div className="searchContainer">
                        <Label className="placeHolderStyle" for="searchText">
                            {this.state.placeHolderText}
                        </Label>
                        <Input type="text" name="searchText"
                            id="searchText" className="textBoxStyle"
                            onChange={this.searchChange}/>
                        <div className="searchIconStyle">
                            <Search width="20" height="28"/>
                        </div>
                        <p className="popularMovieTitle">Popular Movies</p>
                        <div className="tileContainer">
                            {this.state.popularMovies.map(this.createMovieTiles.bind(this))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
