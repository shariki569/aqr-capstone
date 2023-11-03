import GoogleProvider from 'next-auth/providers/google'
import prisma from './connect'
// import EmailProvider from 'next-auth/providers/email'


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // Passwordless / email sign in
        // EmailProvider({
        //   server: process.env.MAIL_SERVER,
        //   from: 'NextAuth.js <no-reply@example.com>'
        // }),
      ]
}