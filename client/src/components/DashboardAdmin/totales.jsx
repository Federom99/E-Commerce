import React from "react";
import { BsCart2 } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CgArrowsExchangeV } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getUsuarios, getPedidos } from "../../redux/actions/checkout";
import { useEffect } from 'react';
import './totales.css';

import { H2, H4, Icon, Milestone, TotalesStyled } from "./styles";
import { getProducts } from "../../redux/actions/product";
export default function Totales() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUsuarios());
        dispatch(getPedidos());
        // dispatch(getProducts());
      }, [])

    const data = [
        {
            icon: <BsCart2 />,
            title: "Total Ventas",
            value: `$ ${useSelector((state) => state.checkout.pedidos.reduce((acc, el) => acc += el.pago_total, 0))}`,
        },
        {
            icon: <CgArrowsExchangeV />,
            title: "Total Productos",
            value: useSelector((state) => state.product.products.length),
        },
        {
            icon: <FaUser />,
            title: "Total Usuarios",
            value: useSelector((state) => state.checkout.usuarios.length),
        },
        {
            icon: <AiFillPieChart />,
            title: "Totales Pedidos",
            value: useSelector((state) => state.checkout.pedidos.length),
        },
    ];
    return (
        <TotalesStyled>
            {data.map((milestone) => {
                return (
                    <Milestone>
                        <Icon className="icon">{milestone.icon}</Icon>
                        <div className="details">
                            <H4>{milestone.title}</H4>
                            <H2>{milestone.value}</H2>
                        </div>
                    </Milestone>
                );
            })}
        </TotalesStyled>
    );
}