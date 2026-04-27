import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              XYZE
            </h4>
            <p className="text-slate-400 text-sm">Building modern web solutions for tomorrow's businesses.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-bold mb-4">Resources</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/blog" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-bold mb-4">Connect</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} XYZE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
