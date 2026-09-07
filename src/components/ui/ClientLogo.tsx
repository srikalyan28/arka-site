"use client";

export default function ClientLogo({ domain, name }: { domain: string; name: string }) {
  return (
    <div className="relative flex items-center justify-center h-12 md:h-16 w-32 md:w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt={`${name} Logo`}
        className="max-h-full max-w-full object-contain drop-shadow-sm"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
          if (e.currentTarget.nextElementSibling) {
            e.currentTarget.nextElementSibling.classList.remove('hidden');
          }
        }}
      />
      <span className="hidden font-extrabold text-gray-800 whitespace-nowrap text-xl">{name}</span>
    </div>
  );
}
