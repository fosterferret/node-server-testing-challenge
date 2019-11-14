const request = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("[GET] / endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    test("shoult return 200 OK", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });
  });
});

describe("[GET] /countries", () => {
  it("should return json", async () => {
    const response = await request(server).get("/countries");
    expect(response.type).toMatch(/json/i);
  });
});
