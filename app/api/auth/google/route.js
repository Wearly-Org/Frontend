import { NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(request) {
  try {
    const { token } = await request.json();

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    return NextResponse.json({
      email: payload?.email,
      name: payload?.name,
      picture: payload?.picture,
    });
  } catch (error) {
    console.error("Google verify error:", error);
    return NextResponse.json(
      { error: "Invalid token" },
      { status: 400 }
    );
  }
}
