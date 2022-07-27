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
import { GraficoLineas } from './styles';

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
    // const [datos, setDatos] = useState([])
    const [cambio, setCambiar] = useState(true)
    const [ventasAños, setVentasAños] = useState({})
    const [ventasMeses, setVentasMeses] = useState({})

    const pedidos = useSelector((state) => state.checkout.pedidos);

    useEffect(() => {
        dispatch(getPedidos());
    }, [])

    useEffect(() => {
        let obj1 = { 2016: 0, 2017: 0, 2018: 0, 2019: 0, 2020: 0, 2021: 0, 2022: 0 }
        let obj2 = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 }
        let años = pedidos.map(element => element.fecha.substring(0, 10).split("-")[0].trim())
        let meses = pedidos.map(element => element.fecha.substring(0, 10).split("-")[0].trim() == "2022" ? element.fecha.substring(0, 10).split("-")[1].trim() : "")
        meses = meses.filter((e) => e !== "")
        años.forEach(element => { obj1 = { ...obj1, [Number(element)]: obj1[Number(element)] + 1 } });
        meses.forEach(element => { obj2 = { ...obj2, [Number(element)]: obj2[Number(element)] + 1 } });
        setVentasAños(obj1)
        setVentasMeses(obj2)
    }, [pedidos])




    var scores = [6, 5, 5, 5, 3, 4];
    // const labels = [2017, 2018, 2019, 2020, 2021, 2022]

    var labels = ["Ene", "Feb", "Mzo", "Abr", "May", "Jun", "Jul"]
    // const labels = pedidos.map(p => p.fecha.substring(0, 10));

    function cambiar() {
        setCambiar(!cambio)
    }

    cambio ? labels = [2016, 2017, 2018, 2019, 2020, 2021, 2022] : labels = ["Ene", "Feb", "Mzo", "Abr", "May", "Jun", "Jul"]
    cambio ? scores = Object.values(ventasAños) : scores = Object.values(ventasMeses)

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
                label: cambio ? "Total Ventas por Año" : "Total Ventas por Mes 2022",
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
    return (
        <GraficoLineas>
            <div className='ventas'>
                <h1>Ventas</h1>
                <button className="user" onClick={() => cambiar()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                </svg></button>
            </div>
            <Line data={data} options={options} />
        </GraficoLineas>
    )
}