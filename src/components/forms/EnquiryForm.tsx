"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import {
  ArrowLeft,
  ArrowUpRight,
  Loader2,
  Send,
} from "lucide-react";
import { toast } from "sonner";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_PHONE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;
const MIN_MESSAGE_LENGTH = 10;

const NAME_REGEX =
  /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '.-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function EnquiryForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact_number: "",
    message: "",
  });

  const enquiryType =
    searchParams.get("type") || "General Enquiry";

  const sourcePage =
    searchParams.get("from") || "/";

  /*
   * Remove error for a field when user starts correcting it.
   */
  const clearError = (
    field: keyof typeof errors
  ) => {
    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  };

  /*
   * Name
   *
   * Allows:
   * - Letters
   * - Spaces
   * - Apostrophe
   * - Hyphen
   * - Period
   *
   * Maximum: 80 characters
   */
  const handleNameInput = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const input = event.currentTarget;

    let value = input.value;

    if (value.length > MAX_NAME_LENGTH) {
      input.value = value.slice(0, MAX_NAME_LENGTH);

      setErrors((previous) => ({
        ...previous,
        name: `You can't enter more than ${MAX_NAME_LENGTH} characters.`,
      }));

      return;
    }

    clearError("name");
  };

  /*
   * Email
   *
   * Spaces are removed while typing.
   * Maximum: 120 characters.
   */
  const handleEmailInput = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const input = event.currentTarget;

    const cleanedValue = input.value.replace(/\s/g, "");

    if (cleanedValue.length > MAX_EMAIL_LENGTH) {
      input.value = cleanedValue.slice(
        0,
        MAX_EMAIL_LENGTH
      );

      setErrors((previous) => ({
        ...previous,
        email: `You can't enter more than ${MAX_EMAIL_LENGTH} characters.`,
      }));

      return;
    }

    input.value = cleanedValue;

    clearError("email");
  };

  /*
   * Indian phone number
   *
   * +91 is fixed.
   *
   * Only 10 digits are allowed after +91.
   */
  const handlePhoneInput = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const input = event.currentTarget;

    // Keep only digits
    const digitsOnly = input.value.replace(/\D/g, "");

    if (digitsOnly.length > MAX_PHONE_LENGTH) {
      input.value = digitsOnly.slice(
        0,
        MAX_PHONE_LENGTH
      );

      setErrors((previous) => ({
        ...previous,
        contact_number:
          "Maximum 10 digits allowed.",
      }));

      return;
    }

    input.value = digitsOnly;

    clearError("contact_number");
  };

  /*
   * Message
   *
   * Maximum: 1000 characters.
   */
  const handleMessageInput = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    const textarea = event.currentTarget;

    if (textarea.value.length > MAX_MESSAGE_LENGTH) {
      textarea.value = textarea.value.slice(
        0,
        MAX_MESSAGE_LENGTH
      );

      setErrors((previous) => ({
        ...previous,
        message: `You can't enter more than ${MAX_MESSAGE_LENGTH} characters.`,
      }));

      return;
    }

    clearError("message");
  };

  /*
   * Full validation before EmailJS submission.
   */
  const validateForm = (
    form: HTMLFormElement
  ) => {
    const formData = new FormData(form);

    const name = String(
      formData.get("name") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const phone = String(
      formData.get("contact_number") || ""
    ).trim();

    const message = String(
      formData.get("message") || ""
    ).trim();

    const newErrors = {
      name: "",
      email: "",
      contact_number: "",
      message: "",
    };

    /*
     * Name
     */
    if (!name) {
      newErrors.name =
        "Please enter your name.";
    } else if (name.length > MAX_NAME_LENGTH) {
      newErrors.name = `You can't enter more than ${MAX_NAME_LENGTH} characters.`;
    } else if (!NAME_REGEX.test(name)) {
      newErrors.name =
        "Please enter a valid name.";
    }

    /*
     * Email
     */
    if (!email) {
      newErrors.email =
        "Please enter your email address.";
    } else if (email.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `You can't enter more than ${MAX_EMAIL_LENGTH} characters.`;
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    /*
     * Phone
     */
    if (!phone) {
      newErrors.contact_number =
        "Please enter your 10-digit mobile number.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.contact_number =
        "Please enter a valid 10-digit mobile number.";
    }

    /*
     * Message
     */
    if (!message) {
      newErrors.message =
        "Please provide a brief description of your enquiry.";
    } else if (message.length < MIN_MESSAGE_LENGTH) {
      newErrors.message =
        `Please provide at least ${MIN_MESSAGE_LENGTH} characters.`;
    } else if (
      message.length > MAX_MESSAGE_LENGTH
    ) {
      newErrors.message = `You can't enter more than ${MAX_MESSAGE_LENGTH} characters.`;
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(
      Boolean
    );
  };

  /*
   * Submit
   */
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!formRef.current) return;

    const isValid = validateForm(
      formRef.current
    );

    if (!isValid) {
      toast.error(
        "Please check the highlighted fields.",
        {
          description:
            "Some information needs to be corrected before submitting.",
        }
      );

      return;
    }

    /*
     * Honeypot spam protection.
     */
    const websiteField =
      formRef.current.elements.namedItem(
        "website"
      ) as HTMLInputElement | null;

    if (websiteField?.value) {
      return;
    }

    if (
      !EMAILJS_PUBLIC_KEY ||
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID
    ) {
      toast.error(
        "The enquiry service is not configured yet.",
        {
          description:
            "Please try again later.",
        }
      );

      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success(
        "Enquiry sent successfully.",
        {
          description:
            "Thank you. Our team will get back to you shortly.",
        }
      );

      formRef.current.reset();

      setErrors({
        name: "",
        email: "",
        contact_number: "",
        message: "",
      });

      setTimeout(() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }, 1200);
    } catch (error) {
      console.error(
        "EmailJS submission error:",
        error
      );

      toast.error(
        "Unable to send your enquiry.",
        {
          description:
            "Please try again in a moment.",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F7F4] text-[#171717]">
      {/* Soft brand atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#E3A526]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B41448]/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#E3A526]/5 blur-3xl" />
      </div>

      {/* Back */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-8 lg:px-10">
        <button
          type="button"
          onClick={() => router.back()}
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-[#B41448]"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          Back
        </button>
      </div>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B41448]">
                ENGINEERING INTELLIGENCE
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[4.25rem]">
              Let&apos;s discuss
              <span className="block text-slate-400">
                your requirement.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Tell us a little about your requirement,
              engineering challenge, or the opportunity you
              would like to discuss. Our team will get back to
              you.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#E3A526]" />

              <span className="text-sm text-slate-600">
                {enquiryType}
              </span>
            </div>

            <div className="mt-12 hidden border-t border-slate-200 pt-6 lg:block">
              <p className="text-xs uppercase tracking-[0.18em] text-[#B41448]">
                SOLVINA INDIA
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Engineering expertise for complex power
                systems, grid integration and energy
                infrastructure.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#E3A526]/15 via-transparent to-[#B41448]/15 blur-xl" />

            <div className="relative rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B41448]">
                  SEND AN ENQUIRY
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  How can we help?
                </h2>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                {/* Hidden EmailJS fields */}
                <input
                  type="hidden"
                  name="enquiry_type"
                  value={enquiryType}
                />

                <input
                  type="hidden"
                  name="source_page"
                  value={sourcePage}
                />

                {/* Honeypot */}
                <div
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">
                    Website
                  </label>

                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-800"
                  >
                    Name
                    <span className="ml-1 text-[#B41448]">
                      *
                    </span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={MAX_NAME_LENGTH}
                    autoComplete="name"
                    placeholder="Enter your full name"
                    onInput={handleNameInput}
                    className={`h-13 w-full rounded-xl border bg-[#FAFAF9] px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                        : "border-slate-200 focus:border-[#E3A526] focus:ring-[#E3A526]/10"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-800"
                  >
                    Email ID
                    <span className="ml-1 text-[#B41448]">
                      *
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={MAX_EMAIL_LENGTH}
                    autoComplete="email"
                    placeholder="Enter your work email address"
                    onInput={handleEmailInput}
                    className={`h-13 w-full rounded-xl border bg-[#FAFAF9] px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                        : "border-slate-200 focus:border-[#E3A526] focus:ring-[#E3A526]/10"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <label
                    htmlFor="contact_number"
                    className="mb-2 block text-sm font-medium text-slate-800"
                  >
                    Contact Number
                    <span className="ml-1 text-[#B41448]">
                      *
                    </span>
                  </label>

                  <div
                    className={`flex h-13 w-full overflow-hidden rounded-xl border bg-[#FAFAF9] transition-all duration-300 focus-within:bg-white focus-within:ring-4 ${
                      errors.contact_number
                        ? "border-red-400 focus-within:border-red-400 focus-within:ring-red-400/10"
                        : "border-slate-200 focus-within:border-[#E3A526] focus-within:ring-[#E3A526]/10"
                    }`}
                  >
                    {/* Fixed country code */}
                    <div className="flex shrink-0 items-center border-r border-slate-200 px-4 text-sm font-medium text-slate-700">
                      +91
                    </div>

                    {/* Phone number */}
                    <input
                      id="contact_number"
                      name="contact_number"
                      type="tel"
                      required
                      maxLength={MAX_PHONE_LENGTH}
                      autoComplete="tel-national"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      placeholder="9876543210"
                      onInput={handlePhoneInput}
                      className="min-w-0 flex-1 bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>

                  {errors.contact_number && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.contact_number}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-800"
                  >
                    Enquiry brief description
                    <span className="ml-1 text-[#B41448]">
                      *
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    minLength={MIN_MESSAGE_LENGTH}
                    maxLength={MAX_MESSAGE_LENGTH}
                    placeholder="Briefly describe your requirement, engineering challenge, or what you would like to discuss..."
                    onInput={handleMessageInput}
                    className={`w-full resize-none rounded-xl border bg-[#FAFAF9] px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                        : "border-slate-200 focus:border-[#E3A526] focus:ring-[#E3A526]/10"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#B41448] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9F103F] hover:shadow-lg hover:shadow-[#B41448]/20 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />

                        Sending enquiry...
                      </>
                    ) : (
                      <>
                        <Send
                          size={17}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />

                        Send Enquiry

                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs leading-5 text-slate-400">
                  By submitting this form, you agree to be contacted
                  regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}