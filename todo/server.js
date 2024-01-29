// import dependencies
const express = require("express")

// Create a new express application object
const app = express()

// Array for Todos
const todos = []

//middleware
app.use("/static", express.static("static"))
app.use(express.urlencoded({extended: true}))

//Routes
app.get("/test", (req, res) => {
    res.send("Hello")
})

app.get("/", (req, res) => {
    res.render("index.pug", {
        name: "Antonio De Lavalle",
        todos: todos
    })
})

app.post("/", (req, res) => {
    // push new todo into array
    todos.push(req.body)
    // redirect back to main page (refresh page)
    res.redirect("/")
})

// run your application, so it listens on port 3000
app.listen(3000, () => {
    console.log("Server is Listening on port 3000")
})