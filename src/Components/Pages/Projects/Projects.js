import React, { Component } from 'react'
import './Projects.scss'
import data from '../../../Data/data'
import { Link } from 'react-router-dom';
import FlipMove from 'react-flip-move';

const filters = [
    {
        name: 'wszystkie',
        type: 'all'
    },
    {
        name: 'mieszkaniowe',
        type: 'housing'
    },
    {
        name: 'użyteczności publicznej',
        type: 'public'
    },
    {
        name: 'komercyjne',
        type: 'commercial'
    },
]

class ProjectItem extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        }
    }
    render() {
        return (
            <Link to={this.props.name}
                className={`item ${this.state.isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => this.setState({ isHovered: true })}
                onMouseLeave={() => this.setState({ isHovered: false })}
            >
                <img src={this.props.image} alt={this.props.name} />
                <Link to={`/projects/${this.props.url}`} className="data">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.projectYear}</p>
                </Link>
            </Link>
        )
    }
}

export class Projects extends Component {
    constructor() {
        super();
        this.state = {
            activeFilter: 'all'
        }
    }
    render() {
        return (
            <div id='projectsMainWrapper' className='mainContent'>
                <nav className="projectsFiltering">
                    <ul>
                        {filters.map(item => {
                            return (
                                <li
                                    key={`filter-${item.type}`}
                                    id={item.type}
                                    active={this.state.activeFilter}
                                    className={`filterItem ${item.type === this.state.activeFilter ? 'active' : ''}`}
                                    onClick={(e) => this.setState({ activeFilter: e.target.id })}
                                >
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <main className="projectItemsContainer">
                    <FlipMove
                        staggerDurationBy="50"
                        duration={400}
                        typeName={null}
                        appearAnimation='elevator'
                    >
                        {this.state.activeFilter === 'all' ?
                            data[1].projects.map(item => {
                                return (
                                    <ProjectItem
                                        key={`project-${data[1].projects.indexOf(item)}`}
                                        image={item.images[0]}
                                        url={item.url}
                                        name={item.name}
                                        projectYear={item.projectYear}
                                    />
                                )
                            })

                            :
                            data[1].projects.filter(i => {
                                return i.type === this.state.activeFilter
                            }).map((item) => {
                                return (
                                    <ProjectItem
                                        key={`project-${data[1].projects.indexOf(item)}`}
                                        image={item.images[0]}
                                        url={item.url}
                                        name={item.name}
                                        projectYear={item.projectYear}
                                    />
                                )
                            })
                        }

                    </FlipMove>

                </main>
            </div>
        )
    }
}

export default Projects
