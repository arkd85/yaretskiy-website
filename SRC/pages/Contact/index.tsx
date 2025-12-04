import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6">
       <div className="max-w-4xl mx-auto text-center">
         <h1 className="text-5xl font-bold tracking-tight mb-8">Contact</h1>
         <p className="text-xl text-muted-foreground mb-16">
           For scheduling and general inquiries, please use the booking links below or email us directly.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-surface p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">California Residents</h3>
              <p className="text-muted-foreground mb-6">Book appointments and manage insurance via Headway.</p>
              <Button className="w-full" onClick={() => window.open('https://headway.co', '_blank')}>
                Book on Headway
              </Button>
            </div>

            <div className="bg-surface p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">New York Residents</h3>
              <p className="text-muted-foreground mb-6">Book appointments and manage insurance via Alma.</p>
              <Button className="w-full" variant="secondary" onClick={() => window.open('https://helloalma.com', '_blank')}>
                Book on Alma
              </Button>
            </div>
         </div>

         <div className="flex flex-col items-center gap-4 p-8 bg-secondary/5 rounded-2xl">
           <Mail className="h-8 w-8 text-foreground" />
           <h3 className="text-lg font-medium">Direct Email</h3>
           <p className="text-muted-foreground">
             If you have specific questions before booking, you can reach the practice at:
           </p>
           <a href="mailto:contact@yaretskiymd.com" className="text-xl font-semibold hover:text-accent transition-colors">
             contact@yaretskiymd.com
           </a>
         </div>
       </div>
    </div>
  );
}