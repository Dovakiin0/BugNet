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
        console.log(profile);
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
          // Create a new user and assigne it to github model
          if (profile.emails && profile.username) {
            const new_user = await prisma.github.create({
              data: {
                githubId: profile.id,
                User: {
                  create: {
                    username: profile.username,
                    email: profile.emails[0].value,
                  },
                },
              },
            });

            if (new_user) {
              done(null, new_user);
            }
          }
        }
      } catch (err) {
        done(err as any);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, (user as any).id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (user) {
      done(null, user);
    }
  } catch (err) {
    done(err);
  }
});

export { passport };
