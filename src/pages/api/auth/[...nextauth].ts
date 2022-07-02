import { query } from "faunadb"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
query

import {fauna} from '../../../services/fauna'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: { params: { scope: "read:user"} },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      const {email} = user;
      try{
        await fauna.query(
          query.Create(
            query.Collection('users'),
            {data: {email}}
          )
  
        )
        return true
      }catch{
        return false;
      }

      
    },



  }
})