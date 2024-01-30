export { default } from "next-auth/middleware";
console.log("Middleware Running");

export const config = { matcher: ["/CreateUser", "/"] };
