import { useEffect, useState } from "react";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            "https://docs.google.com/spreadsheets/d/1wr_fR1Wl131gZtlcNlWjKzFnXciqEJJ63PyivkTjqfQ/gviz/tq?tqx=out:json"
        )
            .then(res => res.text())
            .then(text => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
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
            });
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