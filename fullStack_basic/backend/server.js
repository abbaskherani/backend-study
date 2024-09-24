import express from "express";

const app = express();
//jsonformatter website to see the json data in a better way

// app.get('/', (req,res)=>{
//     res.send("Server is ready");

// })

//get a list of 5 jokes

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "1 Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "2 Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "3 Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "4 Why don't scientists trust atoms? Because they make up everything!"
        }

    ]

    res.send(jokes);
})

const port = 3001;

app.listen(port, ()=>{
    console.log('server is running on port ', port);
})