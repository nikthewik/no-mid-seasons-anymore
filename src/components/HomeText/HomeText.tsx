// Libraries
import React from "react";
// Style
import style from "./HomeText.module.css";
// Components
import Title from "../Title/Title";

function HomeText(): React.ReactElement {
  return (
    <div className={style.textContainer}>
      <Title>NO MID SEASONS ANYMORE</Title>
      <p className={style.text}>
        It's the literal translation of an Italian saying which means{" "}
        <i className={style.textItalic}>"things aren't what they used to be"</i>
        .
      </p>
      <p className={style.text}>
        The mid seasons, once marked by gradual climate transitions, are
        disappearing due to <strong>climate change</strong>.
      </p>
      <p className={style.text}>
        This phenomenon causes abrupt shifts between hot summers and harsh
        winters, altering traditional weather patterns and causing environmental
        disasters.
      </p>
      <p className={style.text}>
        The first step in combating the climate crisis is{" "}
        <strong>to be aware of it.</strong>
      </p>
      <p className={style.text}>
        Here you can view some data provided by{" "}
        <a
          className={style.link}
          href="https://global-warming.org"
          target="_blank"
        >
          GlobalWarming.org
        </a>
        :
      </p>
    </div>
  );
}

export default HomeText;
