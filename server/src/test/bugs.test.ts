import app from "../config";
import prisma, { Project, Bug, Category } from "../helper/prismaClient";
import supertest = require("supertest");
import { verifyJWT } from "../helper/util";

describe("Bugs", () => {
  let project: Project;
  let bug: Bug;
  let token: string;
  let category: Category;

  beforeAll(async () => {
    // register a user
    const res = await supertest(app).post("/api/v1/auth/register").send({
      email: "email@email.com",
      password: "pwdpwd",
      username: "Dovakiin0",
    });
    // get token from response
    token = res.body.token;
    let userId = verifyJWT(token).id; // decode token to get user id

    project = await prisma.project.create({
      data: {
        ownerId: userId,
        title: "test proejct",
        description: "test description",
      },
    });

    bug = await prisma.bug.create({
      data: {
        projectId: project.id,
        title: "test bug",
        description: "test description",
        priority: 0,
        status: "Open",
        openedBy: userId,
      },
    });

    category = await prisma.category.create({
      data: {
        title: "test category",
        projectId: project.id,
      },
    });
  });

  afterAll(async () => {
    await prisma.bug.deleteMany();
    await prisma.project.deleteMany();
    await prisma.user.deleteMany();
  });

  it("GET / - Should get 200 and get all the bugs from a project", async () => {
    const res = await supertest(app)
      .get("/api/v1/bugs/")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /:id - Should get 200 and get a bug from a project", async () => {
    const res = await supertest(app)
      .get(`/api/v1/bugs/${bug.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(bug.id);
  });

  it("POST / - Should get 201 and add a bug to a project", async () => {
    let payload = {
      title: "test bug 1",
      description: "## test description",
      projectId: project.id,
      priority: 0,
      categoryId: category.id,
    };
    const res = await supertest(app)
      .post(`/api/v1/bugs`)
      .set("Authorization", `Bearer ${token}`)
      .send(payload);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe(payload.title);
  });

  it("POST /bulk - Should get 201 and bulk add many bugs to a project", async () => {
    let payload = [
      {
        title: "test bug 101",
        description: "## test description",
        projectId: project.id,
        priority: 0,
        categoryId: category.id,
      },
      {
        title: "test bug 102",
        description: "## test description",
        projectId: project.id,
        priority: 0,
        categoryId: category.id,
      },
    ];
    const res = await supertest(app)
      .post("/api/v1/bugs/bulk")
      .set("Authorization", `Bearer ${token}`)
      .send({ payload });
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Bugs created Successfully");
  });

  it("PUT /:id - Should get 200 and update a bug from a project", async () => {
    let payload = {
      title: "test bug 2",
      description: "## test description",
      projectId: project.id,
      priority: 0,
      categoryId: category.id,
    };
    const res = await supertest(app)
      .put(`/api/v1/bugs/${bug.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(payload);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe(payload.title);
  });

  it("DELETE /:id - Should get 200 and remove a bug from a project", async () => {
    const res = await supertest(app)
      .delete(`/api/v1/bugs/${bug.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Delete Successfull");
  });
});
