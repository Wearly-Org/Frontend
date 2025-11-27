import { NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";
import { connectDB } from "../../../lib/mongo/mongo.js";
import User from "../../../models/User";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(request) {
  try {
    const { token } = await request.json();

    // 1. Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // 2. Connect to DB
    await connectDB();

    // 3. Save or find user
    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = await User.create({
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        provider: "google",
      });
    }

    // 4. Return the user
    return NextResponse.json({ user }, { status: 200 });

  } catch (err) {
    console.error("Google auth error:", err);
    return NextResponse.json(
      { error: "Google authentication failed" },
      { status: 500 }
    );
  }
}
