import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;

  if (isNaN(id)) {
    return new NextResponse(JSON.stringify({ error: "Invalid Id" }));
  }

  try {
    const contact = await prisma.contact.findUnique({
      where: {
        Contact_Id: Number(id),
      },
    });

    if (!contact) {
      return new NextResponse(JSON.stringify({ error: "Contact Not Found" }));
    }

    return new NextResponse(JSON.stringify(contact, { status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
};
