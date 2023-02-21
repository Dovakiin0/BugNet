import supertest from "supertest";
import app from "../config";
import prisma, { Project, User, Member } from "../helper/prismaClient";

describe("Members", () => {
  let user: User;
  let project: Project;
  beforeAll(async () => {
    user = await prisma.user.create({
      data: {
        username: "Test",
        email: "test@test.com",
        password: "test",
      },
    });

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
    const res = await supertest(app).get(`/api/v1/projects/team/${project.id}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it.todo("POST /:pid - Should get 201 and add a member to a project");
  it.todo(
    "DELETE /:pid/:id - Should get 200 and remove a member from a project"
  );
});
