// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { useState } from "react";
import dice from "/icon-dice.svg";
import { useEffect } from "react";

function App() {
  const [adviseNum, setAdviseNum] = useState("");
  const [advise, setAdvise] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdviseNum(data.slip.id);
        setAdvise(data.slip.advice);
      });
  }, []);

  async function handleClick() {
    await fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdviseNum(data.slip.id);
        setAdvise(data.slip.advice);
      });
  }
  return (
    <div className="bg-[#1f2633] font-manrope h-screen  flex flex-col justify-center ">
      <div className="bg-[#303a4a] h-[315px] w-[343px] m-auto rounded-xl justify-evenly p-[24px] flex flex-col items-center relative">
        <h3 className=" text-xs tracking-[0.3rem]  text-[#52ffa8]">
          ADVICE # {adviseNum}
        </h3>
        <div className="text-[#cfe3e8] font-bold text-2xl text-center">
          {advise}
        </div>
        {/* separador  */}
        <div className="  flex flex-row gap-2 justify-center items-center ">
          <hr className="text-[#cfe3e8]  h-1 w-28"></hr>
          <div className="h-5 rounded-md w-[6px] bg-[#cfe3e8]"></div>
          <div className="h-5 rounded-md w-[6px] bg-[#cfe3e8]"></div>
          <hr className="text-[#cfe3e8]  h-1 w-28"></hr>
        </div>
        <button
          onClick={handleClick}
          className="bg-[#52ffa8] hover:shadow-[#52ffa8_0px_0px_30px_0px]  absolute left-[130px] top-[280px] rounded-full w-[80px] aspect-square flex flex-col justify-center items-center"
        >
          <img className="h-8" src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
