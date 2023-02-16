import supertest from "supertest";
import app from "../config";
import prisma, { Category, Project } from "../helper/prismaClient";

describe("Category Controller", () => {
  let project: Project;
  let category: Category;
  beforeAll(async () => {
    await prisma.category.deleteMany();
    await prisma.project.deleteMany();
    // create a project to use in the tests
    project = await prisma.project.create({
      data: {
        title: "Test Project",
        description: "Test Project Description",
      },
    });
    //create a category to use in the tests
    category = await prisma.category.create({
      data: {
        title: "Test Category",
        projectId: project.id,
      },
    });
  });

  afterAll((done) => {
    done();
  });

  it("Should fetch all categories", async () => {
    const res = await supertest(app).get("/api/v1/categories");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Should create and add to project", async () => {
    const res = await supertest(app).post("/api/v1/categories").send({
      title: "Test Category 1",
      projectId: project.id,
    });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test Category 1");
  });

  it("Should update a category", async () => {
    const res = await supertest(app)
      .put(`/api/v1/categories/${category.id}`)
      .send({
        title: "Test Category 2",
        projectId: project.id,
      });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Test Category 2");
  });

  it("Should delete a category", async () => {
    const res = await supertest(app).delete(
      `/api/v1/categories/${category.id}`
    );
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Delete Successfull");
  });
});
