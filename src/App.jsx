import { useState } from "react";
import "./App.css";
import FormStep1 from "./components/formStep1";
import FormStep2 from "./components/formStep2";
import FormStep3 from "./components/formStep3";
import FormStep4 from "./components/formStep4";
import LastPage from "./components/lastPage";

export default function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [position, setPosition] = useState(false);
  const [value, setValue] = useState("monthly");
  const [checkedAddOns, setcheckedAddOns] = useState([]);

  function handleCheckAddOn(item) {
    setcheckedAddOns((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    if (checkedAddOns.length > 2) return;
    if (checkedAddOns.length < 1) return;
  }

  function handleSelectPLan(plan) {
    setSelectedPlan(plan);
  }

  function handleSubmitForm3(e) {
    e.preventDefault();
    setCount((c) => c + 1);
    if (checkedAddOns.length < 1) {
      setCount(3);
    }
  }
  function handleSubmit1(e) {
    e.preventDefault();
    setCount((c) => c + 1);
    ErrorMessage();
  }
  function handleSubmit2() {
    setCount((c) => c + 1);
    if (!selectedPlan) {
      setCount(2);
    }
  }
  function handleSubmit3() {
    setCount((c) => c + 1);
  }
  function ErrorMessage() {
    if (!name) {
      setCount(1);
      setErrorName(true);
    }
    if (!email) {
      setCount(1);
      setErrorEmail(true);
    }
    if (!number) {
      setCount(1);
      setErrorNumber(true);
    }
  }

  function handlePrev() {
    setCount((c) => c - 1);
  }

  return (
    <div className="w-full justify-center flex items-center bg-blue-50 h-screen">
      <div className="w-full md:w-[60%] h-full md:h-[85%] rounded-lg md:bg-white p-0 md:p-4 flex flex-col md:flex-row items-center md:justify-between relative">
        <StepsDisplay count={count} />

        {count === 1 ? (
          <FormStep1
            count={count}
            handleSubmit1={handleSubmit1}
            name={name}
            number={number}
            email={email}
            setEmail={setEmail}
            setName={setName}
            setNumber={setNumber}
            errorName={errorName}
            errorEmail={errorEmail}
            errorNumber={errorNumber}
          />
        ) : count === 2 ? (
          <FormStep2
            handleSubmit2={handleSubmit2}
            handlePrev={handlePrev}
            handleSelectPLan={handleSelectPLan}
            selectedPlan={selectedPlan}
            position={position}
            value={value}
            setValue={setValue}
            setPosition={setPosition}
            setSelectedPlan={setSelectedPlan}
          />
        ) : count === 3 ? (
          <FormStep3
            handleSubmit3={handleSubmit3}
            handlePrev={handlePrev}
            handleSubmitForm3={handleSubmitForm3}
            handleCheckAddOn={handleCheckAddOn}
            checkedAddOns={checkedAddOns}
            value={value}
          />
        ) : count === 4 ? (
          <FormStep4
            handleSubmit3={handleSubmit3}
            handlePrev={handlePrev}
            value={value}
            selectedPlan={selectedPlan}
            checkedAddOns={checkedAddOns}
            setCount={setCount}
          />
        ) : (
          <LastPage />
        )}
      </div>
    </div>
  );
}

function StepsDisplay({ count }) {
  return (
    <div className="h-[200px] md:h-full sidebar w-full md:w-[30%] md:rounded-xl">
      <ul className="flex flex-row md:flex-col justify-center gap-7 md:ml-[30px] mt-[40px]">
        <li className=" text-white text-xs flex flex-row gap-4 items-center">
          <p
            className={` ${count === 1 && "bg-blue-300 text-black border-none"}
            } px-4 py-[11px] text-xs flex items-center justify-center rounded-full border border-white font-bold`}
          >
            1
          </p>
          <span className="hidden md:flex flex-col gap-1">
            <p className="text-neutral-300">STEP 1</p>
            <p className="font-bold uppercase">YOUR INFO</p>
          </span>
        </li>

        <li className=" text-white text-xs flex flex-row gap-4 items-center">
          <p
            className={` ${count === 2 && "bg-blue-300 text-black border-none"}
            } px-4 py-[11px] text-xs flex items-center justify-center rounded-full  border border-white font-bold`}
          >
            2
          </p>
          <span className="hidden md:flex flex-col gap-1">
            <p className="text-neutral-300">STEP 2</p>
            <p className="font-bold uppercase">select plan</p>
          </span>
        </li>
        <li className=" text-white text-xs flex flex-row gap-4 items-center">
          <p
            className={` ${count === 3 && "bg-blue-300 text-black border-none"}
            } px-4 py-[11px] text-xs flex items-center justify-center rounded-full  border border-white font-bold`}
          >
            3
          </p>
          <span className="hidden md:flex flex-col gap-1">
            <p className="text-neutral-300">STEP 3</p>
            <p className="font-bold uppercase">add-ons</p>
          </span>
        </li>
        <li className=" text-white text-xs flex flex-row gap-4 items-center">
          <p
            className={` ${count === 4 && "bg-blue-300 text-black border-none"}
            } px-4 py-[11px] text-xs flex items-center justify-center rounded-full  border border-white font-bold`}
          >
            4
          </p>
          <span className="hidden md:flex flex-col gap-1">
            <p className="text-neutral-300">STEP 4</p>
            <p className="font-bold uppercase">summary</p>
          </span>
        </li>
      </ul>
    </div>
  );
}
