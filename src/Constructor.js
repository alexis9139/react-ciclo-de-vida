import React from 'react'


class Constructor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mensaje: "hola desde el constructor",
            num: 0
        }
        this.agregar = this.agregar.bind(this)
        this.title = React.createRef()
    }

    agregar = (state) => {
        console.log(this.title)
        this.setState(state => ({
            num: state.num + 1
        }))
    }

    render() {
        return (
            <div>
                <h1 ref={this.title}>{this.state.mensaje}</h1>
                <br></br>
                <button onClick={this.agregar}>Aumentar {this.state.num}</button>
            </div>
        )
    }
}

export default Constructor