import proIcon from "../assets/images/icon-pro.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import Button from "./button";
import ButtonPrev from "./buttonPrev";

export const planData = [
  {
    name: "Arcade",
    plan: 9,
    planYyr: 90,
    icon: arcadeIcon,
    id: 21,
  },
  {
    name: "Advanced",
    plan: 12,
    planYyr: 120,
    icon: advancedIcon,
    id: 22,
  },
  {
    name: "Pro",
    plan: 15,
    planYyr: 150,
    icon: proIcon,
    id: 23,
  },
];

export default function FormStep2({
  handleSubmit2,
  handlePrev,
  handleSelectPLan,
  selectedPlan,
  position,
  setPosition,
  value,
  setValue,
  setSelectedPlan,
}) {
  function handleToggle() {
    setPosition((p) => !p);
    position ? setValue("monthly") : setValue("yearly");
    setSelectedPlan();
  }

  return (
    <div className="flex flex-col px-6 py-8 gap-7 w-[90%] md:w-[50%] md:static absolute top-[120px] md:mr-[70px] md:rounded-none rounded-lg bg-white">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Select your plan</h1>
        <p className="text-gray-500 text-sm">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <ul className="flex md:flex-row flex-col gap-5 md:gap-4 ">
        {planData.map((plan) => (
          <PlanDesign
            key={plan.id}
            plan={plan}
            handleSelectPLan={handleSelectPLan}
            selectedPlan={selectedPlan}
            value={value}
          />
        ))}
      </ul>
      <div className="w-full bg-slate-100 rounded-lg py-4 md:py-3 flex justify-center items-center">
        {/* toggle button*/}
        <div className="flex flex-row gap-4 items-center ">
          <span
            className={`${
              position === false
                ? "font-semibold text-blue-900"
                : "text-gray-700"
            } `}
          >
            monthly
          </span>
          <div
            onClick={handleToggle}
            className="rounded-xl cursor-pointer flex items-center p-[2px] h-[20px] w-[40px] bg-slate-600"
          >
            <p
              className={`bg-white ${
                position ? "ml-[60%]" : ""
              } rounded-full w-[15px] h-[90%] duration-150 transition-all`}
            ></p>
          </div>
          <span
            className={`${
              position === true
                ? "font-semibold text-blue-900"
                : "text-gray-700"
            } `}
          >
            yearly
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full md:mt-[30px]">
        <ButtonPrev onClick={handlePrev}>Go back</ButtonPrev>
        <Button onClick={handleSubmit2}>Next Step</Button>
      </div>
    </div>
  );
}

function PlanDesign({ plan, handleSelectPLan, selectedPlan, value }) {
  const isSelected = selectedPlan?.id === plan.id;

  return (
    <li
      onClick={() => handleSelectPLan(plan)}
      className={`${
        isSelected && "bg-blue-100"
      } w-full md:w-[150px] hover:bg-gray-100 transition-all duration-150 cursor-pointer hover:border-gray-600 h-[100px] md:h-[140px] justify-start md:justify-between items-center md:items-start gap-4 md:gap-0 border border-gray-400 p-4 flex flex-row md:flex-col rounded-lg`}
    >
      <img src={plan.icon} alt="" className="w-[50px] md:w-[30px]" />
      <div className="flex flex-col gap-1">
        <p className="font-bold md:text-sm">{plan.name}</p>
        <p className="text-sm md:text-xs text-gray-600">
          ${value === "monthly" ? Number(plan.plan) : Number(plan.planYyr)}/mo
        </p>
      </div>
    </li>
  );
}
