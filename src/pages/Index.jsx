
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-8">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Acme Inc</span>
        </NavLink>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className="text-sm font-medium hover:text-primary">
            Home
          </NavLink>
          {/* Add more navigation items as needed */}
        </nav>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6 mb-12">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/antonosika.png" alt="Anton Osika" />
            <AvatarFallback>AO</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Anton Osika</h1>
            <p className="text-xl text-muted-foreground">
              AI Researcher and Technology Enthusiast
            </p>
          </div>
        </div>

        <div className="mt-12">
          <img 
            src="/placeholder.svg" 
            alt="Featured Image" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground">
            Exploring the intersection of artificial intelligence and human potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
        