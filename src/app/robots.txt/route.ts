export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://sunnysproutsadventures.ctonew.app/sitemap.xml`,
    {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    }
  );
}
