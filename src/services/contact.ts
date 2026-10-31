export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

// Client-side rate-limiting timestamp to prevent spam bursts
let lastSubmissionTimestamp = 0;
const SUBMISSION_COOLDOWN_MS = 15000; // 15 seconds

export function validateContactForm(data: ContactPayload): ValidationResult {
  const errors: { name?: string; email?: string; message?: string } = {};

  // Check rate limiting
  const now = Date.now();
  if (now - lastSubmissionTimestamp < SUBMISSION_COOLDOWN_MS) {
    const waitSec = Math.ceil((SUBMISSION_COOLDOWN_MS - (now - lastSubmissionTimestamp)) / 1000);
    errors.message = `Please wait ${waitSec}s before sending another message.`;
    return { isValid: false, errors };
  }

  // Sanitize and validate Name
  const trimmedName = (data.name || '').trim();
  if (!trimmedName || trimmedName.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  } else if (trimmedName.length > 100) {
    errors.name = "Name must not exceed 100 characters.";
  }

  // Sanitize and validate Email (prevent header injection, verify format)
  const trimmedEmail = (data.email || '').trim();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail) || /[\r\n]/.test(trimmedEmail)) {
    errors.email = "Please enter a valid, safe email address.";
  } else if (trimmedEmail.length > 120) {
    errors.email = "Email must not exceed 120 characters.";
  }

  // Sanitize and validate Message
  const trimmedMessage = (data.message || '').trim();
  if (!trimmedMessage || trimmedMessage.length < 10) {
    errors.message = "Please include a message with at least 10 characters.";
  } else if (trimmedMessage.length > 3000) {
    errors.message = "Message must not exceed 3000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface SubmitResult {
  success: boolean;
  isFallback: boolean;
  message: string;
}

export async function submitContactMessage(payload: ContactPayload): Promise<SubmitResult> {
  lastSubmissionTimestamp = Date.now();

  // Simulate network request latency
  await new Promise((resolve) => setTimeout(resolve, 600));

  // If a backend webhook or Formspree/EmailJS endpoint is defined in env:
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        return {
          success: true,
          isFallback: false,
          message: "Thank you! Your message has been sent successfully.",
        };
      }
    } catch (err) {
      console.error("Endpoint submission error", err);
    }
  }

  // Fallback: Honest representation that no third-party email API is connected
  return {
    success: true,
    isFallback: true,
    message: "No backend email service is configured. We have prepared a pre-filled email draft to send directly to vireshnagthane9@gmail.com.",
  };
}
