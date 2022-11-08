const request = require("supertest")
const app = require("../app");
const db = require("../app/models")
//const SequelizeMock = require("sequelize-mock");

//const DBConnection = new SequelizeMock();

describe('Testing success reponses when hit the endpoint get cars', () => {
    const dummyData = {
                name: "civic",
                price: 100,
                size: "small",
                image: "civiv.png",
                isCurrentlyRented: false
            }
    it(`should be show all data cars`, async () => {
        const getAllCars = jest.fn(() => {
            return {
                cars: dummyData
            }
        });
    
    jest.spyOn(db.Car, "findAll").mockImplementation(() => getAllCars());
    const result = await request(app).get("/v1/cars");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toHaveProperty("cars");
})
});
