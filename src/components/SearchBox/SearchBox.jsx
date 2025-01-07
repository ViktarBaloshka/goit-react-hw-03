import { useState } from "react";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}
