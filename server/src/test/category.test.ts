import supertest from "supertest";
import app from "../config";
import prisma, { Category, Project } from "../helper/prismaClient";

describe("Categories", () => {
  let project: Project;
  let category: Category;
  let token: string;

  beforeAll(async () => {
    const res = await supertest(app).post("/api/v1/auth/register").send({
      email: "email@email.com",
      password: "pwdpwd",
      username: "Dovakiin0",
    });
    token = res.body.token;
  });

  beforeEach(async () => {
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

  afterEach(async () => {
    await prisma.category.deleteMany();
    await prisma.project.deleteMany();
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
  });

  describe("POST /categories", () => {
    it("Should create and add to project", async () => {
      const res = await supertest(app)
        .post(`/api/v1/categories/${project.id}`)
        .send({
          title: "Test Category 1",
        })
        .set("Authorization", `Bearer ${token}`);
      expect(res.status).toBe(201);
      expect(res.body.title).toBe("Test Category 1");
    });
  });

  describe("PUT /categories/:id", () => {
    it("Should update a category", async () => {
      const res = await supertest(app)
        .put(`/api/v1/categories/${category.id}`)
        .send({
          title: "Test Category 2",
        })
        .set("Authorization", `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body.title).toBe("Test Category 2");
    });
  });

  describe("DELETE /categories/:id", () => {
    it("Should delete a category", async () => {
      const res = await supertest(app)
        .delete(`/api/v1/categories/${category.id}`)
        .set("Authorization", `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Delete Successfull");
    });
  });
});
