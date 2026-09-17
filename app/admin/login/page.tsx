"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function AdminLoginPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // No auth wired up yet — this is a redirect stub for the scaffold phase.
    setTimeout(() => {
      router.push("/admin");
    }, 400);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="font-display text-2xl tracking-[0.04em] text-charcoal">
          VELORA
        </Link>
        <p className="mt-2 text-sm text-charcoal-soft">Sign in to the studio admin.</p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
          <Input label="Email" name="email" type="email" defaultValue="admin@velora.ae" required />
          <Input label="Password" name="password" type="password" defaultValue="••••••••" required />

          <Button type="submit" disabled={submitting} className="mt-2">
            {submitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <p className="mt-8 text-xs text-charcoal-soft">
          Authentication is not connected yet — this form redirects to the dashboard preview.
        </p>
      </div>
    </div>
  );
}
