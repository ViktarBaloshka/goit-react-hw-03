import { useId } from "react";
import clsx from "clsx";
import s from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const inputId = useId();
  const handleChange = (e) => {
    onFilter(e.target.value);
  };
  return (
    <div className={clsx(s.searchBox)}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        id={inputId}
        className={clsx(s.searchBoxInput)}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
