interface NotificationData {
  type: 'instant' | 'detailed';
  name: string;
  email: string;
  phone: string;
  date: string;
  from: string;
  to: string;
  inventory: string;
}

/**
 * Fire-and-forget email notification.
 * Does not throw — failures are logged silently so the main submission flow is not affected.
 */
export function sendNotification(data: NotificationData): void {
  fetch('/api/send-notification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch((err) => {
    console.error('Email notification failed:', err);
  });
}
