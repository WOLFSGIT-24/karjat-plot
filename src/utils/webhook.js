/**
 * Utility to send form submissions to a webhook configured in .env.
 * Sends strictly all form fields and timestamp (no extra fields).
 */
export async function sendToWebhook(formData) {
  const rawUrl =
    import.meta.env.VITE_WEBHOOK_URL ||
    import.meta.env.WEBHOOK_URL ||
    import.meta.env.VITE_WEBHOOK ||
    import.meta.env.WEBHOOK ||
    (typeof process !== "undefined" && process.env?.WEBHOOK_URL) ||
    "";

  // Clean and strip quotes/spaces if present
  const cleanUrl = String(rawUrl).trim().replace(/^["']|["']$/g, "");

  // Construct payload with strictly form fields and timestamp (no extra fields)
  const payload = {};

  if (formData && formData.name !== undefined) {
    payload.name = String(formData.name).trim();
  }
  if (formData && formData.email !== undefined) {
    payload.email = String(formData.email).trim();
  }
  if (formData && formData.phone !== undefined) {
    payload.phone = String(formData.phone).trim();
  }

  payload.timestamp = new Date().toISOString();

  if (!cleanUrl) {
    console.warn("[Webhook] URL is not configured in .env. Set VITE_WEBHOOK_URL in .env to dispatch leads.", payload);
    return { success: false, reason: "missing_webhook_url", payload };
  }

  console.log("[Webhook] Dispatching lead to:", cleanUrl, payload);

  try {
    const response = await fetch(cleanUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text().catch(() => "");
    console.log("[Webhook] Response status:", response.status, responseText);

    return {
      success: response.ok,
      status: response.status,
      responseText,
      payload,
    };
  } catch (error) {
    console.warn("[Webhook] Standard POST failed, attempting no-cors fallback:", error);
    try {
      // Fallback for endpoints without CORS headers
      await fetch(cleanUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      console.log("[Webhook] Dispatched via no-cors fallback successfully.");
      return { success: true, mode: "no-cors", payload };
    } catch (fallbackError) {
      console.error("[Webhook] Delivery error:", fallbackError);
      return { success: false, error: fallbackError, payload };
    }
  }
}
