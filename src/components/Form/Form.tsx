// Libraries
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Context
import { FormContext, MenuContext } from "../../App";
// Style
import style from "./Form.module.css";
// Data
import formOptions from "../../data/arrays/formOptions";
// Helpers
import goToTop from "../../helpers/goToTop";

function Form(): React.ReactElement {
  const menu = useContext(MenuContext);
  const form = useContext(FormContext);

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    form?.setChart(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    goToTop();
    if (menu?.isOpen === true) menu?.toggleMenu();

    navigate(`charts/${form?.value}`, { replace: true });

    form?.setChart("temperature");
  }

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.selectContainer}>
          <select
            className={style.select}
            onChange={handleChange}
            value={form?.value}
          >
            {formOptions.map((option, i) => (
              <option key={i} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button className={style.submitBtn}>VIEW DATA</button>
      </form>
    </div>
  );
}

export default Form;
