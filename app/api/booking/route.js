import { NextResponse } from "next/server";
import connectDB from "@/DB/DB";
import Booker from "@/Models/model";

// Define the POST method handler
export async function POST(req) {
    try {
        await connectDB(); // Connect to MongoDB

        // Get the request body as JSON
        const body = await req.json();
        const { username, email, phonenumber, flat } = body;



        // Create and save a new user document
        const newUser = new Booker({
            username,
            email,
            phonenumber,
            flat: flat,
            createdAt: new Date(),
        });

        await newUser.save();

        return NextResponse.json({ success: true, user: newUser });
    } catch (err) {
        console.error("Error in /api/book POST:", err);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}
