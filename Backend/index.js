import express from 'express';

const app = express();

const port = process.env.PORT || 3005

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "mahabharta",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKPjZETBZoZhbgULOne_2SwWbh4qhOn54Rg&usqp=CAU"
        },
        {
            id: 2,
            name: "do epic shit",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAHg82MEDluhrGEg6KAV-mgZAvMa191Seyw&usqp=CAU"
        },
        {
            id: 3,
            name: "rich dad and poor dad",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFjoFir7SrLb3R_lXnoV5oXQcQCf21gkMrw&usqp=CAU"
        },
        {
            id: 4,
            name: "think and grow rich",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreo_5UJndq43Fc_ii26MUWGsPCCmaLahKRw&usqp=CAU"
        },
        {
            id: 15,
            name: "rework",
            image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61GFc+k-5PL._AC_UF350,350_QL50_.jpg"
        },
    ]

    //http://localhost:3000/api/products?search=think

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return; // need to exit the application otherwise it will crash the application      
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
