import passport from "passport";
import Strategy from "passport-github2";
import prisma, { User, Github, OmitedUser } from "../helper/prismaClient";
import { Request } from "express";

const GithubStrategy = Strategy.Strategy;

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      callbackURL: process.env.GITHUB_CALLBACK as string,
      passReqToCallback: true,
    },
    async function (
      req: Request,
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any,
    ) {
      try {
        // check if github account already exists when logging
        const github = await prisma.github.findUnique({
          where: {
            githubId: profile.id,
          },
        });

        if (github) {
          let githubUser = await prisma.github.update({
            where: { id: github.id },
            data: {
              accessToken,
            },
            select: { User: true },
          });
          done(null, githubUser.User);
        }

        // if github account does not exist
        // and check if user is already logged in
        const user = (req.session as any).user as OmitedUser;
        // if logged in associate the github with the user
        if (typeof user !== "undefined") {
          const github = await prisma.github.create({
            data: {
              githubId: profile.id,
              accessToken: accessToken,
            },
          });

          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              githubId: github.id,
            },
          });

          done(null, user);
        } else {
          // Create a new user and assigne it to github model
          if (profile.emails && profile.username) {
            const new_user = await prisma.github.create({
              data: {
                githubId: profile.id,
                accessToken: accessToken,

                User: {
                  create: {
                    username: profile.username,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
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
    },
  ),
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
