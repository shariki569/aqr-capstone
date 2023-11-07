import { getAuthSession } from "@/utilities/auth";
import { NextResponse } from "next/server";

//GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { PostSlug: slug }, //Make it match the schema name
      include: { user: true },
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

export const PATCH = async (req, { params }) => {
  const session = await getAuthSession();
  const { slug } = params;
  const body = req.json();

  if (!session) {
    return new NextResponse(
      JSON.stringify(
        { message: "You are not authenticated to update this post" },
        { status: 401 }
      )
    );
  }

  try {
    const updatePost = await prisma.post.update({
      where: {
        PostSlug: slug,
      },
      data: {
        PostTitle: body.postTitle,
        PostDesc: body.postDesc,
        PostImg: body.postImg,
        catSlug: body.catSlug,
      },
    });
    return new NextResponse.json(updatePost, { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse({message: 'Error in posting'}, {status: 500})
  }
};
