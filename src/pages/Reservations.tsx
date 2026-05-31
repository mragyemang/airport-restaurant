import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Calendar, Clock, Users, Mail, Phone, User, Plane } from 'lucide-react';

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

// Schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  guests: z.string().min(1, { message: "Please specify number of guests." }),
});

export default function Reservations() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to an API
    console.log(values);
    alert(`Reservation Request Submitted! We will contact you soon to confirm your table for ${values.guests} on ${values.date} at ${values.time}.`);
    form.reset();
  }

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left column: Info */}
        <div className="lg:w-1/3 animate-fade-in space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              <span className="text-primary">Secure</span> Your Table
            </h1>
            <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg">
              Guarantee an exceptional dining experience before your flight. We highly recommend booking at least 24 hours in advance.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl border-white/5 space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Important Information</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <span>Please allow at least 90 minutes for dining before proceeding to your gate.</span>
              </li>
              <li className="flex gap-3">
                <Users className="w-6 h-6 text-primary shrink-0" />
                <span>For parties larger than 6, please contact the restaurant directly.</span>
              </li>
              <li className="flex gap-3">
                <Plane className="w-6 h-6 text-primary shrink-0" />
                <span>Located in Terminal 4, post-security. Valid boarding pass required.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="lg:w-2/3 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="glass-card p-8 md:p-10 rounded-[2rem] border-primary/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Reservation Details</h2>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                    <Input placeholder="Prince Agyemang" className="pl-10 bg-black/40 border-white/10 text-white focus:border-primary h-12" {...form.register("name")} />
                  </div>
                  {form.formState.errors.name && <p className="text-sm text-red-400">{form.formState.errors.name.message as string}</p>}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                    <Input type="email" placeholder="prince@example.com" className="pl-10 bg-black/40 border-white/10 text-white focus:border-primary h-12" {...form.register("email")} />
                  </div>
                  {form.formState.errors.email && <p className="text-sm text-red-400">{form.formState.errors.email.message as string}</p>}
                </div>

                {/* Phone field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                    <Input type="tel" placeholder="(555) 123-4567" className="pl-10 bg-black/40 border-white/10 text-white focus:border-primary h-12" {...form.register("phone")} />
                  </div>
                  {form.formState.errors.phone && <p className="text-sm text-red-400">{form.formState.errors.phone.message as string}</p>}
                </div>

                {/* Guests field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Number of Guests</label>
                  <select 
                    {...form.register("guests")}
                    className="flex h-12 w-full items-center justify-between rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                  </select>
                  {form.formState.errors.guests && <p className="text-sm text-red-400">{form.formState.errors.guests.message as string}</p>}
                </div>

                {/* Date field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                    <Input type="date" className="pl-10 bg-black/40 border-white/10 text-white focus:border-primary h-12 [color-scheme:dark]" {...form.register("date")} />
                  </div>
                  {form.formState.errors.date && <p className="text-sm text-red-400">{form.formState.errors.date.message as string}</p>}
                </div>

                {/* Time field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                    <Input type="time" className="pl-10 bg-black/40 border-white/10 text-white focus:border-primary h-12 [color-scheme:dark]" {...form.register("time")} />
                  </div>
                  {form.formState.errors.time && <p className="text-sm text-red-400">{form.formState.errors.time.message as string}</p>}
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-[1.02] shadow-xl shadow-primary/20">
                  Request Reservation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
