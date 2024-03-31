import connectMongoDB from "@/libs/mongodb";
import Entry from "@/models/entry";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { title, text, meditation } = await req.json();
  await connectMongoDB();
  await Entry.create({ title, text, meditation });
  return NextResponse.json({ message: "Entry Created" }, { status: 201 });
};

export const GET = async () => {
  await connectMongoDB();
  const entries = await Entry.find();
  return NextResponse.json({ entries });
};

export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Entry.findByIdAndDelete(id);
  return NextResponse.json({ message: `${id} deleted` }, { status: 200 });
};
