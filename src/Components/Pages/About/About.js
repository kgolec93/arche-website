import React, { Component } from 'react'
import './About.scss'

import img01 from '../../../assets/projects/kolobrzeg/03.jpg'
import img02 from '../../../assets/projects/krawiecka/05.jpg'
import img03 from '../../../assets/projects/wolodyjowskiego/04.jpg'

import archeLogo from '../../../assets/svg/archeLogoBlackFill.svg'

const contentItems = [
    {
        number: '27',
        text: 'lat doświadczenia',
        bgImg: img01
    },
    {
        number: '53',
        text: 'zadowolonych klientów',
        bgImg: img02
    },
    {
        number: '124',
        text: 'wykonane projekty',
        bgImg: img03
    },
]

export class About extends Component {
    render() {
        return (
            <div id='aboutMainContainer' className='mainContent'>
                <main className="contentContainer">
                    <div className="content">
                        <img src={archeLogo} alt="Arche Sp. z o.o." className="logo item"/>
                        <p className='item'>
                        Jesteśmy pracownią projektową z Wrocławia, o wieloletniej historii i dużym doświadczeniu. Podstawową działalnością firmy jest projektowanie architektoniczno-budowlane. Firma wykonuje projekty budynków użyteczności publicznej oraz osiedli i zespołów mieszkaniowych, prowadzi nadzory autorskie jak również zajmuje się prowadzeniem inwestycji oraz wykonywaniem ekspertyz, inwentaryzacji.
                        </p>
                        <p className='item'>
                        Z firmą związani są wrocławscy projektanci o bogatym dorobku i dużym doświadczeniu projektowym zdobytym zarówno w Polsce jak podczas pracy w zagranicznych biurach projektowych (Architekturburo "Kolb und Prassel" - Hochdorf k. Stuttgartu, Architekturburo "Planen und Bauen" - Berlin, Buro fur Industrie Plannung - Rudiger Cornelsen, Monachium), oraz specjaliści w zakresie komputerowych technik wspomagania projektowania, ze znajomością języka niemieckiego i angielskiego.
                        </p>
                        <p className='item'>
                        Firma zatrudnia 10 osób, w tym 8 architektów oraz współpracuje na stałe z projektantami innych branż działającymi samodzielnie, bądź prowadzącymi własną działalność gospodarczą.
                        </p>
                        <p className='item'>
                        Od 1993 r. do maja 1999 r. firma działała pod nazwą "Cad-Skala" Sp. z o.o.
                        </p>
                    </div>
                </main>
                <section className="imagesContainer">
                    {contentItems.map((item, index) => {
                        return(
                            <div key={index} className="item">
                                <div className="textWrapper">
                                    <h3>{item.number}</h3>
                                    <p>{item.text}</p>
                                </div>
                                <img src={item.bgImg} alt={index}/>

                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }
}

export default About
