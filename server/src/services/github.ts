import passport from "passport";
import Strategy from "passport-github";
import prisma, { User, Github } from "../helper/prismaClient";

const GithubStrategy = Strategy.Strategy;

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      callbackURL: process.env.GITHUB_CALLBACK as string,
    },
    async function(accessToken, refreshToken, profile, done) {
      try {
        const githubUser = await prisma.github.findUnique({
          where: {
            githubId: profile.id,
          },
          include: {
            User: true,
          },
        });
        if (githubUser) {
          let user = await prisma.user.findUnique({
            where: {
              id: githubUser.User?.id,
            },
            include: {
              Github: true,
            },
          });
          done(null, user as any);
        } else {
          const new_user = await prisma.user.create({
            data: {
              email: profile.emails[0].value,
            },
          });
        }
      } catch (err) {
        done(err as any);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  // done(null, user.id)
});
