import React, { Component } from 'react'
import './Contact.scss'
import archeLogo from '../../../assets/svg/archeLogoBlackFill.svg'
import archeMapMarker from '../../../assets/svg/archeMapMarker.svg'
import GoogleMapReact from 'google-map-react';

const Marker = () => {
    return (
        <img src={archeMapMarker} alt="marker" className='mapMarker'/>
    )
}


export class Contact extends Component {
    render() {
        return (
            <div id='contactMainContainer' className='mainContent'>
                <div className="dataContainer">
                    <img src={archeLogo} alt="Arche Sp. z o.o." className="logo item" />
                    <div className="company item">
                        <h2>Arche Sp. z o.o.</h2>
                        <p>Ul. Malarska 18 / 24-7</p> 
                        <p>50-111 Wrocław</p>
                    </div>
                    <div className="office item">
                        <p className="underline">
                            Adres biura:
                        </p>
                        <p>ul. Dmowskiego 17F / 3</p>
                        <p>50-203 Wrocław</p>
                    </div>
                    <div className="contact item">
                        <p>tel: + 48 607 104 694</p>
                        <p>mail: pracownia@arch-e.com</p>
                    </div>
                </div>
                <div className="mapContainer">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyB0sH8MpWuRhUOfKHm7a2sJoD5ndKgYFok' }}
                        defaultCenter={{ lat: 51.117475, lng: 17.019388 }}
                        defaultZoom={15}
                    >
                        <Marker
                            lat={51.117475}
                            lng={17.019388}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Contact
