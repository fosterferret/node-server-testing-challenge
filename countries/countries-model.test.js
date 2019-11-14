const Countries = require("./countries-models");
const db = require("../data/db-config");

describe("countries model", () => {
  beforeEach(async () => {
    await db("countries").truncate();
  });

  it("should set environment to testing", () => {
    // eslint-disable-next-line no-undef
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("add country to database", () => {
    it("should increase database length by 1", async () => {
      const records = await db("countries");
      expect(records).toHaveLength(0);

      await Countries.add({ country: "Japan" });

      const countries = await db("countries");
      expect(countries).toHaveLength(1);
    });

    it("should insert country into database", async () => {
      await Countries.add({ country: "Japan" });

      const countries = await db("countries");
      expect(countries[0]).toHaveProperty("country");
    });

    it("should insert a specific country into database", async () => {
      const country = await Countries.add({ country: "Japan" });
      expect(country.country).toBe("Japan");
    });
  });

  describe("remove()", () => {
    it("should remove an added country", async () => {
      const records = await db("countries").insert({ country: "Japan" }, "id");
      expect(records).toHaveLength(1);

      await Countries.remove(1);

      const countries = await db("countries");
      expect(countries).toHaveLength(0);
    });

    it("should show number of countries deleted", async () => {
      await Countries.add({ country: "Japan" });

      const deleted = await Countries.remove(1);
      expect(deleted).toBe(1);
    });
  });
});
