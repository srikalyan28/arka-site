"use client";
import { useState } from "react";

export default function ClientLogo({ domain, name }: { domain: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative flex items-center justify-center gap-3 h-12 md:h-16 w-max px-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
      {!hasError && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          alt={`${name} Icon`}
          className="h-8 md:h-10 w-auto object-contain drop-shadow-sm"
          onError={() => setHasError(true)}
        />
      )}
      <span className="font-extrabold text-gray-800 whitespace-nowrap text-lg md:text-xl tracking-tight">{name}</span>
    </div>
  );
}
