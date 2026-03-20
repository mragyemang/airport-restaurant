import { Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
              <span className="text-primary">Airport</span> Restaurant
            </h3>
            <p className="text-gray-400 max-w-sm mb-6">
              Where fine dining meets the journey. Experience culinary excellence before your next flight.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/reservations" className="text-gray-400 hover:text-primary transition-colors">Reservations</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sunyani Airport</li>
              <li>Sunyani, Ghana</li>
              <li>+233 593 457 520</li>
              <li>info@airportrestaurant.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Airport Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
