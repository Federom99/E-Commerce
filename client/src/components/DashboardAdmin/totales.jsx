import React from "react";
import { BsCart2 } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
// import { CgArrowsExchangeV } from "react-icons/cg";
import { IoLogoUsd } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import { getUsuarios, getPedidos } from "../../redux/actions/checkout";
import { useEffect } from 'react';
import './totales.css';
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
            icon: <IoLogoUsd />,
            title: "Total Ventas",
            value: `$ ${useSelector((state) => state.checkout.pedidos.reduce((acc, el) => acc += el.pago_total, 0))}`,
        },
        {
            icon: <BsCart2 />,
            title: "Total Productos",
            value: useSelector((state) => state.product.allProducts.length),
        },
        {
            icon: <FaUser />,
            title: "Total Usuarios",
            value: useSelector((state) => state.checkout.usuarios.length),
        },
        {
            icon: <AiFillPieChart />,
            title: "Total Pedidos",
            value: useSelector((state) => state.checkout.pedidos.length),
        },
    ];
    return (
        <div className="milestones">
            {data.map((milestone) => {
                return (
                    <div className="milestone">
                        <div className="icon">{milestone.icon}</div>
                        <div className="details">
                            <h4>{milestone.title}</h4>
                            <h2>{milestone.value}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}