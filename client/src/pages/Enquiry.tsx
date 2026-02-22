import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/mockData";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Enquiry() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { email, phone, address, whatsapp } = contactInfo;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const text = `Hi, I am ${values.name}. I am interested in ${values.service}. %0A%0ADetails:%0A${values.message}%0A%0AContact: ${values.phone} / ${values.email}`;
    const whatsappUrl = `https://wa.me/${whatsapp}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You can send your enquiry directly via WhatsApp now.",
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Discuss Your Project</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a single window replacement or a full commercial installation, 
              our team is ready to help you find the perfect solution.
            </p>

            <div className="space-y-6 mb-12">
              <a href={`tel:+91${phone}`} className="block group">
                <Card className="glass-card border-none transition-all duration-300 group-hover:translate-x-2">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-muted-foreground">+91 {phone}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href={`mailto:${email}`} className="block group">
                <Card className="glass-card border-none transition-all duration-300 group-hover:translate-x-2">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-muted-foreground">{email}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a 
                href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <Card className="glass-card border-none transition-all duration-300 group-hover:translate-x-2">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Visit Us</h3>
                      <p className="text-muted-foreground">{address}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send an Enquiry</CardTitle>
                <CardDescription>Fill out the form below to contact us via WhatsApp.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-white/50 backdrop-blur-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="bg-white/50 backdrop-blur-sm" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} className="bg-white/50 backdrop-blur-sm" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/50 backdrop-blur-sm">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="windows">uPVC Windows</SelectItem>
                              <SelectItem value="doors">Aluminum Doors</SelectItem>
                              <SelectItem value="partitions">Office Partitions</SelectItem>
                              <SelectItem value="glass">Custom Glass Work</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project requirements..." 
                              className="min-h-[120px] bg-white/50 backdrop-blur-sm" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full rounded-full h-12 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                          Opening WhatsApp...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send via WhatsApp <MessageCircle className="h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
