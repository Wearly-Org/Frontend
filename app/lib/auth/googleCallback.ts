export default async function handleGoogleCallback(res: any) {
  try {
    const response = await fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: res.credential }),
    });

    const data = await response.json();
    console.log("User saved to DB:", data);
  } catch (error) {
    console.error("Error sending token:", error);
  }
}
