/**
 * Created By: Naveen Malhotra
 * Created Date: 24/03/2019(dd/mm/yyyy)
*/

import React from 'react';

class IconLine extends React.Component{
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render (){
        return (
            <svg className={this.props.className} width="118" height="250" viewBox="0 0 118 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="21.5513" width="162" height="4" rx="2" transform="rotate(-45 0 21.5513)" fill="#01D277" fillOpacity="0.83"/>
            </svg>
        );
    }
}

export default IconLine;
