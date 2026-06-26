"use client";

import { useActionState, useId } from "react";
import submitContact from "@/lib/actions/contact.actions";
import {
  LoaderCircle,
  Mail,
  User,
  MessageSquare,
  CheckCircle2,
  CircleAlert,
} from "lucide-react";

import { SOCIAL_LINKS, SOCIAL_ICONS } from "@/constants/sites";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder: string;
  autoComplete: string;
  disabled: boolean;
  error?: string[];
  icon: React.ComponentType<{ className?: string }>;
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  disabled,
  error,
  icon: Icon,
}: FormFieldProps) {
  const inputId = useId();
  const errorId = useId();
  const hasError = Boolean(error && error.length > 0);

  const baseInputStyles =
    "w-full bg-main border border-white/10 rounded-lg pl-11 pr-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/30 transition-all duration-200 outline-none focus:border-accent-primary/40 focus-visible:ring-2 focus-visible:ring-accent-primary/20 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-xs font-semibold text-text-secondary uppercase tracking-wider"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon className="absolute left-4 size-4 text-text-secondary/50 pointer-events-none" />
        {type === "textarea" ? (
          <textarea
            id={inputId}
            name={name}
            required
            rows={5}
            disabled={disabled}
            autoComplete={autoComplete}
            className={`${baseInputStyles} resize-none py-3 pl-11`}
            placeholder={placeholder}
          />
        ) : (
          <input
            id={inputId}
            name={name}
            type={type}
            required
            disabled={disabled}
            autoComplete={autoComplete}
            className={baseInputStyles}
            placeholder={placeholder}
          />
        )}
      </div>
      {hasError && (
        <p
          id={errorId}
          className="text-xs font-medium text-red-500 mt-1 animate-pulse"
        >
          {error?.[0]}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  return (
    <section id="contact" className="dynamic-container mx-auto w-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
              Get In Touch
            </h2>
            <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              I{"'"}m currently open to new opportunities, freelance projects,
              or just chatting about software architecture. Drop a message!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.id];
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card-primary border border-white/5 rounded-xl transition-all duration-300 hover:border-accent-primary/30 hover:bg-card-primary/80 group"
                >
                  {Icon && (
                    <Icon className="size-5 text-text-secondary group-hover:text-accent-primary transition-colors" />
                  )}
                  <div className="text-left">
                    <span className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      {link.name}
                    </span>
                    <span className="text-xs text-text-primary/70 truncate block max-w-[120px]">
                      {link.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>{" "}
        </div>

        <div className="w-full max-w-2xl mx-auto lg:max-w-none bg-card-primary border border-white/5 p-6 sm:p-8 rounded-2xl shadow-[0_0_50px_rgba(123,31,53,0.05)] transition-all duration-300 hover:border-white/10">
          <form action={formAction} className="space-y-5">
            <FormField
              label="Name"
              name="name"
              placeholder="Zyd Malek"
              autoComplete="name"
              disabled={isPending}
              error={state?.errors?.name}
              icon={User}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Zyd@example.com"
              autoComplete="email"
              disabled={isPending}
              error={state?.errors?.email}
              icon={Mail}
            />

            <FormField
              label="Message"
              name="message"
              type="textarea"
              placeholder="Hi, I'd love to talk about a potential project..."
              autoComplete="off"
              disabled={isPending}
              error={state?.errors?.message}
              icon={MessageSquare}
            />

            {state && !state.success && state.message && (
              <div className="flex items-center gap-2.5 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs font-medium transition-all">
                <CircleAlert className="size-4 shrink-0" />
                <span>{state.message}</span>
              </div>
            )}

            {state?.success && (
              <div className="flex items-center gap-2.5 p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-xs font-medium transition-all">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>{state.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full lg:w-auto min-w-[140px] bg-accent-primary hover:bg-accent-hover text-text-primary font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-accent-primary/40 outline-none"
            >
              {isPending ? (
                <>
                  <LoaderCircle className="animate-spin size-4 text-text-primary" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
