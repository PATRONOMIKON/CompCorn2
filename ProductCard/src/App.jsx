import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Level Up Your Setup"
        subtitle="Discover quality gaming and tech accessories at ComponentCorner."
        buttonText="Shop Now"
      />

      <main>
        <section id="products" className="products-section">
          <h2>Featured Products</h2>

          <div className="product-grid">
            <ProductCard
              name="Mechanical Gaming Keyboard"
              price="89.99"
              image="https://placehold.co/600x400/667eea/ffffff?text=Gaming+Keyboard"
              description="A responsive mechanical keyboard built for gaming and everyday use."
            />

            <ProductCard
              name="Wireless Gaming Mouse"
              price="59.99"
              image="https://placehold.co/600x400/764ba2/ffffff?text=Gaming+Mouse"
              description="A lightweight wireless mouse with accurate tracking and long battery life."
            />

            <ProductCard
              name="Gaming Headset"
              price="79.99"
              image="https://placehold.co/600x400/4f46e5/ffffff?text=Gaming+Headset"
              description="Immersive sound and a comfortable design for gaming, music, and calls."
            />
          </div>
        </section>
      </main>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;