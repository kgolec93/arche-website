import React, { Component } from 'react'
import './ProjectPage.scss'
import bgImg from '../../../../assets/landing-page/03.jpg'

import arrow from '../../../../assets/svg/imageArrow.svg'

import data from '../../../../Data/data'
import { CSSTransition } from 'react-transition-group'


import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const project = data[1].projects[0]

export class ProjectPage extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            activeImage: 0,
            containerWidth: ''
        }
    }

    componentDidMount() {
        this.setState({ data: project })
        window.addEventListener('resize', () => {
            this.setState({ containerWidth: this.refs.imageContainer.offsetWidth })
        })
        setTimeout(() => {
            this.setState({ containerWidth: this.refs.imageContainer.offsetWidth })
        }, 100)
    }

    changeImage = (payload) => {
        switch (payload) {
            case 'prev':
                if (this.state.activeImage === 0) {
                    this.setState({ activeImage: this.state.data.images.length - 1 })
                }
                else {
                    this.setState({ activeImage: this.state.activeImage - 1 })
                }
                break;
            case 'next':
                if (this.state.activeImage === this.state.data.images.length - 1) {
                    this.setState({ activeImage: 0 })
                }
                else {
                    this.setState({ activeImage: this.state.activeImage + 1 })
                }
        }
    }

    render() {
        if (this.state.data) {
            return (
                <div id='projectPageContainer' className='mainContent'>
                    <header id="jumbo">
                        <div className="headerWrapper top">
                            <h1>{this.state.data.name}</h1>
                        </div>
                        <div className="dataContainer top">
                            <div className="item">
                                <p className="title">projekt:</p>
                                <p className="content">&nbsp;{this.state.data.projectYear}</p>
                            </div>
                            <div className="item">
                                <p className="title">realizacja:</p>
                                <p className="content">&nbsp;{this.state.data.constructionYear}</p>
                            </div>
                            <div className="item">
                                <p className="title">lokalizacja:</p>
                                <p className="content">&nbsp;{this.state.data.location}</p>
                            </div>
                        </div>
                        <img src={this.state.data.images[0]} alt="background" />

                    </header>
                    <main id="description">
                        <p>
                            {this.state.data.description}
                        </p>
                    </main>
                    <section id="imageSlider">
                        <img src={this.state.data ? this.state.data.images[0] : null} alt="" className='background' />
                        <div className="imageContainer">
                            <div
                                className="imagesWrapper"
                                style={{ transform: `translateX(${-1 * this.state.activeImage * this.state.containerWidth}px)` }}
                            >
                                {
                                    this.state.data.images.map((item, index) => {
                                        return (
                                            <div
                                                className="container"
                                                ref='imageContainer'
                                            >
                                                <img
                                                    src={item}
                                                    alt={index}
                                                    className='image'
                                                />
                                            </div>

                                        )
                                    })
                                }
                            </div>
                            <img
                                onClick={() => this.changeImage('prev')}
                                src={arrow} alt="left"
                                className='arrow left'
                            />
                            <img
                                onClick={() => this.changeImage('next')}
                                src={arrow} alt="right"
                                className='arrow right'
                            />
                        </div>
                    </section>
                </div>
            )
        }
        else {
            return (
                <div>
                    loading
                </div>
            )
        }

    }
}

export default ProjectPage