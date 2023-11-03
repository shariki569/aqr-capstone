// import prisma from "@/utilities/connect";
import bcrypt from "bcrypt";
import prisma from "../connect";
import { NextResponse } from "next/server";

export const registerUser = async (data) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(data.password, salt);
    if (!data.password) {
      throw new Error("Password is required");
    }
  

    if (data.email) {
      const existingEmail = await prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingEmail) {
        throw new Error("Email already taken");
      }
    }

    if (data.username) {
      const existingUsername = await prisma.user.findUnique({
        where: { username: data.username },
      });

      if (existingUsername) {
        throw new Error("Username already taken");
      }
    }

    const user = await prisma.user.create({
      data: {
       email: data.email,
        username: data.username,
        password: hashedPass,
      },
    });
    return NextResponse.json(user), {

      status: 200,
      headers: {
        "Content-Type": "application/json",
      }
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

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
