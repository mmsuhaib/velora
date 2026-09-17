"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import { services } from "@/lib/mock-data/services";
import {
  contactFormSchema,
  contactFormDefaultValues,
  type ContactFormValues,
} from "@/lib/validations/contact";

const serviceOptions = [
  { value: "", label: "General enquiry" },
  ...services.map((service) => ({ value: service.slug, label: service.name })),
];

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(contactFormDefaultValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // No backend yet in this phase — mock data layer only.
    console.log("Quote request submitted:", result.data);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start border border-line px-8 py-14">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-ivory">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-6 font-display text-2xl text-charcoal">Message sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-soft">
          Thank you for reaching out. A member of the VELORA studio will follow up
          within one business day.
        </p>
        <Button
          type="button"
          variant="ghost"
          className="mt-7 px-0"
          onClick={() => {
            setValues(contactFormDefaultValues);
            setSubmitted(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Full name"
          name="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Phone (optional)"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
          autoComplete="tel"
        />
        <Select
          label="Service"
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          options={serviceOptions}
        />
      </div>

      <Textarea
        label="Tell us about your project"
        name="message"
        value={values.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
        placeholder="Space, timeline, and anything else that's useful to know."
      />

      <Button type="submit" disabled={submitting} className="mt-2 self-start">
        {submitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
