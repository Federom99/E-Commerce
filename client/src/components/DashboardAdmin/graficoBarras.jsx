import React, { useMemo } from "react";
import { getUsuarios } from '../../redux/actions/checkout';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import './graficoLineas.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function BarChart() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsuarios());
        // console.log("me rompo")
    }, [])

    const usuarios = useSelector((state) => state.checkout.usuarios);
    // console.log(usuarios.length)

    const scores = [usuarios.length, usuarios.reduce((acc, el) => acc += el.isAdmin === true, 0), usuarios.reduce((acc, el) => acc += el.bloqueado === true, 0)];
    const labels = ["Usuarios", "Admins", "Bloqueados"];
    const numeros = usuarios.reduce((acc, el) => acc += el.isAdmin === true, 0)
    console.log(numeros)

    const options = {
        fill: true,
        animations: false,
        scales: {
            y: {
                min: 0,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "Mis datos",
                    tension: 0.3,
                    data: scores,
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.3)",
                },
            ],
            labels,
        };
    }, []);

    return (
        <div className="graficoLineal">
            <Bar data={data} options={options} />
        </div>
    );
}