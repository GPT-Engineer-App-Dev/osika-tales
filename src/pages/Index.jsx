
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const blogPosts = [
  {
    title: "The Future of AI",
    description: "Exploring the potential impact of artificial intelligence on society and technology.",
    date: "2023-05-15",
  },
  {
    title: "Building Ethical AI Systems",
    description: "Discussing the importance of ethics in AI development and implementation.",
    date: "2023-06-02",
  },
  {
    title: "AI in Healthcare",
    description: "Examining how AI is revolutionizing medical diagnosis and treatment.",
    date: "2023-06-20",
  },
];

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
        <div className="flex items-center space-x-6 mb-12">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/antonosika.png" alt="Anton Osika" />
            <AvatarFallback>AO</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold mb-2">Anton Osika's Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on AI, technology, and the future of humanity
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="group">
                  Read More 
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
        