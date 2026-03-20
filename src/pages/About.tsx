import { Plane, Compass, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600565159654-20b1713d052a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-32">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Compass className="h-6 w-6 text-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
              The Journey <br/> <span className="text-gradient">Begins Here</span>
            </h1>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in 2018, Airport Restaurant was born from a simple observation: the modern traveler deserves a dining experience that matches the excitement of their destination. 
              </p>
              <p>
                Too often, airport dining is viewed as a necessary compromise. We challenged that notion by bringing Michelin-star techniques, globally sourced ingredients, and spectacular runway views together under one roof.
              </p>
              <p>
                Whether you're celebrating the start of a vacation or decompressing after a successful business trip, our meticulously crafted menu and pristine atmosphere provide the perfect departure point.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <img 
              src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-2xl">
              <p className="text-2xl font-serif italic text-white mb-2">&quot;Redefining the wait before the gate.&quot;</p>
              <p className="text-primary font-bold uppercase tracking-wider text-sm">- Culinary Review 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Chef */}
      <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative h-[500px]">
              <div className="absolute inset-0 rounded-2xl border-4 border-primary/20 translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Executive Chef"
                className="w-full h-full object-cover rounded-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Meet Executive Chef <br/><span className="text-primary">Marcus Vance</span></h2>
              <div className="flex gap-1 text-primary mb-6">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                With over two decades traversing the globe's culinary capitals—from the bustling markets of Tokyo to the timeless bistros of Paris—Chef Vance brings an international flair to every dish. His philosophy centers on taking classical techniques and infusing them with contemporary, unexpected flavors.
              </p>
              <Link to="/menu">
                <Button variant="outline" className="border-primary/50 text-white hover:bg-primary/20 hover:text-white glass rounded-full px-8">
                  Discover His Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Plane className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The <span className="text-primary">Experience</span></h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">A visual journey through our dining room, lounge, and culinary creations.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="relative h-72 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none mix-blend-overlay"></div>
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
