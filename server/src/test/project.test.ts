import supertest from "supertest";
import app from "../config";
import prisma, { Project, User } from "../helper/prismaClient";
import { hashPassword } from "../helper/util";

describe("Projects", () => {
  let user: User;
  let project: Project;
  let token: string;

  beforeAll(async () => {
    let hashPwd = await hashPassword("pwdpwd");
    user = await prisma.user.create({
      data: {
        username: "Dovakiin0",
        email: "email@email.com",
        password: hashPwd,
      },
    });
    project = await prisma.project.create({
      data: {
        title: "Test Project",
        description: "Test Project Description",
        ownerId: user.id,
      },
    });
    let res = await supertest(app).post("/api/v1/auth").send({
      email: "email@email.com",
      password: "pwdpwd",
    });
    token = res.body.token;
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.project.deleteMany();
  });

  it("GET /projects - Should fetch all projects", async () => {
    const res = await supertest(app)
      .get("/api/v1/projects")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /projects/:id - Should fetch a project by id", async () => {
    const res = await supertest(app)
      .get(`/api/v1/projects/${project.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Test Project");
    expect(res.body.description).toBe("Test Project Description");
  });

  it("POST /projects - Should create a projects", async () => {
    const res = await supertest(app)
      .post("/api/v1/projects")
      .send({
        title: "Test Project 1",
        description: "Test Project Description 1",
        ownerId: user.id,
      })
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test Project 1");
    expect(res.body.description).toBe("Test Project Description 1");
  });

  it("PUT /projects/:id - Should update a projects", async () => {
    const res = await supertest(app)
      .put(`/api/v1/projects/${project.id}`)
      .send({
        title: "Test Project 1",
        description: "Test Project Description 1",
        ownerId: user.id,
      })
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Test Project 1");
    expect(res.body.description).toBe("Test Project Description 1");
  });

  it("DELETE /projects/:id - Should delete a projects", async () => {
    const res = await supertest(app)
      .delete(`/api/v1/projects/${project.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Delete Successfull");
  });
});
