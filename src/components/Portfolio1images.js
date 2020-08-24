import React, { Component } from 'react'
import Modalexample from './Modal/Modal'
import Carousel from './Modal/Carousel'

//PARA PONER CADA MODAL EN UN CAROUSEL
//https://react-bootstrap.github.io/components/carousel/

export default class Portfolio1Image extends Component {
    render() {
        return (
            <div className="contenedor">
                <Modalexample  url={this.props.url} ide={this.props.id}>
                    <Carousel foto={this.props.url} id={this.props.id} > 
                    </Carousel>
                </Modalexample>
            </div>
        )
    }
}
