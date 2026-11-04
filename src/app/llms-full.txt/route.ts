import { NextResponse } from "next/server";
import { generateLlmsFullTxtContent } from "@/utils/llms";

export const revalidate = 3600;

export async function GET() {
  try {
    const content = await generateLlmsFullTxtContent();
    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Failed to generate /llms-full.txt:", error);
    return new NextResponse("# SHUIN まちのしるし\n", {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
