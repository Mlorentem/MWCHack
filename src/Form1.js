function Form1(props) {

    if (props.paso !== 1) {
        return null
    }

    return (
        <div className="Form1">
            <span className="sesion">¿Ya tienes cuenta? <button>Inicia sesión</button></span>
            <h1>Únete a la comunidad</h1>
            <p>Para empezar, elige la cuenta que quieres</p>
            <button
                onClick={() => props.callback()}
                className="developersCard btn btn-primary">
                click me
                <img alt="developer"></img>
                <p>
                    <b>Developers</b><br />
                    Cuenta de personas para entrar en el mundo dev
                </p>
            </button>
            <button className="businessCard">
                <img alt="business"></img>
                <p>
                    <b>Business</b><br />
                    Tienes o perteneces a una compañia
                </p>
            </button>
        </div>
    );
}

export default Form1;