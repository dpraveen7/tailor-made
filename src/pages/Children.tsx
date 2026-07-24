import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import './Children.css'

function Children() {
  const products = [
    {
      id: 1,
      name: 'Colorful T-Shirt Set',
      category: 'T-Shirts',
      age: '3-5 years',
      image: images.children.hero,
    },
    {
      id: 2,
      name: 'Comfortable Jeans',
      category: 'Pants',
      age: '5-7 years',
      image: images.children.vintage,
    },
    {
      id: 3,
      name: 'Cotton Hoodie',
      category: 'Hoodies',
      age: '6-8 years',
      image: images.children.hero,
    },
    {
      id: 4,
      name: 'Playful Shorts',
      category: 'Shorts',
      age: '4-6 years',
      image: images.children.vintage,
    },
    {
      id: 5,
      name: 'Dress with Patterns',
      category: 'Dresses',
      age: '5-7 years',
      image: images.children.hero,
    },
    {
      id: 6,
      name: 'Sneakers for Kids',
      category: 'Footwear',
      age: 'All ages',
      image: images.children.vintage,
    },
    {
      id: 7,
      name: 'Winter Jacket',
      category: 'Jackets',
      age: '6-8 years',
      image: images.children.hero,
    },
    {
      id: 8,
      name: 'Cap and Accessories Set',
      category: 'Accessories',
      age: 'All ages',
      image: images.children.vintage,
    },
  ]

  return (
    <div className="children-page">
      <section className="page-header">
        <div className="page-header-image">
          <img src={images.children.hero} alt="Children's collection" />
          <div className="page-header-overlay"></div>
        </div>
        <div className="container page-header-content">
          <span className="section-label">Collection</span>
          <h1>Children's Collection</h1>
          <p>Fun, comfortable, and stylish clothes for your little ones</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Featured</span>
            <h2>Featured Kids' Wear</h2>
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
                  <p className="product-age">Age: {product.age}</p>
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
              <img src={images.sewingMachine} alt="Sewing machine" />
            </div>
            <div className="tailoring-text">
              <span className="section-label">Comfort First</span>
              <h2>Designed for Active Kids</h2>
              <p>
                Our children's clothing is made with soft, durable fabrics that
                can keep up with every adventure while looking stylish.
              </p>
              <Link to="/men" className="btn btn-primary">
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Shopping for adults?</h2>
          <p>Check out our men's collection</p>
          <Link to="/men" className="btn btn-primary">
            Shop Men
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Children
