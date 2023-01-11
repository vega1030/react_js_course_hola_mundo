import { Component } from 'react'

class Button extends Component {
    render() {
        console.log('ejecutando metodo render de button')
        return (
            <button >
                Enviar
            </button>
        )
    }
}

class App extends Component {
    state = {
        valor: 3
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>Hola Mundo</p>
                <button
                    className={ `${ this.state.valor }` }
                    onClick={ () => this.setState({ valor: 2 }) }>
                    Enviar en App
                </button>
            </div>
        )
    }
}



export default App