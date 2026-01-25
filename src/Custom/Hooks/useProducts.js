import axios from "axios";
import { useEffect, useState } from "react";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://docs.google.com/spreadsheets/d/1p1-NvOasWPM-Lr-LHuUtMwI3tK_TGOBsA7ICrHj71_M/gviz/tq?tqx=out:json",
                    { timeout: 50000 } // Set a timeout of 5 seconds
                );
                const json = JSON.parse(response.data.substring(47).slice(0, -2));
                const rows = json.table.rows;

                const parsed = rows.map(r => ({
                    name: r.c[0]?.v,
                    weight: r.c[1]?.v || 0,
                    price: r.c[2]?.v || 0,
                    description: r.c[3]?.v || "",
                    image: r.c[4]?.v
                }));

                groupByProduct(parsed);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    function groupByProduct(products) {
        const finalGroup = [];

        for (const product of products) {
            const { name } = product;
            if (finalGroup.find((group) => group.name === name)) {
                const group = finalGroup.find((group) => group.name === name);
                group.weightPrice.push({
                    weight: product.weight,
                    price: product.price,
                });
                group.images.push(product.image);
            } else {
                const group = {
                    name: product.name,
                    weightPrice: [],
                    description: product.description || "",
                    images: [],
                };
                group.weightPrice.push({
                    weight: product.weight,
                    price: product.price,
                });
                group.images.push(product.image);
                finalGroup.push(group);
            }
        }
        setProducts(finalGroup);
    }

    return { products, loading };
}