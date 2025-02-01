//importar chaves do posgrat, e configuar o express
const keys = require("./keys")

//Express aplication setup
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors") //para usar cross scripting

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Potgres client setup
const { Pool } = require("pg")
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
})

//evento de conexão com potgres
pgClient.on("connect", client => {
    client
        .query("CREATE TABLE IF NOT EXISTS values (number INT)")
        .catch(err => console.log("PG ERROR", err))
})

//Express route definitions
app.get("/", (req, res) => {
    res.send("HI🤩")
})

app.get("/values/all", async (req, res) => {
    const values = await pgClient.query("SELECT * FROM values")
    res.send(values)
})

app.post("/values", async (req, res) => {
    if(!req.body.value) res.send({ working: false })

    pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value])

    res.send({ working: true })
})

app.listen(5000, (err) => {
    console.log("Listening😉")
})