import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-muted-foreground/20">404</h1>
        <p className="text-2xl font-medium text-foreground">Page Not Found</p>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}