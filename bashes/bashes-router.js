const express = require("express")
const Bashes = require("./bashes-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Bashes.find())
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const bash = await Bashes.findById(req.params.id)
        if(!bash) {
            return res.status(404).json({
                message: "Bash not found",
            })
        }

        res.json(bash)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const bash = await Bashes.create(req.body)
        res.status(201).json(bash)
    } catch (err) {
        next(err)
    }
})

module.exports = router