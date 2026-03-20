import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Plane, Utensils, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredDishes = [
    {
      name: "First Class Filet Mignon",
      description: "Aged 28 days, served with truffle mash and asparagus.",
      price: "$65",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Runway Sea Bass",
      description: "Pan-seared Chilean sea bass with a miso glaze.",
      price: "$48",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Lounge Signature Cocktail",
      description: "Aviation gin, maraschino, crème de violette, and lemon.",
      price: "$18",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      quote: "The perfect start to our vacation. The food was as spectacular as the runway views.",
      author: "Sarah Jenkins"
    },
    {
      quote: "Fine dining that actually delivers. Fast service without sacrificing any quality.",
      author: "Michael Chen"
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582260651817-4ef86cb4f039?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-background/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 animate-fade-in">
          <Plane className="h-16 w-16 mx-auto mb-6 text-primary animate-bounce-slow" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Airport </span> 
            <span className="text-gradient">Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto">
            Where Fine Dining Meets the Journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reservations">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105">
                Reserve a Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full border-white/20 text-white hover:bg-white/10 glass transition-all hover:scale-105">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Pre-Flight <span className="text-primary">Favorites</span></h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Curated selections from our executive chef, designed to elevate your palate before you take off.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="glass-card border-none overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 glass px-4 py-1 rounded-full font-bold text-primary">
                    {dish.price}
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{dish.name}</h3>
                  <p className="text-gray-400">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-card relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Elevating the <br/><span className="text-primary">Terminal Experience</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Born out of the frustration with standard airport fare, we set out to create an oasis for travelers. A place where the anxiety of travel fades, replaced by the comfort of exceptional service, an atmosphere of refined elegance, and a menu that competes with the world's best metropolitan dining establishments.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <Award className="h-8 w-8 text-primary" />
                  <h4 className="font-bold text-white text-lg">Award Winning</h4>
                  <p className="text-sm text-gray-500">Voted Best Airport Dining 2025</p>
                </div>
                <div className="flex flex-col gap-2">
                  < Clock className="h-8 w-8 text-primary" />
                  <h4 className="font-bold text-white text-lg">On Your Schedule</h4>
                  <p className="text-sm text-gray-500">Expedited service available</p>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Our Story
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Passenger <span className="text-primary">Reviews</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="glass p-10 rounded-2xl flex flex-col items-center relative">
                <div className="text-primary text-6xl absolute top-4 left-6 opacity-20">"</div>
                <p className="text-lg md:text-xl italic text-gray-300 mb-6 relative z-10">&quot;{test.quote}&quot;</p>
                <div className="h-1 w-10 bg-primary mb-4"></div>
                <p className="font-bold text-white uppercase tracking-wider">{test.author}</p>
                <p className="text-sm text-gray-500">Verified Traveler</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full point-events-none"></div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto glass p-12 md:p-16 rounded-[2rem] border-primary/20">
          <Utensils className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready for Departure?</h2>
          <p className="text-xl text-gray-400 mb-10">Ensure your pre-flight experience is seamless by securing your table in advance.</p>
          <Link to="/reservations">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
