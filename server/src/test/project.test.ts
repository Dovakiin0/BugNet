import supertest from "supertest";
import app from "../config";
import prisma, { Project } from "../helper/prismaClient";

describe("Project Controller", () => {
  let project: Project;
  beforeAll(async () => {
    await prisma.project.deleteMany();
    project = await prisma.project.create({
      data: {
        title: "Test Project",
        description: "Test Project Description",
      },
    });
  });

  afterAll((done) => {
    done();
  });

  it("Should fetch all projects", async () => {
    const res = await supertest(app).get("/api/v1/projects");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Should fetch a project by id", async () => {
    const res = await supertest(app).get(`/api/v1/projects/${project.id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Test Project");
    expect(res.body.description).toBe("Test Project Description");
  });

  it("Should create a projects", async () => {
    const res = await supertest(app).post("/api/v1/projects").send({
      title: "Test Project 1",
      description: "Test Project Description 1",
    });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test Project 1");
    expect(res.body.description).toBe("Test Project Description 1");
  });

  it("Should update a projects", async () => {
    const res = await supertest(app)
      .put(`/api/v1/projects/${project.id}`)
      .send({
        title: "Test Project 1",
        description: "Test Project Description 1",
      });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Test Project 1");
    expect(res.body.description).toBe("Test Project Description 1");
  });

  it("Should delete a projects", async () => {
    const res = await supertest(app).delete(`/api/v1/projects/${project.id}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Delete Successfull");
  });
});
