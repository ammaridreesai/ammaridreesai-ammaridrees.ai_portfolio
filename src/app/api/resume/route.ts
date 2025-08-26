import { NextRequest } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const download = url.searchParams.get('download') === '1'

    const filePath = path.join(process.cwd(), 'resume', 'Ammar_Resume.pdf')
    const file = await fs.readFile(filePath)
    const body = new Uint8Array(file)

    return new Response(body, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="Ammar_Resume.pdf"`,
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    })
  } catch {
    return new Response('Resume not found', { status: 404 })
  }
}


