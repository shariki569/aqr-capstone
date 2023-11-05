// import prisma from "@/utilities/connect";
import bcrypt from "bcrypt";
import prisma from "../connect";
import { NextResponse } from "next/server";

// export const createUser = async (req) => {
//   const body = await req.json();
//   const {name, email, password} = body;

//   if(!name || !email || !password) {
//      return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
//   }

//   const exist = await prisma.user.findUnique({
//    where: {
//      email: email
//    }
//   })

//   if(exist) {
//      return new NextResponse(JSON.stringify({ error: 'User already exists' }), { status: 400 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10)

//   const user = await prisma.user.create({
//    data: {
//      name,
//      email,
//      password: hashedPassword  
//    }
//   });
//   return NextResponse.json(user);
// }


export const getUserEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (err) {
    throw new Error(err);
  }
};
