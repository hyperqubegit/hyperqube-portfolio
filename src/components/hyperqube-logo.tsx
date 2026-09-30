import Image from "next/image";

interface HyperQubeLogoProps {
  className?: string;
}

export function HyperQubeLogo({ className = "h-8 md:h-9 w-auto" }: HyperQubeLogoProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <img 
        src="/hyperqube-logo.png" 
        alt="HyperQube" 
        className="w-auto h-full object-contain"
      />
    </div>
  );
}
