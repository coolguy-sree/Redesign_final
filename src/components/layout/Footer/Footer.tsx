import React from 'react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { SITE_CONFIG } from '../../../utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FooterSection title="ADDRESS" colorClass="text-green-400">
          <div className="space-y-2">
            <p>Institute Code: {SITE_CONFIG.instituteCode}, Established in {SITE_CONFIG.establishedYear}</p>
            <p>{SITE_CONFIG.address}</p>
            <p>Email: <FooterLink href={`mailto:${SITE_CONFIG.email}`} external>{SITE_CONFIG.email}</FooterLink></p>
            <p>Phone: {SITE_CONFIG.phone}</p>
            <p>Fax: {SITE_CONFIG.fax}</p>
          </div>
        </FooterSection>

        <FooterSection title="QUICK LINKS" colorClass="text-yellow-400">
          <ul className="space-y-2">
            <li><FooterLink href="/sports">Sports</FooterLink></li>
            <li><FooterLink href="/ojas">OJAS</FooterLink></li>
            <li><FooterLink href="/nss">NSS</FooterLink></li>
            <li><FooterLink href="/facilities">Facilities</FooterLink></li>
            <li><FooterLink href="/clubs">Clubs</FooterLink></li>
            <li><FooterLink href="/fee-payment">Online Fee Payment</FooterLink></li>
          </ul>
        </FooterSection>

        <FooterSection title="DOWNLOADS" colorClass="text-blue-400">
          <ul className="space-y-2">
            <li><FooterLink href="/forms/backlog">Backlog Exam Form</FooterLink></li>
            <li><FooterLink href="/forms/revaluation">Revaluation Form</FooterLink></li>
            <li><FooterLink href="/forms/admission">Admission Form</FooterLink></li>
            <li><FooterLink href="/calendar">Calendar</FooterLink></li>
            <li><FooterLink href="/prospectus">Prospectus</FooterLink></li>
            <li><FooterLink href="/magazine">Magazine</FooterLink></li>
          </ul>
        </FooterSection>

        <FooterSection title="IMPORTANT LINKS" colorClass="text-red-400">
          <ul className="space-y-2">
            <li><FooterLink href="/csvtu-calendar" external>CSVTU Calendar</FooterLink></li>
            <li><FooterLink href="/alumni">Alumni</FooterLink></li>
            <li><FooterLink href="https://www.aicte-india.org" external>AICTE</FooterLink></li>
            <li><FooterLink href="https://www.ugc.ac.in" external>UGC</FooterLink></li>
            <li><FooterLink href="https://www.dtecg.gov.in" external>DTE Raipur</FooterLink></li>
          </ul>
        </FooterSection>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-800">
        <div className="text-center space-y-4">
          <p>Copyright © {new Date().getFullYear()} {SITE_CONFIG.name} | Website Design & Maintain by SURYA SAROJ</p>
          <div className="space-x-4">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <span>|</span>
            <FooterLink href="/disclaimer">Disclaimer</FooterLink>
            <span>|</span>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};