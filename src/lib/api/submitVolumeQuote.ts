const API_BASE_URL = 'https://api.movepro.com.au/moverxsolutions/api/v1';
const FORM_ID = 'a124b8fd-16db-4ea1-ba02-4aec2bcd89fa';
const AUTH_TOKEN = 'Bearer 32889|ulRseZOXD8hIN37TNI0VJmOWH2y1jVBoODK9N9nsc9a6cfc1';

export interface VolumeQuotePayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  pickup: string;
  delivery: string;
  inventory: string;
}

export interface VolumeQuoteResponse {
  form_submission: {
    id: number;
    form_id: string;
    form: { name: string };
    order_id: number;
    created_at: string;
  };
  message: string;
}

export async function submitVolumeQuote(
  data: VolumeQuotePayload
): Promise<VolumeQuoteResponse> {
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
    throw new Error(`Submission failed: ${response.status}`);
  }

  return response.json();
}
