/* eslint-disable */

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text"},
            },
            async authorize(credentials, req) {

                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                
                if (credentials && credentials.username !== "Kevin") {
                    return null
                }

                return user
            },
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            console.log(token)

            if (account) {
              token.accessToken = account.access_token
              token.id = 1
            }
            return token
          }
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    }
}

export default NextAuth(authOptions)