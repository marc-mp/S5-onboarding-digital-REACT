
import { useEffect, useState } from 'react';
import Indicador from './Indicador.jsx';

export default function Card({ image, title, description, nextStep, prevStep, backgroundColor, step, direction, goToStep }) {
  
  const [imageClass, setImageClass] = useState('') // lo usamos para cambiar la class de la imagen y poder usar una animacion o otra segun la class

  //segun sea una direccion o otra, setImageClass modifica la claas para indicar en que direccion debe ir el slide 
  useEffect(() => {
    if (direction == 'next') {
      setImageClass('slide-out-left');
      setTimeout(() => {
        setImageClass('slide-in-right');
      }, 200);
    } else if (direction == 'prev') {
      setImageClass('slide-out-right');
      setTimeout(() => {
        setImageClass('slide-in-left');
      }, 200);
    }
  }, [step]);

  //estilos de la Card con Tailwind, usando un componente Card de DaisyUI
  return (
    <section className="flex justify-center py-20">
      <div className="card bg-white w-96 rounded-3xl">
        <div className="card-header rounded-t-3xl overflow-hidden" style={{ backgroundColor }}>
          <img src={image} alt={title} className={imageClass} />
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-black">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="flex inline-flex justify-between">
          <Indicador totalSteps={[1, 2, 3]} step={step} goToStep={goToStep}   />
          <div className="card-footer items-center h-20 me-5">
            {step > 0 ? (
              <button onClick={prevStep} className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
            ) : null}
            {step < 2 ? (
              <button onClick={nextStep} className="btn btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
