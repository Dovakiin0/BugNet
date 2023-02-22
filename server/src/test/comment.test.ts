import app from "../config";
import prisma, { Project, Bug, Comment } from "../helper/prismaClient";
import supertest = require("supertest");
import { verifyJWT } from "../helper/util";

describe("Comment", () => {
  let project: Project;
  let bug: Bug;
  let token: string;
  let comment: Comment;

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

    comment = await prisma.comment.create({
      data: {
        content: "Test 1",
        bugId: bug.id,
        userId: userId,
      },
    });
  });

  afterAll(async () => {
    await prisma.bug.deleteMany();
    await prisma.project.deleteMany();
    await prisma.user.deleteMany();
  });

  it("POST /:bid - Should get 201 and add a comment to a bug", async () => {
    let payload = {
      content: "test comment",
    };
    const res = await supertest(app)
      .post(`/api/v1/bugs/comment/${bug.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(payload);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("PUT /:id - Should get 200 and update a comment from a bug", async () => {
    let payload = {
      content: "test comment 22",
    };
    const res = await supertest(app)
      .put(`/api/v1/bugs/comment/${comment.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id");
  });

  it("DELETE /:id - Should get 200 and remove a comment from a bug", async () => {
    const res = await supertest(app)
      .delete(`/api/v1/bugs/comment/${comment.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Comment deleted successfully");
  });
});
