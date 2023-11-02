import prisma from "@/utilities/connect";

export const register = async (data) => {
  try {

    const hashedPass = await bcrypt.hash(data.password, 10);
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

    const result = await prisma.user.create({
        data: {
            'email': data.email,
            'username': data.username,
            'password': hashedPass
        }
    })
  } catch (err) {
    throw new Error(err.message);
  }
};
