import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1);
    const [isClosed, setIsClosed] = useState(false);

    function incrementStep() {
        if (step !== 3) {
            setStep(step + 1);
        }
    }

    function decrementStep() {
        if (step !== 1) {
            setStep(step - 1);
        }
    }

    return(
        <>
            <p onClick={() => setIsClosed(!isClosed)} className='close'>&times;</p>
            {!isClosed && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>

                    <p className="message">Step {step}: {messages[step-1]}</p>

                    <div className="buttons">
                        <button onClick={decrementStep} className={step === 1 ? 'disabled' : 'active'}>Previous
                        </button>
                        <button onClick={incrementStep} className={step === 3 ? 'disabled' : 'active'}>Next
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
