import React from 'react'

class Contador extends React.Component {
    state = {
        num: this.props.num
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.num < nextProps.num) {
            return {
                num: nextProps.num
            }
        }
    }

    aumentar = () => {
        this.setState(state => ({
            num: state.num + 1
        }))
    }

    render() {
        const { num } = this.state
        return (
            <div>
                <button onClick={this.aumentar}>Aumentar: {num}</button>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        numero: 0
    }

    handleChange = (e) => {
        let numero = parseInt(e.target.value)

        if (isNaN(numero)) {
            numero = 0
        }
        this.setState({ numero })
    }


    render() {
        const { numero } = this.state
        return (
            <div>
                <p>{numero}</p>
                <input type="text" onChange={this.handleChange}></input>
                <Contador num={numero}></Contador>
            </div>
        )
    }
}

export default App