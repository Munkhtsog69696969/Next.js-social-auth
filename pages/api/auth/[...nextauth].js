import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

import User from "@/model/user"
import { connectDB } from "@/mongo/connector"

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret:process.env.JWT_SECRET,

    callbacks: {
        async session({ session }) {
            const user=await User.findOne({email:session.user.email});

            session.user.id=user._id.toString();

            return session;
        },

        async signIn({ profile }){
            try{
                await connectDB();

                const existingUser=await User.findOne({email:profile.email});

                if(!existingUser){
                    await User.create({
                        email:profile.email,
                        name:profile.name,
                        imageUrl:profile.picture
                    });
                }

                return true;
            }catch(err){
                console.log(err);
            }
        }
    }
})