import supertest from "supertest";
import { JWTPayload } from "../@types/jwt";
import app from "../config";
import prisma from "../helper/prismaClient";
import { verifyJWT } from "../helper/util";

describe("Notification", () => {
  let user: JWTPayload;
  let user1: JWTPayload;
  let token: string;
  let token1: string;

  beforeAll(async () => {
    const res = await supertest(app).post("/api/v1/auth/register").send({
      email: "email@email.com",
      password: "pwdpwd",
      username: "Dovakiin0",
    });

    token = res.body.token;
    user = verifyJWT(token);

    const res1 = await supertest(app).post("/api/v1/auth/register").send({
      email: "email@mail.com",
      password: "pwdpwd",
      username: "Bishal",
    });

    token1 = res1.body.token;
    user1 = verifyJWT(token1);
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
  });

  it("Should fetch the latest 5 notification of the user", async () => {
    const res = await supertest(app)
      .get("/api/v1/notification")

      .set("Authorization", `Bearer ${token}`)
      .send();

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
