const express = require("express")
const cors = require("cors")
const bashesRouter = require("./bashes/bashes-router")

const server = express()


server.use(cors())
server.use(express.json())

server.use("/bashes", bashesRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	res.status(500).json({
		message: "Something went wrong",
	})
})



module.exports = server