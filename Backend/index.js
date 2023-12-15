import express from 'express';

const app = express();

const port = process.env.PORT || 3000

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            bookName: "Mahabharta",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKPjZETBZoZhbgULOne_2SwWbh4qhOn54Rg&usqp=CAU"
        },
        {
            id: 2,
            bookName: "DO EPIC SHIT",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAHg82MEDluhrGEg6KAV-mgZAvMa191Seyw&usqp=CAU"
        },
        {
            id: 3,
            bookName: "Rich Dad and Poor Dad",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFjoFir7SrLb3R_lXnoV5oXQcQCf21gkMrw&usqp=CAU"
        },
        {
            id: 4,
            bookName: "Think and Grow Rich",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreo_5UJndq43Fc_ii26MUWGsPCCmaLahKRw&usqp=CAU"
        },
        {
            id: 15,
            bookName: "Rework",
            image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61GFc+k-5PL._AC_UF350,350_QL50_.jpg"
        },
    ]

    setTimeout(() => {
        res.send(products);
    }, 3000);

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});