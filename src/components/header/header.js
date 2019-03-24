/**
 * Created By: Naveen Malhotra
 * Created Date: 24/03/2019(dd/mm/yyyy)
*/

import React from 'react';
import './header.css';
import Logo from '../../assets/iconMovieLogo';
import Line from '../../assets/iconLine';

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render (){
        return (
            <div className="outerDiv">
                <div className="headerStyle">
                    <Logo className="logoStyle" width="100" height="100"/>
                </div>
            </div>

        );
    }
}

export default Header;
