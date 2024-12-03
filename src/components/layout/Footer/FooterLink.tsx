import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  external = false,
}) => {
  const className = "hover:text-opacity-80 transition-colors duration-200";
  
  return external ? (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};