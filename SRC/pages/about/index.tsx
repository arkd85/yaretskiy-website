import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight mb-8">About Dr. Yaretskiy</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          I am a board-certified psychiatrist dedicated to a model of care that values time, understanding, and the complexity of the human experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary/10">
             <img 
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1764784077464.jpg" 
                alt="Dr. Arkadiy Yaretskiy" 
                className="object-cover w-full h-full"
              />
          </div>
          <div className="flex flex-col justify-center space-y-6">
             <h2 className="text-2xl font-semibold">Education & Training</h2>
             <ul className="space-y-4 text-muted-foreground">
               <li className="border-l-2 border-accent pl-4">
                 <strong>Board Certification</strong><br/>
                 American Board of Psychiatry and Neurology
               </li>
               <li className="border-l-2 border-border pl-4">
                 <strong>Residency Training</strong><br/>
                 [Institution Name Placeholder]
               </li>
               <li className="border-l-2 border-border pl-4">
                 <strong>Medical Degree</strong><br/>
                 [Medical School Placeholder]
               </li>
             </ul>
             
             <h2 className="text-2xl font-semibold pt-6">My Approach</h2>
             <p className="text-muted-foreground">
               My practice is built on the belief that symptoms are often signposts pointing to deeper conflicts or needs. By combining the biological perspective of psychiatry with the depth of psychotherapy, we can address both the "what" and the "why" of your distress.
             </p>
          </div>
        </div>
        
        <div className="bg-surface border border-border rounded-3xl p-12 text-center">
           <h3 className="text-3xl font-semibold mb-6">Ready to work together?</h3>
           <div className="flex justify-center gap-4">
             <Button onClick={() => window.open('https://headway.co', '_blank')}>Book Consultation</Button>
           </div>
        </div>
      </div>
    </div>
  );
}