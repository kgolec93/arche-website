import React, { Component } from 'react'
import './Offer.scss'

import img01 from '../../../assets/projects/odrzanska/04.jpg'
import img02 from '../../../assets/projects/tarasy-grabiszynskie/01.jpg'
import img03 from '../../../assets/projects/volvo/01.jpg'

export class Offer extends Component {
    render() {
        return (
            <div className='mainContent' id='offerMainContainer'>
                <main className="contentContainer">
                    <div className="textWrapper">
                        <h2>Nasza oferta</h2>
                        <p>
                            W ofercie naszej pracowni znajdują się przede wszystkim projekty wielobranżowe, w zakresie architektury, konstrukcji oraz instalacji sanitarnych i elektrycznych, Prowadzimy także nadzory autorskie, jak również zajmujemy się prowadzeniem inwestycji oraz wykonywaniem ekspertyz oraz inwentaryzacji.
                        </p>
                        <p>
                            Specjalizujemy się głównie w projektach architektury mieszkaniowej, budynków użyteczności publicznej, a także przestrzeni komercyjnych, takich jak biurowce oraz przestrzenie handlowe.
                        </p>
                    </div>
                </main>
                <section className="imagesContainer">
                    <div className="item">
                        <img src={img01} alt="Odrzańska Residence" />
                    </div>
                    <div className="item">
                        <img src={img02} alt="Tarasy Grabiszyńskie" />
                    </div>
                    <div className="item">
                        <img src={img03} alt="Volvo Biurowiec" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Offer
