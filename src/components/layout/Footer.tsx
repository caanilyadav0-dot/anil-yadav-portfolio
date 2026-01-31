import { Calculator, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand & Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Calculator className="w-8 h-8 text-accent" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-xl text-white">CA Anil</div>
                <div className="text-sm text-neutral-400 font-medium tracking-wide">
                  Business Finance Expert
                </div>
              </div>
            </div>

            <p className="text-neutral-400">
              We help businesses grow by providing expert financial advice and
              securing the right funding at the right time.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-neutral-300">
                  Office No. 123, Business Park,
                  <br />
                  Mumbai, Maharashtra, India.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-neutral-300">+91 8237902383</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-neutral-300">capitalwise0@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Services",
                "Documents Required",
                "Our Process",
                "Who We Are",
                "Contact Us",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold mb-4">Request a Callback</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent resize-none"
                ></textarea>
              </div>
              <Button fullWidth variant="secondary">
                Submit Request
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-neutral-500 text-sm">
          <p>
            © {new Date().getFullYear()} CA Anil - Business Finance Expert. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
