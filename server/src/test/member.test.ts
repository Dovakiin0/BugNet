import supertest from "supertest";
import { JWTPayload } from "../@types/jwt";
import app from "../config";
import prisma, { Project, Member } from "../helper/prismaClient";
import { verifyJWT } from "../helper/util";

describe("Members", () => {
  let user: JWTPayload;
  let project: Project;
  let token: string;
  let member: Member;

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

    member = await prisma.member.create({
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

  it("POST /:pid - Should get 201 and add a member to a project", async () => {
    let payload = {
      email: "email@email.com",
    };
    const res = await supertest(app)
      .post(`/api/v1/projects/team/${project.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(payload);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("DELETE /:id - Should get 200 and remove a member from a project", async () => {
    const res = await supertest(app)
      .delete(`/api/v1/projects/team/${member.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Member deleted successfully");
  });

  it("PUT /approve - Should get 200 and approves request from a project", async () => {
    const res = await supertest(app)
      .put(`/api/v1/projects/team/approve/${project.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ status: "Accepted" });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Member Status updated successfully");
  });
});
