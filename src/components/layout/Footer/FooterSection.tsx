import React from 'react';

interface FooterSectionProps {
  title: string;
  colorClass: string;
  children: React.ReactNode;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  colorClass,
  children,
}) => {
  return (
    <div className="footer-section">
      <h3 className={`text-lg font-semibold mb-4 ${colorClass}`}>{title}</h3>
      {children}
    </div>
  );
};