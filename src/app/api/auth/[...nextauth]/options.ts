import Github from "next-auth/providers/github";
import GitLab from "next-auth/providers/gitlab";

export const options = {
  providers: [
    Github({
      profile(profile) {
        console.log("profile github", profile);
      },
    }),
  ],
};
