import Button from "./Button.js";

const App = () => {
    return (
        <div>

            <h1>Hola Mundo</h1>
            <Button onClick={ () => console.log('clickeado') }> Enviar </Button>
        </div>
    )
}

export default App