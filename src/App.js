import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(0);

    function incrementStep() {
        if (step !== 2) {
            setStep(step + 1);
        }
    }

    function decrementStep() {
        if (step !== 0) {
            setStep(step - 1);
        }
    }

    return(
      <div className="steps">
          <div className="numbers">
              <div className={`${step === 0 ? 'active' : null}`}>1</div>
              <div className={`${step === 1 ? 'active' : null}`}>2</div>
              <div className={`${step === 2 ? 'active' : null}`}>3</div>
          </div>

          <p className="message">{messages[step]}</p>

          <div className="buttons">
              <button onClick={decrementStep} style={{backgroundColor:'#7950F2', color:'#fff'}}>Previous</button>
              <button onClick={incrementStep} style={{backgroundColor:'#7950F2', color:'#fff'}}>Next</button>
          </div>
      </div>
  )
}
