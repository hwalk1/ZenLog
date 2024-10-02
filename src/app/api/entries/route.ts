import connectMongoDB from "@/libs/mongodb";
import Entry from "@/models/entry";
import { NextResponse } from "next/server";

// Post request for connecting to the DB
export const POST = async (req) => {
  const { title, text, meditation } = await req.json();
  await connectMongoDB();
  await Entry.create({ title, text, meditation });
  return NextResponse.json({ message: "Entry Created" }, { status: 201 });
};

//Get all entries
export const GET = async () => {
  await connectMongoDB();
  const entries = await Entry.find();
  return NextResponse.json({ entries });
};

//Deleteing the journal entry
export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Entry.findByIdAndDelete(id);
  return NextResponse.json({ message: `${id} deleted` }, { status: 200 });
};
