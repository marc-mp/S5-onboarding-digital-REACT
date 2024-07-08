
import styled from 'styled-components'  //usamos styled-components para hacer los estilos del indicador

export default function Indicator({ totalSteps, step, goToStep  }) {

  const IndicadorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `
  
  //usamos condicional ternario para indicar estilos del bton activo y de los otros 2 botones que no estan activos
  const StepIndicator = styled.button`  
    width: ${({ active }) => (active ? '30px' : '10px')}; 
    height: 10px;
    margin: 0 5px;
    border-radius: ${({ active }) => (active ? '20%' : '50%')};
    background-color: ${({ active }) => (active ? 'black' : 'gray')};
  `

  return (
      <IndicadorContainer>
        {totalSteps.map((_, index) => (
          <StepIndicator
            key={index}
            active={index === step}
            onClick={() => goToStep(index)}
            className='animate-pulse' // animacion del indicador (tailwind animate)
          />
        ))}
    </IndicadorContainer>
    );
}

