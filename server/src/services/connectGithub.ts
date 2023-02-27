import passport from "passport";
import Strategy from "passport-github2";
import prisma, { User, Github } from "../helper/prismaClient";

const GithubStrategy = Strategy.Strategy;

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      callbackURL: process.env.GITHUB_CALLBACK as string,
    },
    async function(
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) {
      try {
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
