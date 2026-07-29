import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
  focusable: "false" as const,
};

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="13" y2="16" />
    </svg>
  );
}

export function IdCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="8.5" cy="12" r="2" />
      <line x1="13" y1="10" x2="18" y2="10" />
      <line x1="13" y1="14" x2="18" y2="14" />
    </svg>
  );
}

export function ScaleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M4 7l-3 6a3.5 3.5 0 0 0 7 0z" />
      <path d="M20 7l-3 6a3.5 3.5 0 0 0 7 0z" />
      <line x1="5" y1="21" x2="19" y2="21" />
    </svg>
  );
}

export function FamilyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="2.6" />
      <circle cx="17" cy="9" r="2" />
      <path d="M4 20c.5-4 2.3-6 5-6s4.5 2 5 6" />
      <path d="M14.5 20c.3-2.6 1.4-4.4 3.2-4.7" />
    </svg>
  );
}

export function VerifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3 2 5 2 5 2v6c0 4-2.5 7-5 8-2.5-1-5-4-5-8V5s2 0 5-2z" />
      <circle cx="12" cy="11" r="2.4" />
    </svg>
  );
}

export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="9" width="16" height="10" rx="1.5" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 2.5 15 0 17M12 3.5c-2.5 2.3-2.5 15 0 17" />
    </svg>
  );
}

export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3 2 5 2 5 2v6c0 4-2.5 7-5 8-2.5-1-5-4-5-8V5s2 0 5-2z" />
      <path d="M9.25 12l1.75 1.75L14.75 10" />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.3" y1="15.3" x2="20" y2="20" />
    </svg>
  );
}

export const iconMap = {
  document: DocumentIcon,
  id: IdCardIcon,
  scale: ScaleIcon,
  family: FamilyIcon,
  verify: VerifyIcon,
  building: BuildingIcon,
  globe: GlobeIcon,
};
