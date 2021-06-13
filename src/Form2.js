import Form from "react-bootstrap/Form";
function Form2(props) {
    if (props.paso !== 2) {
        return null
    }
    return (
        <div>
            <button className="text-muted align-left"> Volver</button>
            <span className="text-muted float-right">Paso 01/03<br /><b>Personal info</b></span>
            
            <div className="col-8 mx-auto align-middle pt-5">
                <h1>Registra tu cuenta individual</h1>
                <p className="text-muted">Para poder revisar que se trata 
                de una cuenta real, necesitamos la siguiente información</p>
                <Form className="align-middle">
                    <Form.Group>
                        <Form.Label>Nombre ususario</Form.Label>
                        <Form.Control className="form-control-lg" type="" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form>
            </div>

        </div>

    )
}
export default Form2