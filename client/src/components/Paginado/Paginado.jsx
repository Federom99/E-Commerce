import React, { useState } from "react";
import estilos from "./Paginado.module.css";
import {
  MdOutlineLastPage,
  MdOutlineFirstPage,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { Arrow, Final, NumeroPaginas, Principio } from "./style";

export default function Paginado({
  cantidad,
  allProducts,
  paginado,
  paginaActual,
}) {
  const numeros = [];
  const [nroPagina, setNroPagina] = useState(1);
  const cantTotal = Math.ceil(allProducts.length / cantidad);

  for (let i = 1; i <= cantTotal; i++) {
    numeros.push(i);
  }

  function paginadoHandler(n) {
    if (n < 1 || n > cantTotal) return;
    paginado(n);
    setNroPagina(n);
  }

  return (
    <div className={estilos.PaginadoDiv}>
      {/* <h1>Pagina: {paginaActual}</h1> */}
      <div id={estilos.contenedorBotones}>
        <Principio
          className={estilos.principio}
          name="Principio"
          onClick={() => paginadoHandler(1)}
        >
          <MdOutlineFirstPage />
        </Principio>
        <Arrow
          className={estilos.botones}
          name="Prev"
          onClick={() => paginadoHandler(paginaActual - 1)}
        >
          <MdArrowBackIos />
        </Arrow>
        {numeros?.map((n, i) => {
          if (n > paginaActual + 2 || n < paginaActual - 2) {
            return;
          } else {
            return (
              <NumeroPaginas
                className={
                  paginaActual === n ? 'paginaActual' : estilos.botones
                }
                key={i}
                onClick={() => paginadoHandler(n)}
              >
                {n}
              </NumeroPaginas>
            );
          }
        })}
        <Arrow
          className={estilos.botones}
          name="Next"
          onClick={() => paginadoHandler(paginaActual + 1)}
        >
          <MdArrowForwardIos />
        </Arrow>
        <Final
          name="Final"
          onClick={() => paginadoHandler(cantTotal)}
        >
          <MdOutlineLastPage />
        </Final>
      </div>
    </div>
  );
}
