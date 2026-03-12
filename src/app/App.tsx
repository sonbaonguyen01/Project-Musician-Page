import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { ContactForm } from "./components/ContactForm";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero
        onScrollToDemo={() => scrollToSection("#portfolio")}
        onScrollToContact={() => scrollToSection("#contact")}
      />
      <About />
      <Portfolio />
      <Services />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Bắt đầu dự án của bạn
            </h2>
            <p className="text-gray-400 text-2xl leading-relaxed">
              Cùng nhau tạo nên những giai điệu tuyệt vời!
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;