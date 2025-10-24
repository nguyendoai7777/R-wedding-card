import { NextResponse } from 'next/server';

export function GET(req: Request) {
  console.log(`@@@ XXX`)
  return NextResponse.json({ OK: true });
}
