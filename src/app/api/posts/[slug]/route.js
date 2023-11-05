import { NextResponse } from "next/server";

//GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { PostSlug: slug }, //Make it match the schema name
      include: { user: true},
    });

    return new NextResponse(
      JSON.stringify(post, {
        status: 200,
      })
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: "Something went wrong" }, { status: 500 })
    );
  }
};
