const API_BASE_URL = 'https://api.movepro.com.au/moverxsolutions/api/v1';
const FORM_ID = 'a1248b51-bfde-44c8-87f0-3d8be6f28778';
const AUTH_TOKEN = 'Bearer 32876|yL3qrsf7Kz1xLipxahuVXPiuyfY6Hb0q5jVmd1X9acdc0978';

export interface QuoteSubmissionPayload {
  name: string;
  from: string;
  to: string;
  date: string;
  phone: string;
  email: string;
  inventory: string;
}

export interface QuoteSubmissionResponse {
  form_submission: {
    id: number;
    form_id: string;
    form: { name: string };
    order_id: number;
    created_at: string;
  };
  message: string;
}

export async function submitQuote(
  data: QuoteSubmissionPayload
): Promise<QuoteSubmissionResponse> {
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
    throw new Error(`Submission failed: ${response.status}`);
  }

  return response.json();
}
