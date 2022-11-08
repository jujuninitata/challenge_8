const request = require("supertest")
const app = require("../app/index")
const db = require("../app/models")

it(`it should be give a valid response when users successfully created!`,async() =>{
    const dummyData ={
        name:"rio",
        email:`${Math.random()}@bankbjb.co.id`,
        password:"Bjb2022"
    }
    const createUser = jest.fn(() => dummyData);
    jest.spyOn(db.User, "create").mockImplementation(() => createUser())

    const res = await request(app).post("/v1/auth/register").send(dummyData)
    expect(res.statusCode).toEqual(201);
})
