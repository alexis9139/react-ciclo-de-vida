import React from 'react'



class App extends React.Component {

    title = React.createRef()

    state = {
        text: 'hola'
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Desde getSnapshotBeforeUpdate " + this.title.current.innerHTML)
        return "Adios desde getSnapshotBeforeUpdate"
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Desde componentDidUpdate " + this.title.current.innerHTML)
        console.log(snapshot)
    }


    enviar = () => {
        this.setState({
            text: 'Adios'
        })
    }

    render() {
        return (
            <div>
                <h1 ref={this.title}>{this.state.text}</h1>
                <button onClick={this.enviar}>Cambiar</button>
            </div>
        )
    }
}


export default App