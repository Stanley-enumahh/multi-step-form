import { useState } from "react";

const Data = [
  {
    id: 1,
    name: "orange",
  },
  {
    id: 2,
    name: "mango",
  },
  {
    id: 3,
    name: "rice",
  },
];

export default function Checked() {
  const [checkedItems, setCheckedItems] = useState([]);
  function handleCheck(e) {
    const value = e.target.value;

    if (e.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  }

  function xxx(e) {
    e.preventDefault();
    console.log(checkedItems);
  }
  return (
    <form onSubmit={xxx}>
      {Data.map((item) => (
        <div key={item.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              id=""
              value={item.name}
              onChange={handleCheck}
            />
            {item.name}
          </label>
        </div>
      ))}

      <button onClick={xxx}> submit</button>
    </form>
  );
}
