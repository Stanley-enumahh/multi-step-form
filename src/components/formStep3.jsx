import Button from "./button";
import ButtonPrev from "./buttonPrev";

const dataAddOns = [
  {
    name: "Online service",
    info: " Access to multiplayer games",
    price: 1,
    priceYr: 10,
  },
  {
    name: " Larger storage",
    info: "  Extra 1TB of cloud save",
    price: 2,
    priceYr: 20,
  },
  {
    name: " Customizable Profile",
    info: "Custom theme on your profile",
    price: 2,
    priceYr: 20,
  },
];

export default function FormStep3({
  handlePrev,
  handleSubmitForm3,
  itemChecked,
  setItemChecked,
  handleCheckAddOn,
  checkedAddOns,
  value,
}) {
  return (
    <div className="flex flex-col bg-white px-5 py-8 gap-7 w-[90%] md:w-[50%] md:static absolute top-[120px] md:mr-[70px] md:rounded-none rounded-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Pick add-ons</h1>
        <p className="text-gray-500 text-sm">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <form onSubmit={handleSubmitForm3} className="flex flex-col gap-4">
        {dataAddOns.map((AddOn) => (
          <label
            key={AddOn.name}
            className="w-full h-[70px] text-xs flex justify-between flex-row p-5 rounded-xl border border-blue-700"
          >
            <div className="flex flex-row gap-4 items-center">
              <input
                type="checkbox"
                name=""
                id={AddOn.name}
                value={AddOn.name}
                checked={checkedAddOns.includes(AddOn)}
                onChange={() => handleCheckAddOn(AddOn)}
              />
              <div className="flex flex-col">
                <p className="text-sm text-blue-900 font-bold">{AddOn.name}</p>
                <p className="text-gray-400">{AddOn.info}</p>
              </div>
            </div>
            <div className="text-blue-900">
              +$
              {value === "monthly"
                ? Number(AddOn.price)
                : Number(AddOn.priceYr)}
              /mo
            </div>
          </label>
        ))}
      </form>
      <div className="flex flex-row justify-between w-full mt-[170px] md:mt-[30px]">
        <ButtonPrev onClick={handlePrev}>Go back</ButtonPrev>
        <Button onClick={handleSubmitForm3}>Next Step</Button>
      </div>
    </div>
  );
}
