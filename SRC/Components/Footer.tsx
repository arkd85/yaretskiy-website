import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Arkadiy Yaretskiy MD</h3>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Thoughtful, psychotherapy-led psychiatric care for adults in California and New York.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Practice</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Dr. Yaretskiy</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Telehealth Only</li>
              <li>California & New York</li>
              <li>
                <a href="https://headway.co" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Book for CA (Headway)</a>
              </li>
              <li>
                <a href="https://helloalma.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Book for NY (Alma)</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Arkadiy Yaretskiy MD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}