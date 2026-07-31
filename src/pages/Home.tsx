import { Link } from 'react-router-dom'
import { images, galleryImages } from '../assets/images'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-image hero-tailoring-scene" aria-hidden="true">
          <div className="hero-tailoring-layer hero-tailoring-fabric"></div>
          <div className="hero-tailoring-layer hero-tailoring-stitch"></div>
          <div className="hero-tailoring-layer hero-tailoring-thread"></div>
          <video
            className="hero-video"
            src={images.heroVideo}
            poster={images.heroPoster}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="hero-tagline">EST. 2024</span>
          <h1>Welcome to Tailor Made</h1>
          <p className="hero-subtitle">
            Bespoke tailoring for business leaders, polished professionals, and distinguished style.
          </p>
          <div className="hero-buttons">
            <Link to="/men" className="btn btn-primary">
              Shop Men
            </Link>
            <Link to="/children" className="btn btn-secondary">
              Shop Children
            </Link>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image">
              <img src={images.tailorShop} alt="Tailor shop interior" />
            </div>
            <div className="intro-text">
              <span className="section-label">Our Craft</span>
              <h2>Tailored with Passion</h2>
              <p>
                Every garment is crafted with precision and care. Our master
                tailors bring decades of experience to create clothing that fits
                perfectly and feels extraordinary.
              </p>
              <p>
                From elegant suits for men to playful, durable outfits for
                children, we combine traditional tailoring with modern style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <span className="section-label">Why Us</span>
          <h2>The Tailor Made Difference</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✂</div>
              <h3>Premium Quality</h3>
              <p>Finest fabrics and craftsmanship for lasting comfort</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👔</div>
              <h3>Stylish Designs</h3>
              <p>Trendy and timeless styles for every occasion</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧵</div>
              <h3>Perfect Fit</h3>
              <p>Expert tailoring to complement every silhouette</p>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <span className="section-label">Collections</span>
          <h2>Shop by Category</h2>
          <div className="category-grid">
            <Link to="/men" className="category-card">
              <img
                src={images.men.hero}
                alt="Men's collection"
                className="category-image"
              />
              <div className="category-overlay">
                <h3>Men's Collection</h3>
                <p>Explore suits, shirts & more</p>
                <span className="category-link">Shop Now →</span>
              </div>
            </Link>
            <Link to="/children" className="category-card">
              <img
                src={images.children.hero}
                alt="Children's collection"
                className="category-image"
              />
              <div className="category-overlay">
                <h3>Children's Collection</h3>
                <p>Discover kids' fashion</p>
                <span className="category-link">Shop Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <span className="section-label">Gallery</span>
          <h2>The Art of Tailoring</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-caption">
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
