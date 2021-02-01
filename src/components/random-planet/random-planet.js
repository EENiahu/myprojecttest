import React, {Component} from 'react';
import './random-planet.css';
import ApiService from "../../services/api-service";

export default class RandomPlanet extends Component {

    apiService = new ApiService();

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 10);
        this.apiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                })
            })
    }

    render() {
        const {name, population, rotationPeriod, diameter} = this.state;

        return (
            <div>
                <ul>
                    <li>
                        {name}
                    </li>
                    <li>
                        {population}
                    </li>
                    <li>
                        {rotationPeriod}
                    </li>
                    <li>{diameter}</li>
                </ul>
            </div>
        );
    }
}