"use client"
import { BodyCalc } from "./Components/BodyCalc/BodyCalc";
import { Display } from "./Components/Display/display";
import { Keyboard } from "./Components/Keyboard/keyboard";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
          <BodyCalc/>
    </div>
  );
}
