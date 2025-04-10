import { USER_API } from 'astro:env/server';
export const prerender = false;

export async function PUT({ params, request }: { params: { id: string }, request: Request }) {
  const body = await request.json();
  const res = await fetch(`${USER_API}/${params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: res.status });
}

export async function DELETE({ params }: { params: { id: string } }) {
  const res = await fetch(`${USER_API}/${params.id}`, {
    method: 'DELETE',
  });

  return new Response(null, { status: res.status });
}
