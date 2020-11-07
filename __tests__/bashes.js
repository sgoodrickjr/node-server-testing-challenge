const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("bashes integration tests", () => {
    it("gets a list of bashes", async () => {
        const res = await supertest(server).get("/bashes")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(2)
        expect(res.body[0].title).toBe("Steve's Wild Bash")
    })

    it("gets a single bash by ID", async () => {
        const res = await supertest(server).get("/bashes/2")
    })

    it("returns an error for a bash that doesn't exist", async () => {
        const res = await supertest(server).get("/bashes/100")
        expect(res.statusCode).toBe(404)
    })

    it("creates a new bash", async () => {
        const res = await supertest(server)
            .post("/bashes")
            .send({ title: "test" })
        // expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        // expect(res.body.title).toBe("test")
        // we don't know exactly what the new ID will be, just make sure something was generated
        // expect(res.body.id).toBeDefined()
    })
})