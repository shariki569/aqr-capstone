import prisma from "../connect";
import { getUserEmail } from "./Users";
import bcrypt from "bcrypt";

export const generateToken = async (email, password) => {
    try {
        const user = await getUserEmail(email);
    if(!user || !(await bcrypt.compare(password, user.password))){
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({userId : user.id}, process.env.JWT_SECRET, {expiresIn: '1hr'});
    await prisma.validateToken.create({
        data: {
            token,
            userId: user.id
        }
    })
    return token;
    } catch (err) {
        throw new Error(err)
    }
}