import { motion } from "framer-motion";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import useFetch from "../../../../hooks/get";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function StatisticPage() {

    const { data: finishedOffers } = useFetch("/api/offer/get-all-finish-offer");
    const { data: users } = useFetch("/api/user");

    const chartData = {
        labels: users?.map(user => user.name) || [],
        datasets: [
            {
                label: 'Bitirilen İşler',
                data: users?.map(user => finishedOffers?.filter(offer => offer.userId === user.id).length) || [],
                borderColor: '#4C9EBD',
                backgroundColor: 'rgba(76, 158, 189, 0.2)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white p-8 min-h-screen"
        >
            <h1 className="text-2xl font-bold text-center mb-12">İstatistikler</h1>

            <div className="mt-12">
                <h2 className="text-xl font-semibold text-center mb-6">Kullanıcıların Bitirdiği İşler Grafiği</h2>
                <div className="bg-zinc-300 p-6 rounded-xl shadow-lg">
                    <Line data={chartData} options={{
                        responsive: true,
                        plugins: {
                            legend: { position: 'top' },
                            tooltip: { mode: 'index', intersect: false },
                        },
                        scales: {
                            x: { title: { display: true, text: 'Kullanıcılar', color: '#272727' } },
                            y: { title: { display: true, text: 'Bitirilen İş Sayısı', color: '#272727' } },
                        },
                    }} />
                </div>
            </div>
        </motion.div>
    );
}
