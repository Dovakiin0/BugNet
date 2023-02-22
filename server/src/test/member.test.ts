import supertest from "supertest";
import { JWTPayload } from "../@types/jwt";
import app from "../config";
import prisma, { Project, User, Member } from "../helper/prismaClient";
import { verifyJWT } from "../helper/util";

describe("Members", () => {
  let user: JWTPayload;
  let project: Project;
  let token: string;

  beforeAll(async () => {
    const res = await supertest(app).post("/api/v1/auth/register").send({
      email: "email@email.com",
      password: "pwdpwd",
      username: "Dovakiin0",
    });

    token = res.body.token;
    user = verifyJWT(token);

    project = await prisma.project.create({
      data: {
        ownerId: user.id,
        title: "test proejct",
        description: "test description",
      },
    });

    const member = await prisma.member.create({
      data: {
        projectId: project.id,
        userId: user.id,
      },
    });
  });

  afterAll(async () => {
    await prisma.project.deleteMany();
    await prisma.user.deleteMany();
  });

  it("GET /:pid - Should get 200 and get all the members from a project", async () => {
    const res = await supertest(app)
      .get(`/api/v1/projects/team/${project.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it.todo("POST /:pid - Should get 201 and add a member to a project");
  it.todo(
    "DELETE /:pid/:id - Should get 200 and remove a member from a project"
  );
});
