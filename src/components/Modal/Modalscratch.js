import React, { Component } from 'react';


//tutorial para transcribir codigo jsx
export default class Modaltest extends Component {
    state = {
        abierto: false
    }

    abrirModal = () => {     
        this.setState({ abierto: !this.state.abierto })
    }

    

    render() {
        const modalStyles = {
            position: "absolute",
            top: '-15em',
            minWidth: '80%',
            height: '100%',
            left: '50%',
            transform: 'translate(-50%, 50%)',
            overflowY: 'hidden',

        }
        const modalteststyle = {
            display: "flex",
            maxWidth: '80%'
        }

     
        return (
            <div>
                <img id="myImg" src="data:image/jpeg;base64,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" alt="Snow" style={{marginTop: '17em', width:'100%;max-width:300px', }} />
                <div id="myModal" className="modal" style={{display:"block", overflow: 'auto', maxWidth:'80%', paddingLeft:"400px"}}>
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                        <p>Este pajarito esta realmente encojonado</p>
                    </div>
                </div>
            </div>

        )
    }
}

