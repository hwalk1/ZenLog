import GitHubProvider from "next-auth/providers/github";
import GoggleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GitHubProvider({
      // @ts-ignore
      profile(profile) {
        console.log("profile github", profile);
      },
    }),
  ],
};
