import Button from "./Button.js";

//arrays and your keys

const arr = [
    'chanchito feliz',
    'chanchito triste',
    'chanchito emocionado'
]

const App = () => {

    const validate = false
    if (validate) {
        return <p>Mi variable es true</p>
    }

    return (
        <div>

            <h1 onClick={ (e) => console.log('click', e) }>
                Hola Mundo
            </h1>
            {/* se debe pasar un key para identificar cada elemento p */}
            { arr.map(el => <p key={el}>{ el }</p>) }

            <Button onClick={ () => console.log('clickeado') }> Enviar </Button>
        </div>
    )
}

export default App