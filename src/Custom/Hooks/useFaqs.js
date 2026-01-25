import axios from "axios";
import { useEffect, useState } from "react";

export function useFaqs() {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://docs.google.com/spreadsheets/d/1NsjBNgvpfv_5Sb2Ex4PSWEp6Q5Kzq5L6z28FTpzyMqA/gviz/tq?tqx=out:json",
                    { timeout: 50000 } // Set a timeout of 5 seconds
                );
                const json = JSON.parse(response.data.substring(47).slice(0, -2));
                const rows = json.table.rows;

                const parsed = rows.slice(1).map(r => ({
                    question: r.c[0]?.v || "",
                    answer: r.c[1]?.v || "",
                }));
                
                setFaqs(parsed);

                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return [ faqs, loading ];
}