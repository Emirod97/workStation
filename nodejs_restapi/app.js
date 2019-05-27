const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const cors = require('cors');



app.use(cors({origin: '*'}));

app.use(morgan('short'))

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password1?',
    database: 'wstation'
})

app.get('/data/:id', (req, res) => {
    console.log("Fetching data with id: " + req.params.id)
    const userId = req.params.id
    const queryString = 'SELECT * FROM data WHERE id_sensor = ?'

    connection.query(queryString, [userId], (err, rows, fields) => {

        if (err) {
            console.log("Failed to query users:" + err)
            res.sendStatus(500)
            return
        }
        res.json(rows)

    })
})

app.get("/", (req, res) => {
    console.log("responding to root route")
    res.send("Server listening")
})

app.get('/data', (req, res) => {
    console.log("Fetching all data")
   // const queryString = 'SELECT * FROM data'

   const queryString = 'SELECT tt.*FROM data tt INNER JOIN (SELECT id_sensor, MAX(data_date) AS MaxDateTime FROM data  GROUP BY id_sensor) groupedtt   ON tt.id_sensor = groupedtt.id_sensor AND tt.data_date = groupedtt.MaxDateTime ORDER BY id_sensor ASC'

    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query users:" + err)
            res.sendStatus(500)
            return
        }
        res.json(rows)

    })
})

app.listen(3000, () => {
    console.log("server is listening on port 3000...")

})
