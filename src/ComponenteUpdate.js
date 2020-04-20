import React from 'react'


class UserDetails extends React.Component {
    state = {
        user: {},
        cargado: false
    }


    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, this.props)
        if (prevProps.userId !== this.props.userId) {
            this.fetchData()
        }
    }


    fetchData = () => {
        this.setState({
            cargado: true
        })
        const URL = 'https://jsonplaceholder.typicode.com/users/' + this.props.userId
        fetch(URL)
            .then(res => res.json())
            .then(user => this.setState({
                user, cargado: false
            }))
    }



    render() {
        return (
            <div>
                {this.state.cargado
                    ? <h1>
                        Cargando
                        </h1>
                    :
                    (
                        <pre>
                            {JSON.stringify(this.state.user, null, 4)}
                        </pre>
                    )
                }
            </div>
        )
    }
}


class App extends React.Component {
    state = {
        id: 1
    }

    aumentar = () => {
        this.setState({
            id: this.state.id + 1
        })
    }
    render() {
        const { id } = this.state
        return (
            <div>
                <UserDetails userId={id} />
                <button onClick={this.aumentar}>Aumentar: {id}</button>
            </div>
        )
    }
}
export default App