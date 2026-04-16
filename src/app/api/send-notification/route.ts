import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface NotificationPayload {
  type: 'instant' | 'detailed';
  name: string;
  email: string;
  phone: string;
  date: string;
  from: string;
  to: string;
  inventory: string;
  volume?: number;
  truck?: string;
  truckCapacity?: number;
  price?: string;
  totalItems?: number;
}

export async function POST(request: NextRequest) {
  try {
    const data: NotificationPayload = await request.json();

    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (!notificationEmail || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email notification not configured' },
        { status: 500 }
      );
    }

    const isInstant = data.type === 'instant';
    const subject = isInstant
      ? 'New instant quote request'
      : 'New detailed quote request';

    const inventoryHtml = data.inventory
      ? data.inventory.split('\n').map(line => `<div style="padding: 4px 0; border-bottom: 1px solid #f3f4f6;">${line}</div>`).join('')
      : 'Not specified';

    const moveSummaryHtml = data.volume != null ? `
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
            <h2 style="color: #273690; margin-top: 0; margin-bottom: 12px;">Move Summary</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 33%; text-align: center; padding: 16px 8px; background-color: #273690; border-radius: 8px 0 0 8px;">
                  <div style="color: rgba(255,255,255,0.7); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Total Volume</div>
                  <div style="color: white; font-size: 24px; font-weight: bold; margin-top: 4px;">${data.volume.toFixed(1)} m³</div>
                </td>
                <td style="width: 34%; text-align: center; padding: 16px 8px; background-color: #1e2a6e;">
                  <div style="color: rgba(255,255,255,0.7); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Recommended Truck</div>
                  <div style="color: white; font-size: 18px; font-weight: bold; margin-top: 4px;">${data.truck || '-'}</div>
                  <div style="color: rgba(255,255,255,0.6); font-size: 12px;">${data.truckCapacity ? `${data.truckCapacity} m³ capacity` : ''}</div>
                </td>
                <td style="width: 33%; text-align: center; padding: 16px 8px; background-color: #FF6600; border-radius: 0 8px 8px 0;">
                  <div style="color: rgba(255,255,255,0.8); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Price</div>
                  <div style="color: white; font-size: 24px; font-weight: bold; margin-top: 4px;">${data.price || '-'}</div>
                </td>
              </tr>
            </table>
            ${data.totalItems ? `<div style="text-align: center; margin-top: 8px; color: #6b7280; font-size: 13px;">${data.totalItems} items selected</div>` : ''}
          </div>
    ` : '';

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #273690; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">MoverX Solutions</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0;">
            ${isInstant ? 'Instant Quote Request' : 'Detailed Quote Request'}
          </p>
        </div>
        <div style="padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb;">
          <h2 style="color: #273690; margin-top: 0;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 120px;">Name:</td>
              <td style="padding: 8px 0; font-weight: bold;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Date:</td>
              <td style="padding: 8px 0;">${data.date}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Pick-up:</td>
              <td style="padding: 8px 0;">${data.from}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Destination:</td>
              <td style="padding: 8px 0;">${data.to}</td>
            </tr>
          </table>
          ${moveSummaryHtml}
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin-bottom: 8px;">Inventory:</p>
            <div style="background-color: white; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb; font-size: 14px;">
              ${inventoryHtml}
            </div>
          </div>
        </div>
        <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
          This notification was sent automatically from moverxsolutions.com.au
        </div>
      </div>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'MoverX Notifications <onboarding@resend.dev>',
      to: notificationEmail,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
