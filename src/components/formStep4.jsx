import ButtonPrev from "./buttonPrev";

export default function FormStep4({
  handlePrev,
  handleSubmit3,
  value,
  selectedPlan,
  checkedAddOns,
  setCount,
}) {
  const totalPlan = checkedAddOns.reduce(
    (total, item) => total + item.price,
    0
  );
  const totalPlanYr = checkedAddOns.reduce(
    (total, item) => total + item.priceYr,
    0
  );

  function handleChange() {
    setCount(2);
  }
  const total = selectedPlan.plan + totalPlan;

  const totalYr = selectedPlan.planYyr + totalPlanYr;

  return (
    <div className="flex flex-col bg-white px-5 py-8 gap-7 w-[90%] md:w-[50%] md:static absolute top-[120px] md:mr-[70px] md:rounded-none rounded-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Finishing up</h1>
        <p className="text-gray-500 text-sm">
          Double-check everything looks OK before confirming
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-blue-50 rounded-md w-full">
        <div className="w-full h-fit flex justify-between flex-row p-5">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col w-full items-start">
                <span className="flex flex-row justify-between items-center w-full ">
                  <div className="flex flex-row gap-2">
                    <p className=" text-blue-900 font-bold capitalize">
                      {selectedPlan.name}
                    </p>
                    <p className=" text-blue-900 font-bold capitalize">
                      ({value})
                    </p>
                  </div>
                  <p className="text-blue-900 font-bold">
                    $
                    {value === "monthly"
                      ? selectedPlan.plan + "/mo"
                      : selectedPlan.planYyr + "/yr"}
                  </p>
                </span>
                <button
                  onClick={handleChange}
                  className="text-blue-900 cursor-pointer font-bold underline"
                >
                  change
                </button>
              </div>
            </div>

            <div className="flex flex-row justify-between border-t border-t-blue-500 w-full py-4">
              <ul className="flex flex-col w-full gap-3">
                {checkedAddOns.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-row w-full justify-between"
                  >
                    <p className="text-xs text-blue-400">{item.name}</p>
                    <p className="text-xs text-blue-800">
                      +${value === "monthly" ? item.price : item.priceYr}/mo
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 flex flex-row justify-between">
        <p className="text-xs text-gray-500">
          Total {value === "(monthly)" ? "per month" : "(per year)"}
        </p>
        <p className="text-lg text-blue-800">
          +${value === "monthly" ? total : totalYr}/mo
        </p>
      </div>
      <div className="flex flex-row justify-between w-full mt-[150px] md:mt-[30px]">
        <ButtonPrev onClick={handlePrev}>Go back</ButtonPrev>
        <button
          onClick={handleSubmit3}
          className="rounded-md text-white py-2 text-sm w-[100px] bg-blue-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
