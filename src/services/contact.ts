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

export function validateContactForm(data: ContactPayload): ValidationResult {
  const errors: { name?: string; email?: string; message?: string } = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please include a message with at least 10 characters.";
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
    message: "No backend email service is configured. We have prepared a pre-filled email draft to send directly to vireshnagthane@gmail.com.",
  };
}
