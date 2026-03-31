import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_BASE_URL = 'https://api.movepro.com.au/moverxsolutions/api/v1';
const FORM_ID = 'a124b8fd-16db-4ea1-ba02-4aec2bcd89fa';
const AUTH_TOKEN = 'Bearer 32876|yL3qrsf7Kz1xLipxahuVXPiuyfY6Hb0q5jVmd1X9acdc0978';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const body = {
      form_id: FORM_ID,
      schema: [
        { type: 'text', value: data.name },
        { type: 'text', value: data.email },
        { type: 'text', value: data.phone },
        { type: 'date', value: data.date },
        { type: 'text', value: data.pickup },
        { type: 'text', value: data.delivery },
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
    console.error('Submit volume quote proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to submit volume quote' },
      { status: 500 }
    );
  }
}
