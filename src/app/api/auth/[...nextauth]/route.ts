import NextAuth from "next-auth/next";
import { authConfig } from "../../../../../configs/auth";

const hendler = NextAuth(authConfig);
console.log(hendler);

export { hendler as GET, hendler as POST };
