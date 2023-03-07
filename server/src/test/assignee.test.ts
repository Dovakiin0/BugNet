import app from "../config";
import prisma, { Project, Bug, Member, Assignee } from "../helper/prismaClient";
import supertest from "supertest";
import { verifyJWT } from "../helper/util";

describe("Assignee", () => {
  let project: Project;
  let bug: Bug;
  let token: string;
  let member: Member;
  let assignee: Assignee;

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

    member = await prisma.member.create({
      data: {
        userId: userId,
        projectId: project.id,
      },
    });

    assignee = await prisma.assignee.create({
      data: {
        memberId: member.id,
        bugId: bug.id,
      },
    });
  });

  afterAll(async () => {
    await prisma.bug.deleteMany();
    await prisma.project.deleteMany();
    await prisma.user.deleteMany();
    await prisma.assignee.deleteMany();
  });

  it("POST / - Should get 201 and add an assignee to a bug", async () => {
    const res = await supertest(app)
      .post("/api/v1/bugs/assignee/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        bugId: bug.id,
        memberId: member.id,
      });
    expect(res.status).toBe(201);
    expect(res.body.bugId).toBe(bug.id);
  });

  it("DELETE /:id - Should get 200 and remove an assignee from a bug", async () => {
    const res = await supertest(app)
      .delete(`/api/v1/bugs/assignee/${assignee.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Assignee Removed from Bug");
  });
});
