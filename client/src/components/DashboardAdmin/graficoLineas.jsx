import { useMemo } from "react";
import { getPedidos } from '../../redux/actions/checkout';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import './graficoBarras.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LineChart() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPedidos());
    }, [])

    const pedidos = useSelector((state) => state.checkout.pedidos);
    console.log(pedidos)
    console.log(pedidos.map(p => p.fecha.substring(0, 10)))
    // console.log(pedidos.map(e => e.))

    const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5, 7];
    const labels = pedidos.map(p => p.fecha.substring(0, 10));

    const options = {
        fill: true,
        responsive: true,
        scales: {
            y: {
                min: 0,
            },
        },
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
                    label: "Total Ventas",
                    data: scores,
                    tension: 0.3,
                    borderColor: "rgb(75, 192, 192)",
                    pointRadius: 6,
                    pointBackgroundColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.3)",
                },
            ],
            labels,
        };
    }, []);

    return (
    <div className="grafico">
        <Line data={data} options={options} />
    </div>
    )
}