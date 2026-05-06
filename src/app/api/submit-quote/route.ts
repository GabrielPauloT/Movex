import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_BASE_URL = 'https://api.movepro.com.au/moverxsolutions/api/v1';
const FORM_ID = 'a1248b51-bfde-44c8-87f0-3d8be6f28778';
const AUTH_TOKEN = 'Bearer 32876|yL3qrsf7Kz1xLipxahuVXPiuyfY6Hb0q5jVmd1X9acdc0978';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const body = {
      form_id: FORM_ID,
      schema: [
        { type: 'text', value: data.name },
        { type: 'text', value: data.from },
        { type: 'text', value: data.to },
        { type: 'date', value: data.date },
        { type: 'text', value: data.phone },
        { type: 'text', value: data.email },
        { type: 'textarea', value: data.inventory },
      ],
    };

    const response = await fetch(
      `${API_BASE_URL}/customers/forms/${FORM_ID}/form-submissions`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': AUTH_TOKEN,
          'X-Request-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `MovePro API error: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Submit quote proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote' },
      { status: 500 }
    );
  }
}
