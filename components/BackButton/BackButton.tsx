import Link from "next/link";
import { SVGProps } from "react";
import { IconContainer } from "./style";

interface BackButtonProps
  extends Omit<SVGProps<SVGSVGElement>, "xmlns" | "viewBox"> {
  href: string;
}

export default function BackButton({ href, ...props }: BackButtonProps) {
  return (
    <Link href={href} passHref>
      <IconContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 35" {...props}>
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="round"
            strokeWidth="1"
          >
            <g stroke="#000" strokeWidth="2" transform="translate(-4 -35)">
              <path d="M94.5 52.5h-88m15 16l-16-16m16-16l-16 16"></path>
            </g>
          </g>
        </svg>
      </IconContainer>
    </Link>
  );
}
