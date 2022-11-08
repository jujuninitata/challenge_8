const request = require("supertest")
const app = require("../app/index")
const db = require("../app/models")

it(`it should be give a valid response when users successfully created!`,async() =>{
    const dummyData ={
        email:"ewang@bankbjb.co.id",
        password:"Bjb2022"
    }
    //const mockFunctionCreateCar = jest.fn(() => dummyData);
    // jest.spyOn(db.car,"handleCreateCar").mockImplementation(() => mockFunctionCreateCar())

    // const res = await request(app).post("/v1/cars").send(dummyData).set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Imp1bml0YSIsImVtYWlsIjoiampheWFudGlAYmFua2JqYi5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjY3MjcwNjA4fQ.069UkJZFVArjZLEXpImL46lX1uI7dfa4shP-OvSY2dU")
    const res = await request(app).post("/v1/auth/login").send(dummyData)
    console.log(res);
    expect(res.statusCode).toEqual(201);
})
