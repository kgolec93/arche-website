import React from 'react'
import Logo from '../../logo'
import './LandingPage.scss'
import LogoAnim from '../../LogoAnim/LogoAnim'
import { Link } from 'react-router-dom'

import img01 from '../../../assets/landing-page/01.jpg'
import img02 from '../../../assets/landing-page/02.jpg'
import img03 from '../../../assets/landing-page/03.jpg'
import img04 from '../../../assets/landing-page/04.jpg'
import img05 from '../../../assets/landing-page/05.jpg'
import img06 from '../../../assets/landing-page/06.jpg'
import img07 from '../../../assets/landing-page/07.jpg'
import img08 from '../../../assets/landing-page/08.jpg'
import img09 from '../../../assets/landing-page/09.jpg'
import img10 from '../../../assets/landing-page/10.jpg'

const projects1 = [
    {
        name: 'Odrzańska Residence',
        url: '',
        image: img01
    },
    {
        name: 'Hotel Kołobrzeg',
        url: '',
        image: img02
    },
    {
        name: 'Folwark Osobowice',
        url: '',
        image: img03
    },
    {
        name: 'Jodłowa Wrocław',
        url: '',
        image: img04
    },
    {
        name: 'Zamek w Karpnikach',
        url: '',
        image: img05
    }
]

const projects2 = [
    {
        name: 'Wrocław Krawiecka JustIn Center',
        url: '',
        image: img06
    },
    {
        name: 'Port Miejski Kleczków Wrocław',
        url: '',
        image: img07
    },
    {
        name: 'Tarasy Grabiszyńskie',
        url: '',
        image: img08
    },
    {
        name: 'Volvo Wrocław',
        url: '',
        image: img09
    },
    {
        name: 'Maślice Osiedle Mieszkaniowe',
        url: '',
        image: img10
    }
]

const LandingPage = () => {
    return (
        <main id='landingPageContainer'>
            <div className="tilesContainer">
                {/* MAP 1 */}
                {projects1.map(item=>{
                    return(
                        <Link href={item.url} key={`landingPageItem1-${projects1.indexOf(item)}`} className="tileItem">
                            <img src={item.image} alt={item.name}/>
                        </Link>
                    )
                })}
                <div className="tileItem" id="logoContainer">
                    <LogoAnim />
                </div>
                {projects2.map(item=>{
                    return(
                        <Link href={item.url} key={`landingPageItem2-${projects2.indexOf(item)}`} className="tileItem">
                            <img src={item.image} alt={item.name}/>
                        </Link>
                    )
                })}

                {/* END OF MAP 2  */}

            </div>
        </main>
    )
}

export default LandingPage
