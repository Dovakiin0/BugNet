import supertest from "supertest";
import app from "../index";

import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

describe("Project Controller", () => {
  it("Should fetch all projects", async () => {
    const res = await supertest(app).get("/api/v1/projects");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it.todo("Should fetch a project by id");
  it.todo("Should create a projects");
  it.todo("Should update a projects");
  it.todo("Should delete a projects");
});
