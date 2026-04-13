import { useState } from 'react';
import type { FC } from 'react';
import styles from './ProductPage.module.css';

const ProductPage: FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const product = {
    name: "Aura Noise-Cancelling Headphones",
    price: 299.99,
    description: "Experience premium sound quality with our latest noise-cancelling technology. Designed for comfort and durability.",
    features: [
      "Up to 40 hours of battery life",
      "Active Noise Cancellation (ANC)",
      "Built-in microphone for calls",
      "Ultra-soft memory foam earcups"
    ],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000",
      "https://images.unsplash.com/photo-1491929007750-dce8ba77e610?q=80&w=1000"
    ]
  };

  const handleAddToCart = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image Gallery */}
          <div className={styles.gallery}>
            <div className={styles.mainImageWrapper}>
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className={styles.mainImage}
              />
            </div>
            <div className={styles.thumbnails}>
              {product.images.map((img, i) => (
                <div 
                  key={i} 
                  className={`${styles.thumbnail} ${activeImage === i ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} className={styles.thumbnailImg} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className={styles.details}>
            <span className={styles.brand}>AUDIO PREMIUM</span>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.price}>${product.price}</div>
            <p className={styles.description}>{product.description}</p>
            
            <ul className={styles.features}>
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className={styles.actions}>
              <div className={styles.quantitySelector}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className={styles.quantityBtn}
                >
                  -
                </button>
                <span className={styles.quantityValue}>{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className={styles.quantityBtn}
                >
                  +
                </button>
              </div>
              <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className={styles.notification}>
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductPage;
