/**
 * Created By: Naveen Malhotra
 * Created Date: (dd/mm/yyyy)
*/

import React from 'react';
import API from '../../common/services/api';
import Config from '../../constants/config';
import Moment from 'moment';

import './details.css';

class Details extends React.Component{
    api = new API();
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        // GET MOVIE DETAILS
        let config = {
            params: {
                "language": "en-US",
                "api_key": Config.API_KEY
            }
        };
        this.api.getMovieDetils(config, this.props.match.params.id)
        .then((response) => {
            this.setState({movie: response.data})
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
    }

    render (){
        return (
            <div className="contentContainerStyle">
                <div className="outerClass">
                    <div className="backDropContainer">
                        <img src={`https://image.tmdb.org/t/p/w780/${this.state.movie.backdrop_path}`}/>
                    </div>

                    <div className="posterImageContainerStyle">
                        <img className="imageStyle" src={`https://image.tmdb.org/t/p/w200/${this.state.movie.poster_path}`}></img>
                        <span className="titleStyle1">{this.state.movie.title}</span>
                        <span className="dateRatingstyle">{Moment(this.state.movie.release_date).format('YYYY')} . {this.state.movie.vote_average * 10 + "% User Score"}</span>
                        <div className="descriptionContainer">
                            <br/><br/>
                            <span className="detailsOverviewStyle">Overview</span>
                            <p className="descriptionStyle">{this.state.movie.overview}</p>
                            <br/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Details;
