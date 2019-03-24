/**
 * Created By: Naveen Malhotra
 * Created Date: 24/03/2019(dd/mm/yyyy)
*/

import React from 'react';
import { Media, Badge, Label } from 'reactstrap';
import Moment from 'moment';
import { Link } from 'react-router-dom';

import './tile.css';

class Tile extends React.Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render (){
        return (
            <Link to={`details/${this.props.id}`}>
                <div className="tileItemStyle">
                    <Badge className="badgeStyle" color="success">{this.props.votePercentage}</Badge>
                    <div className="imageSizeStyle">
                        <img src={this.props.src}/>
                    </div>
                    <p className="titleStyle">
                        {this.props.title}
                    </p>
                    <p className="releaseDateStyle">
                        {Moment(this.props.releaseDate).format('MMMM')} {Moment(this.props.releaseDate).format('YYYY')}
                    </p>
                </div>
            </Link>
        );
    }
}

export default Tile;
