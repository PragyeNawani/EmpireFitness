"use server"
import NextAuth from "next-auth"
import connectDB from "@/db/connectDB"
import User from "@/models/user";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import user from "@/models/user";
import { NextResponse } from "next/server";
export const authOptions = NextAuth({
        // Configure one or more authentication providers
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
              })
        ],
        callbacks: {
            async signIn({user, account, profile, email, credentials}) {
                if (account.provider == "google"){
                    await connectDB()
                    const currentuser = await User.findOne({email: email})
                    if (!currentuser){
                        const newUser = new User({
                            email: user.email,
                        })
                    await newUser.save()
                    }
                    return true
                }
            }
        },
            async signOut(){

        },
            // ...add more providers here
}) 
export {authOptions as GET, authOptions as POST}