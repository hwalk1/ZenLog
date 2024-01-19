import NextAuth from "next-auth";
import { options } from "./options";

const handle = NextAuth(options);
export { handler as GET, handler as POST };
