import { useState } from 'react';
import Card from './Card.jsx';
import time_managment from '../assets/time_managment.svg';
import programming from '../assets/programming.svg';
import meditation from '../assets/meditation.svg';
import '../App.css';

const tutorialData = [
  {
    image: time_managment,
    title: "Dedica moltes hores",
    description: "Un minim de 30 hores a la setmana. Si no en tens prou, hauras de dedicar-li més hores. Al principi sembla imposible, pero notaràs una millora rapidament.",
    backgroundColor: "#0d9488"
  },
  {
    image: programming,
    title: "Programa projectes propis",
    description: "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudara a accelerar el teu aprenentatge.",
    backgroundColor: "#d1d5db"
  },
  {
    image: meditation, 
    title: "Procura descansar",
    description: "Descansar be i desconectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    backgroundColor: "#fcd34d"
  }
];

export function App() {

  const [step, setStep] = useState(0) // lo usamos para modificar los steps y poder modificar los datos de la card cada vez que apretamos botones nextStep o prevStep
  const [direction, setDirection] = useState('') // lo usamos para modificar la direccion del desplazamineto de la imagen al apretar alguno de los botones (animacion nivel 3)
  
  // boton para mostrar la siguiente info del array tutorialData
  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setDirection('next');
      setStep(step + 1);
    } else {
      setDirection('next');
      setStep(0);
    }
  };

  // boton para mostrar la info  anterior del array tutorialData
  const prevStep = () => {
    if (step > 0) {
      setDirection('prev');
      setStep(step - 1);
    } else {
      setDirection('prev');
      setStep(tutorialData.length - 1);
    }
  };


  // redirije a la card correspondiente segun se haga click a un boton o otro delindicador 
  const goToStep = (stepIndex) => {
    if (stepIndex > step) {
      setDirection('next');
    } else {
      setDirection('prev');
    }
    setStep(stepIndex);
  };

  return (
    <>
      <div className="App">
        <Card
          image={tutorialData[step].image}
          title={tutorialData[step].title}
          description={tutorialData[step].description}
          backgroundColor={tutorialData[step].backgroundColor}
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
          goToStep={goToStep}
          direction={direction} 
        />
      </div>
    </>
  );
}




