import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import { NextResponse } from 'next/server'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, attendance } = body

    if (!name || !attendance) {
      return NextResponse.json(
        { error: 'Name and attendance are required' },
        { status: 400 }
      )
    }

    // Check for required environment variables
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error('Missing Google Sheets credentials')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Create JWT auth
    const jwt = new JWT({
      email: serviceAccountEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: SCOPES,
    })

    // Initialize the spreadsheet
    const doc = new GoogleSpreadsheet(spreadsheetId, jwt)
    await doc.loadInfo()

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]

    if (!sheet) {
      return NextResponse.json(
        { error: 'No sheet found in spreadsheet' },
        { status: 500 }
      )
    }

    // Load header row
    await sheet.loadHeaderRow()

    // Map attendance value to readable text
    const attendanceText: Record<string, string> = {
      'attending': 'КЕЛЕМІН',
      'attending-with-spouse': 'ЖҰБЫММЕН КЕЛЕМІН',
      'not-attending': 'ӨКІНІШКЕ ОРАЙ ҚАТЫСА АЛМАЙМЫН'
    }

    // Add the row with your column names
    await sheet.addRow({
      'Имя': name,
      'Участие': attendanceText[attendance] || attendance
    })

    return NextResponse.json({ success: true, message: 'RSVP submitted successfully' })
  } catch (error) {
    console.error('Error submitting RSVP:', error)
    return NextResponse.json(
      {
        error: 'Failed to submit RSVP',
        details: error.message || String(error) // ЭТА СТРОКА ПОКАЖЕТ     НАСТОЯЩУЮ ОШИБКУ
      },
      { status: 500 }
    )
  }
}
