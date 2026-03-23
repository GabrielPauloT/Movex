import { sendNotification } from './sendNotification';

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
  const response = await fetch('/api/submit-quote', {
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
    type: 'instant',
    name: data.name,
    email: data.email,
    phone: data.phone,
    date: data.date,
    from: data.from,
    to: data.to,
    inventory: data.inventory,
  });

  return response.json();
}
