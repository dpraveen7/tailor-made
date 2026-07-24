import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import './Men.css'

function Men() {
  const products = [
    {
      id: 1,
      name: 'Classic Oxford Shirt',
      category: 'Shirts',
      image: images.men.shirt,
    },
    {
      id: 2,
      name: 'Slim Fit Chinos',
      category: 'Pants',
      image: images.men.pants,
    },
    {
      id: 3,
      name: 'Wool Blend Blazer',
      category: 'Jackets',
      image: images.men.blazer,
    },
    {
      id: 4,
      name: 'Premium Denim Jeans',
      category: 'Jeans',
      image: images.men.suits,
    },
    {
      id: 5,
      name: 'Casual Polo Shirt',
      category: 'Shirts',
      image: images.fabric,
    },
    {
      id: 6,
      name: 'Tailored Dress Pants',
      category: 'Pants',
      image: images.men.pants,
    },
    {
      id: 7,
      name: 'Formal Suit Set',
      category: 'Suits',
      image: images.men.hero,
    },
    {
      id: 8,
      name: 'Window Display Blazer',
      category: 'Jackets',
      image: images.men.suits,
    },
  ]

  return (
    <div className="men-page">
      <section className="page-header">
        <div className="page-header-image">
          <img src={images.men.hero} alt="Men's collection" />
          <div className="page-header-overlay"></div>
        </div>
        <div className="container page-header-content">
          <span className="section-label">Collection</span>
          <h1>Men's Collection</h1>
          <p>Discover premium suits, shirts, and tailoring for the modern gentleman</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Featured</span>
            <h2>Featured Men's Wear</h2>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <button className="add-to-cart">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tailoring-banner">
        <div className="container">
          <div className="tailoring-grid">
            <div className="tailoring-image">
              <img src={images.tailorShop} alt="Tailor at work" />
            </div>
            <div className="tailoring-text">
              <span className="section-label">Bespoke</span>
              <h2>Custom Tailoring Available</h2>
              <p>
                Get the perfect fit with our bespoke tailoring services. Our
                master tailors will create a garment that is uniquely yours.
              </p>
              <Link to="/children" className="btn btn-primary">
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Looking for something else?</h2>
          <p>Check out our children's collection</p>
          <Link to="/children" className="btn btn-primary">
            Shop Children
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Men
