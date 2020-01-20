import React, { Component } from 'react'
import './ProjectPage.scss'
import arrow from '../../../../assets/svg/imageArrow.svg'
import 'react-animated-slider/build/horizontal.css';
import returnArrow from '../../../../assets/svg/arrowBack.svg'
import { Link } from 'react-router-dom'

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
        this.setState({ data: this.props.data });
        window.addEventListener('resize', this.handleResize, false);
        setTimeout(() => {
            this.setState({ containerWidth: this.refs.imageContainer.offsetWidth })
        }, 100);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, false);
    }

    handleResize = () => {
        this.setState({ containerWidth: this.refs.imageContainer.offsetWidth });
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
                break;
            default:
                return null
        }
    }

    render() {
        if (this.state.data) {
            return (
                <div id='projectPageContainer' className='mainContent'>
                    <header id="jumbo">
                        <Link to='/projects' className="return">
                            <img src={returnArrow} alt="arrow" />
                            <p>powrót</p>
                        </Link>
                        
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
                        <img src={this.state.data.images[0]} className='background' alt="background" />

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
