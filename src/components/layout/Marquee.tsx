const marqueeMessages: (string | { text: string; bold?: boolean }[])[] = [
  [
    { text: "This site is " },
    { text: "responsive", bold: true },
    { text: ". Go ahead, resize your browser. I'll wait." },
  ],
  [
    { text: "You've reached the " },
    { text: "footer", bold: true },
    { text: ". Thanks for the scroll!" },
  ],
  [
    { text: "Last updated: " },
    { text: "Probably 5 minutes ago", bold: true },
    { text: "." },
  ],
  [{ text: "Don't be a stranger. " }, { text: "Say hi!", bold: true }],
  [
    {
      text: "See a bug? I'd appreciate a heads-up!",
    },
  ],
  [{ text: "Have an idea? Let's bring it to life." }],
  [{ text: "Obsessed with clean code, fast load times, and a seamless UX." }],
];

const renderMessage = (
  message: string | { text: string; bold?: boolean }[],
) => {
  if (typeof message === "string") {
    return message;
  }
  return message.map((part, partIndex) =>
    part.bold ? (
      // biome-ignore lint/suspicious/noArrayIndexKey: Static content, index is stable
      <strong key={`part-${partIndex}`} className="font-bold">
        {part.text}
      </strong>
    ) : (
      // biome-ignore lint/suspicious/noArrayIndexKey: Static content, index is stable
      <span key={`part-${partIndex}`}>{part.text}</span>
    ),
  );
};

const Separator = () => (
  <span className="text-brand-amber font-bold mx-4 inline-block">|</span>
);

interface MarqueeContentSpanProps {
  children: React.ReactNode;
  separator: React.ReactNode;
  ariaHidden?: boolean;
}

const MarqueeContentSpan = ({
  children,
  separator,
  ariaHidden = false,
}: MarqueeContentSpanProps) => (
  <span
    className="text-brand-navy/70 text-xs sm:text-sm whitespace-nowrap font-medium inline-flex items-center"
    aria-hidden={ariaHidden}
  >
    {children}
    {separator}
  </span>
);

// Marquee message created using 2 spans for seamless infinite scroll (Ref from: Ryan Mulligan's blog)
export default function Marquee() {
  const marqueeContent = marqueeMessages.map((message, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: Static content, index is stable
    <span key={`marquee-message-${index}`}>
      {renderMessage(message)}
      {index < marqueeMessages.length - 1 && <Separator />}
    </span>
  ));

  return (
    <section className="marquee-section bg-brand-steel/10 border-t border-brand-steel/20 py-2 lg:py-3 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          <MarqueeContentSpan separator={<Separator />}>
            {marqueeContent}
          </MarqueeContentSpan>
          <MarqueeContentSpan separator={<Separator />} ariaHidden>
            {marqueeContent}
          </MarqueeContentSpan>
        </div>
      </div>
    </section>
  );
}
