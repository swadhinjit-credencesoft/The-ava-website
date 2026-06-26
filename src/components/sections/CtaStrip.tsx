"use client";

interface CtaStripProps {
  label: string;
  title: string;
  buttons: {
    label: string;
    href: string;
    variant: "gold" | "white" | "outline" | "dark";
    testId?: string;
  }[];
}

const variants = {
  gold: "bg-[#C9A84C] text-[#111111] hover:bg-[#b8943f]",
  white: "bg-white text-[#111111] hover:bg-[#f5f5f5]",
  outline: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
  dark: "bg-[#111111] text-white hover:bg-[#333]",
};

export function CtaStrip({ label, title, buttons }: CtaStripProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[#C9A84C] text-[12px] uppercase tracking-[0.4em] mb-3">{label}</p>
          <h2 className="font-display text-[42px] md:text-[56px] text-white uppercase leading-tight">{title}</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`px-10 py-4 rounded-full font-medium text-[16px] transition-colors whitespace-nowrap text-center ${variants[btn.variant]}`}
              data-testid={btn.testId}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
