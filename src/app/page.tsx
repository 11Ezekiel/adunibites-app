import FeaturedDishes from "./components/FeaturedDishes";
import CategoriesSection from "./components/CategoriesSection";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServiceSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 py-4">
        <FeaturedDishes />
      </section>

      <section id="categories" className="max-w-6xl mx-auto px-4 py-4">
        <CategoriesSection />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-4">
        <ServicesSection />
      </section>

      <section id="testimonial" className="max-w-6xl mx-auto px-4 py-4">
        <Testimonials />
      </section>

      <section id="footer" className="max-w-6xl mx-auto px-4 py-4">
        <Footer />
      </section>
    </div>
  );
}
