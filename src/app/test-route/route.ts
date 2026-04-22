export async function GET() {
  return new Response("<h1>Route handler works!</h1>", {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
