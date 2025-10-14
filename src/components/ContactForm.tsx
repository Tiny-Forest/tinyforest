import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/siteConfig";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${siteConfig.company.email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
              {siteConfig.contact.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {siteConfig.contact.title}
            </h2>
            <p className="text-muted-foreground mb-8">
              {siteConfig.contact.description}
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                  PHONE
                </p>
                {siteConfig.company.phone.map((phone, index) => (
                  <p key={index} className="text-foreground">{phone}</p>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                  EMAIL
                </p>
                <p className="text-foreground">{siteConfig.company.email}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                  ADDRESS
                </p>
                <p className="text-foreground">
                  {siteConfig.company.address.line1}<br />
                  {siteConfig.company.address.line2}<br />
                  {siteConfig.company.address.line3}<br />
                  {siteConfig.company.address.line4}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder={siteConfig.contact.formFields.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-muted-foreground/35 border-0"
            />
            <Input
              type="tel"
              name="phone"
              placeholder={siteConfig.contact.formFields.phone}
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-muted-foreground/35 border-0"
            />
            <Input
              type="email"
              name="email"
              placeholder={siteConfig.contact.formFields.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-muted-foreground/35 border-0"
            />
            <Textarea
              name="message"
              placeholder={siteConfig.contact.formFields.message}
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-muted-foreground/35 border-0 resize-none"
            />
            <Button 
              type="submit"
              className="bg-accent/100 hover:bg-accent/90 text-foreground font-semibold"
            >
              {siteConfig.contact.submitButton}
            </Button>
            </form>
        </div>
      </div>
    </section>
  );
};
