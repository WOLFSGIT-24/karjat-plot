/**
 * Utility to send form submissions to a webhook configured in .env.
 * Sends strictly all form fields and timestamp (no extra fields).
 */
export async function sendToWebhook(formData) {
  const webhookUrl =
    import.meta.env.VITE_WEBHOOK_URL ||
    import.meta.env.WEBHOOK_URL ||
    import.meta.env.VITE_WEBHOOK ||
    import.meta.env.WEBHOOK ||
    (typeof process !== 'undefined' && process.env?.WEBHOOK_URL) ||
    '';

  // Construct payload with strictly form fields and timestamp (no extra fields)
  const payload = {};
  
  if (formData.name !== undefined) {
    payload.name = String(formData.name).trim();
  }
  if (formData.email !== undefined) {
    payload.email = String(formData.email).trim();
  }
  if (formData.phone !== undefined) {
    payload.phone = String(formData.phone).trim();
  }
  
  payload.timestamp = new Date().toISOString();

  if (!webhookUrl || !webhookUrl.trim()) {
    console.warn('Webhook URL is not set in .env. Set VITE_WEBHOOK_URL=your_webhook_url to enable webhook dispatch.', payload);
    return { success: false, reason: 'missing_webhook_url', payload };
  }

  const cleanUrl = webhookUrl.trim();

  try {
    const response = await fetch(cleanUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return { success: response.ok, status: response.status, payload };
  } catch (error) {
    console.warn('Standard webhook fetch failed, trying no-cors fallback:', error);
    try {
      // Fallback for services like Google Apps Script without CORS headers
      await fetch(cleanUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
      return { success: true, mode: 'no-cors', payload };
    } catch (fallbackError) {
      console.error('Webhook delivery error:', fallbackError);
      return { success: false, error: fallbackError, payload };
    }
  }
}
