import { useState } from 'react';
import './index.scss';

function App() {
  const [clickClose, setClickClose] = useState(true);
  const [count, setCount] = useState(0);
  const cntAdd = () => {
    setCount((newCount) => newCount + step);
  }
  const cntMinus = () => {
    setCount((newCount) => newCount - step);
  }
  const [step, setStep] = useState(1);
  const skipStepForward = () => {
    setStep((addStep) => addStep + 1);
    setStep((addStep) => addStep + 1);
  }
  const skipStepBackward = () => {
    setStep((minusStep) => minusStep - 1);
    setStep((minusStep) => minusStep - 1);
  }

  // DATE   
  const date = new Date();
  // IN ORDER TO SET THE CURRENT DATE AND UPDATE THE CURRENT WE FIRST SET DATE AND THEN WE UPDATE THE CURRENT DATE WITH THE INCREASE IN NUMBER OF COUNTS  
  date.setDate(date.getDate() + count);
  // console.log(date);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'}}>
        <button style={{width: '120px', height: '40px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}} onClick={() => {setClickClose((isClicked) => !isClicked)}}>close &times;</button>
      </div>
      { clickClose &&
      <div className="main-container">
        <div className='date-conatiner'>
          <div className='steps-container'>
            <button type='button' onClick={skipStepForward} className='btn'>plus two</button>
            <span>step {step}</span>
            <button type='button' onClick={skipStepBackward} className='btn'>minus two</button>
          </div>
          <div className='count-container'>
            <button type='button' onClick={cntAdd} className='btn'>plus</button>
            <span>count {count}</span>
            <button type='button' onClick={cntMinus} className='btn'>minus</button>
          </div>
          <div className='date-container'>
            {
            count === 0 ? "Today" : 
            count > 0 ? `${count} Day from today` : 
            `${Math.abs(count)} Days ago was`} : 
            {date.toDateString()
            }
          </div>
        </div>
        </div>
      }
    </>
  );
}

export default App; 