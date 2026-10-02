interface HyperQubeLogoProps {
  className?: string;
  showText?: boolean;
}

export function HyperQubeLogo({ className = "h-8 md:h-9", showText = true }: HyperQubeLogoProps) {
  return (
    <div className={`relative flex items-center gap-2.5 ${className}`}>
      <img 
        src="/hyperqube-icon.png" 
        alt="HyperQube" 
        className="w-auto h-full object-contain"
      />
      {showText && (
        <span className="text-[var(--color-brand-text)] font-semibold text-[18px] md:text-[20px] tracking-[-0.02em] leading-none whitespace-nowrap">
          HyperQube
        </span>
      )}
    </div>
  );
}
