export async function GET() {
  return new Response(
    "Sunny Sprouts Adventures — Coloring Pages. Full activity coming soon!",
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": 'attachment; filename="coloring-pages.pdf"',
      },
    }
  );
}
