export async function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="26" fill="#FFD93D"/>
  <circle cx="26" cy="27" r="3" fill="#8B6914"/>
  <circle cx="38" cy="27" r="3" fill="#8B6914"/>
  <path d="M26 36 Q32 43 38 36" stroke="#8B6914" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`;
  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
