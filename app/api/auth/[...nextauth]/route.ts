// api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
// Sesuaikan path relatif sesuai dengan struktur folder Anda

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
