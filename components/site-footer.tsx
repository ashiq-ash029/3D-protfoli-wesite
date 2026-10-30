import Link from "next/link";
import { socialLinks } from "@/lib/portfolio-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
        <h2>
          LET&apos;S BUILD
          <br />
          <span>SOMETHING USEFUL.</span>
        </h2>
        <Link className="button button-primary" href="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="footer-bottom">
        <Link className="logo" href="/">
          ASHIQ<span>.</span>
        </Link>
        <p>AI · SEARCH · DEVELOPMENT</p>
        <div className="footer-links">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
