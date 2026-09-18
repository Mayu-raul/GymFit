import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="#home" className="inline-block font-bebas text-4xl tracking-wider text-text-primary mb-6">
              GYM<span className="text-primary">FIT</span>
            </Link>
            <p className="text-text-secondary font-bold uppercase tracking-widest text-lg mb-6">
              Train Hard. <br />
              Live Strong.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors font-medium">
                Instagram
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors font-medium">
                YouTube
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors font-medium">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Features', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Programs</h4>
            <ul className="space-y-4">
              {['Strength', 'Fat Loss', 'HIIT', 'Personal Training'].map((program) => (
                <li key={program}>
                  <Link href="#programs" className="text-text-secondary hover:text-primary transition-colors">
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-secondary">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>info@gymfit.example.com</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Fitness Ave, Iron District<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} GymFit. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
