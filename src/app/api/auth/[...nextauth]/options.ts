import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GitHubProvider({
      // @ts-ignore
      profile(profile) {
        console.log("profile github", profile);

        let userRole = "GitHub User";
        if (profile?.email == "haydenjwalker1@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
    }),
    GoogleProvider({
      // @ts-ignore
      profile(profile) {
        console.log("profile github", profile);

        let userRole = "Google User";
        if (profile?.email == "haydenjwalker1@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
    }),
  ],
};
