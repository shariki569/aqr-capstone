
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'


export const authOptions = {
    providers: [
        // OAuth authentication providers...
        FacebookProvider({
          clientId: process.env.FACEBOOK_ID,
          clientSecret: process.env.FACEBOOK_SECRET
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
        // Passwordless / email sign in
        EmailProvider({
          server: process.env.MAIL_SERVER,
          from: 'NextAuth.js <no-reply@example.com>'
        }),
      ]
}