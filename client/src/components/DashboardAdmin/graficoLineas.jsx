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
    const [datos, setDatos] = useState([])
    const [cambio, setCambiar] = useState(true)

    useEffect(() => {
        dispatch(getPedidos());
    }, [datos])

    const pedidos = useSelector((state) => state.checkout.pedidos);
    // console.log(pedidos)
    // console.log(pedidos.map(p => p.fecha.substring(0, 10)))
    // console.log(pedidos.map(e => e.))

    var scores = [6, 5, 5, 5, 3, 4];
    // const labels = [2017, 2018, 2019, 2020, 2021, 2022]
    
    var labels = ["Ene", "Feb", "Mzo", "Abr", "May", "Jun", "Jul"]
    // const labels = pedidos.map(p => p.fecha.substring(0, 10));

    function cambiar () {
        setCambiar(!cambio)
        // alert("Grafico")
        console.log(labels)
    }

    cambio ? labels = [2016, 2017, 2018, 2019, 2020, 2021, 2022] : labels = ["Ene", "Feb", "Mzo", "Abr", "May", "Jun", "Jul"]
    cambio ? scores = [12, 10, 10, 10, 6, 8, 21] : scores = [1, 2, 3, 2, 2, 4, 7]
    console.log(cambio)
    

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

    const data = {
        datasets: [
            {
                label: cambio ? "Total Ventas por Año" : "Total ventas por Mes",
                data: scores,
                tension: 0.3,
                borderColor: "rgb(75, 192, 192)",
                pointRadius: 6,
                pointBackgroundColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.3)",
            },
        ],
        labels,
    }

    // const data = useMemo(function () {
    //     return {
    //         datasets: [
    //             {
    //                 label: "Total Ventas",
    //                 data: scores,
    //                 tension: 0.3,
    //                 borderColor: "rgb(75, 192, 192)",
    //                 pointRadius: 6,
    //                 pointBackgroundColor: "rgb(75, 192, 192)",
    //                 backgroundColor: "rgba(75, 192, 192, 0.3)",
    //             },
    //         ],
    //         labels,
    //     };
    // }, []);

    return (
    <div className="grafico">
        <button onClick={() => cambiar()}>Cambiar</button>
        <Line data={data} options={options} />
    </div>
    )
}