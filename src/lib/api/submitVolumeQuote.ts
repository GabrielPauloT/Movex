import { sendNotification } from './sendNotification';

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
  const response = await fetch('/api/submit-volume-quote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Submission failed: ${response.status}`);
  }

  // Fire-and-forget email notification
  sendNotification({
    type: 'detailed',
    name: data.name,
    email: data.email,
    phone: data.phone,
    date: data.date,
    from: data.pickup,
    to: data.delivery,
    inventory: data.inventory,
  });

  return response.json();
}
