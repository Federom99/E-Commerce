import ReactDOM from "react-dom/client";
import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSearch } from "../../redux/actions/product";
import style from "./nav.module.css";
import { Image, Liauto, Ulauto } from "./style";

function Search() {
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]); // igual que el filtered
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false); // showSuggestions
  const [value, setValue] = useState("");
  const data = useSelector((state) => state.product.allProducts);

  const handleChange = (e) => {
    const query = e.target.value;

    const filterSuggestions = data.filter(
      (suggestion) =>
        suggestion.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
    setValue(e.target.value);
    setSuggestions(filterSuggestions);
    setSuggestionIndex(0);
    setSuggestionsActive(true);
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionIndex(0);
    setSuggestionsActive(false);
    const input = document.querySelector("input");
    input.focus();
  };

  const handleKeyDown = (e) => {
    // Se presiona la flecha arriba
    if (e.KeyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    //  Se presiona la flecha abajo
    else if (e.KeyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // Se presiona la tecla enter
    else if (e.KeyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
      const input = document.querySelector("input");
      input.focus();
    }
  };

  const Suggestions = () => {
    // suggestions.length ?
    return (
      <Ulauto>
        {suggestions.map((suggestion, index) => {
          const result = index === suggestionIndex ? "true" : "false";
          return (
            <Liauto result={result} key={suggestion.id} onClick={handleClick}>
              <Image src={suggestion.imagen} />
              <p>{suggestion.nombre}</p>
            </Liauto>
          );
        })}
      </Ulauto>
    );
    // : (
    //   <div>
    //     <span
    //       role="img"
    //       aria-label="tear emoji"
    //       style={{ position: "relative" }}
    //     >
    //       😪
    //     </span>{" "}
    //     <em>Lo Siento no hay sugerencias! </em>
    //   </div>
    // );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== "") dispatch(getProductsSearch({ name: value }));
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={style.searchbar_input}
              // maxLength="2048"
              // name="q"
              // autoCapitalize="off"
              // autoComplete="off"
              // title="Search"
              // role="combobox"
              placeholder="Buscar ..."
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            {suggestionsActive && value && <Suggestions />}
          </form>
        </div>

        <div className={style.searchbar_right}>
          {/* <svg
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
          </svg> */}
        </div>
      </div>
    </div>
  );
}

export default Search;
