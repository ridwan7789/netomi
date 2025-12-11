import { Github, Twitter, MessageCircle, Globe, ExternalLink } from "lucide-react";
import netomiLogo from "@/assets/netomi-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={netomiLogo}
                alt="Netomi"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-heading text-xl font-bold">Netomi</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              A Stateless Privacy Layer-2 for hyper-scalable private payments on
              Binance Smart Chain. Building the future of blockchain privacy.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/NetomiNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 focusable"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://t.me/NetomiMain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 focusable"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://docs.netomi.site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 focusable"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="https://docs.netomi.site" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Community</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/NetomiNetwork" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://t.me/NetomiMain" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Netomi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
