import { useState } from "react";
import { Display } from "../Display/display";

export const Keyboard = () => {

    const [displayValue, setDisplayValue] = useState(0);

    return (
        <div className="flex justify-center items-center flex-col bg-lime-300 w-72 rounded-xl h-auto">
            <Display value={displayValue}/>
                <div className="flex flex-row justify-center items-center bg-orange-800 w-full h-full">
                    

                    <div className="flex flex-row h-full bg-black w-full">
                        
                        <div className="flex flex-col">
                            <ButtonOperators keyOperator={'+'}/>
                            <ButtonNumbers keyNumber={7} onClick={setDisplayValue} />
                            <ButtonNumbers keyNumber={4} onClick={setDisplayValue} />
                            <ButtonNumbers keyNumber={1} onClick={setDisplayValue} />
                            <ButtonNumbers keyNumber={0} onClick={setDisplayValue} />
                        </div>
                        <div className="flex flex-col">
                            <ButtonOperators keyOperator={'-'}/>
                            <ButtonNumbers keyNumber={8} onClick={setDisplayValue} />
                            <ButtonNumbers keyNumber={5} onClick={setDisplayValue} />
                            <ButtonNumbers keyNumber={2} onClick={setDisplayValue} />
                            <ButtonOperators keyOperator={'.'}/>
                        </div>
                        <div className="flex flex-col">
                            <ButtonOperators keyOperator={'X'}/>
                            <ButtonNumbers keyNumber={9} onClick={setDisplayValue} />
                            <ButtonNumbers keyNumber={6} onClick={setDisplayValue} />
                            <ButtonNumbers keyNumber={3} onClick={setDisplayValue} />
                            <ButtonOperators keyOperator={'C'}/>
                        </div>
                    </div>
                    <div className="bg-black h-full w-full flex-grow">
                        <div className="flex flex-col">
                            <ButtonOperators keyOperator={'÷'}/>
                            <ButtonEqual/>
                        </div>
                    </div>
                </div>
        </div>
       
    );
}

interface keyProps {
    keyNumber: number;
}
export const ButtonNumbers = ({ keyNumber, onClick }: keyProps & { onClick: (num: number) => void }) => {
    const handleClickExibir = () => {
        onClick(keyNumber);
    };

    return (
        <button className="bg-blue-700 p-5 text-white m-1" onClick={handleClickExibir}>
            {keyNumber}
        </button>
    );
};

interface keyOperatorProps {
    keyOperator: string;
}
export const ButtonOperators = ({keyOperator}: keyOperatorProps) => {
    return (
        <button className="bg-gray-600 p-5 text-white m-1" >{keyOperator}</button>
    );
}


export const ButtonEqual = () => {

    return (
        <button className="bg-orange-500 p-5 text-white m-1 h-[280px]">=</button>
    );
}