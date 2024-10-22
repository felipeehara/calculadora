export const Keyboard = () => {
    return (
                <div className="flex flex-row justify-center items-center bg-orange-800 w-full h-full">
                    <div className="flex flex-row h-full bg-black w-full">
                        <div className="flex flex-col">
                            <ButtonOperators keyOperator={'+'}/>
                            <ButtonNumbers keyNumber={7}/>
                            <ButtonNumbers keyNumber={4}/>
                            <ButtonNumbers keyNumber={1}/>
                            <ButtonNumbers keyNumber={0}/>
                        </div>
                        <div className="flex flex-col">
                            <ButtonOperators keyOperator={'-'}/>
                            <ButtonNumbers keyNumber={8}/>
                            <ButtonNumbers keyNumber={5}/>
                            <ButtonNumbers keyNumber={2}/>
                            <ButtonOperators keyOperator={'.'}/>
                        </div>
                        <div className="flex flex-col">
                            <ButtonOperators keyOperator={'X'}/>
                            <ButtonNumbers keyNumber={9}/>
                            <ButtonNumbers keyNumber={6}/>
                            <ButtonNumbers keyNumber={3}/>
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
       
    );
}

interface keyProps {
    keyNumber: number;
}
export const ButtonNumbers = ({keyNumber}: keyProps) => {
    return (
        <button className="bg-blue-700 p-5 text-white m-1">{keyNumber}</button>
    );
}

interface keyOperatorProps {
    keyOperator: string;
}
export const ButtonOperators = ({keyOperator}: keyOperatorProps) => {
    return (
        <button className="bg-gray-600 p-5 text-white m-1">{keyOperator}</button>
    );
}


export const ButtonEqual = () => {

    return (
        <button className="bg-orange-500 p-5 text-white m-1 h-[280px]">=</button>
    );
}