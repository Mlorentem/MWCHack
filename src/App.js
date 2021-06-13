import react from 'react'
import './App.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      paso: 1,
      email: '',
      nombre: '',
      contraseña: '',

    }
  }
  
  
  nextStep() {
    this.setState({ paso: this.state.paso + 1 })
    console.log("gdagdasfda");
  }

  render() {
    return (
      <div className="App">
        <section className="left">
          <article>
            <img className="comilla" alt="comilla"></img>
            <p>aqui va un texto placeholder to guapo</p>
            <img className="esquina" alt="esquina"></img>
          </article>
        </section>
        <section className="right">
          <Form1
            callback={this.nextStep.bind(this)}
            paso={this.state.paso}
          />
          <Form2
            paso={this.state.paso}
          />
          <Form3
            paso={this.state.paso}
          />
          <Form4
            paso={this.state.paso}
          />
        </section>
      </div>
    );
  }
  
}
export default App;
