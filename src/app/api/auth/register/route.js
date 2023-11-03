// import { registerUser } from "@/utilities/controllers/Users";

import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

// export const POST = async (request) => {
//   try {
//     const json = await request.json();
//     const user = await registerUser(json);
//     return new Response(JSON.stringify(user), { status: 200 });
//   } catch (err) {
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     })
//   }
// }

export const POST = async (req) => {
   const body = await req.json();
   const {name, email, password} = body;

   if(!name || !email || !password) {
      return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
   }

   const exist = await prisma.user.findUnique({
    where: {
      email: email
    }
   })

   if(exist) {
      return new NextResponse(JSON.stringify({ error: 'User already exists' }), { status: 400 });
   }

   const hashedPassword = await bcrypt.hash(password, 10)

   const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword  
    }
   });
   return NextResponse.json(user);
}

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Call the registerUser function with the request body as data
//       const user = await registerUser(req.body);

//       // Send the response with the created user
//       res.status(200).json(user);
//     } catch (err) {
//       // Send an error response
//       res.status(500).json({ error: err.message });
//     }
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }