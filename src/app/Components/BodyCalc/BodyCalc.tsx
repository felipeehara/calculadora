import { Display } from "../Display/display";
import { Keyboard } from "../Keyboard/keyboard";

export const BodyCalc = () => {
    return (
        <div className="flex justify-center items-center flex-col bg-lime-300 w-72 rounded-xl h-auto">
          <Display/>
          <Keyboard/>
        </div>
    );
}
