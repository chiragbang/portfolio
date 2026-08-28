import { NextRequest, NextResponse } from "next/server";
import { askPortfolio } from "@/lib/ask-portfolio";
import { ratelimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
        return NextResponse.json({ error: "Too many requests. Please wait a minute and try again." }, { status: 429 });
    }
    try {
        const { message } = await req.json();

        if (!message || typeof message !== "string" || message.trim().length === 0) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        const reply = await askPortfolio(message);

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}