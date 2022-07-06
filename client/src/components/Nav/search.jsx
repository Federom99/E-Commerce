import React from "react";
import { BsSearch } from "react-icons/bs";
import style from "./nav.module.css";

function Search() {
  return (
    <div className={style.searchbar}>
      <div className={style.searchbar_wrapper}>
        <div className={style.searchbar_left}>
          <div className={style.search_icon_wrapper}>
            <span className={style.search_icon}>
              <BsSearch />
            </span>
          </div>
        </div>

        <div className={style.searchbar_center}>
          <div className={style.searchbar_input_spacer}></div>
          <input
            type="text"
            className={style.searchbar_input}
            maxLength="2048"
            name="q"
            autoCapitalize="off"
            autoComplete="off"
            title="Search"
            role="combobox"
            placeholder="Search Google"
          />
        </div>

        <div className={style.searchbar_right}>
          <svg
            className={style.voice_search}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            ></path>
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
            <path
              fill="#fbbc05"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            ></path>
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
