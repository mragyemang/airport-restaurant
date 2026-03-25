import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. Our team will get back to you shortly.");
  };

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you have a question about our menu, need assistance with a reservation, or want to provide feedback on your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sunyani Airport<br/>
                    Post-Security<br/>
                    Sunyani, Ghana
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Hours</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Open Daily<br/>
                    8:00 AM - 7:00 PM<br/>
                    (365 days a year)
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +233 593 457 520<br/>
                    Reservations: Ext 1<br/>
                    Events: Ext 2
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Email</h3>
                  <p className="text-primary text-sm leading-relaxed hover:underline cursor-pointer">
                    info@airportrestaurant.com
                  </p>
                  <p className="text-primary text-sm leading-relaxed hover:underline cursor-pointer">
                    events@airportrestaurant.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 w-full rounded-2xl overflow-hidden glass border-white/5 relative group">
              <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-500 z-10 flex items-center justify-center">
                <div className="glass px-6 py-3 rounded-full font-bold text-white flex items-center gap-2 shadow-xl backdrop-blur-md">
                  <MapPin className="h-5 w-5 text-primary" /> View on Terminal Map
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Terminal Map" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 rounded-[2rem] border-primary/20 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                  <Input id="firstName" required className="bg-black/40 border-white/10 text-white focus:border-primary h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                  <Input id="lastName" required className="bg-black/40 border-white/10 text-white focus:border-primary h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <Input id="email" type="email" required className="bg-black/40 border-white/10 text-white focus:border-primary h-12" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <select 
                  id="subject"
                  className="flex h-12 w-full items-center justify-between rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="general">General Inquiry</option>
                  <option value="reservation">Reservation Question</option>
                  <option value="feedback">Experience Feedback</option>
                  <option value="events">Private Events</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <Textarea 
                  id="message" 
                  required 
                  className="bg-black/40 border-white/10 text-white focus:border-primary min-h-[150px] resize-none" 
                  placeholder="How can we help you today?"
                />
              </div>
              
              <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-[1.02] shadow-xl shadow-primary/20">
                Send Message
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
