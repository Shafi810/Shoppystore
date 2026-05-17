
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Organic Wildflower Honey',
    price: '$12.99',
    rating: 5,
    reviews: 42,
    isSale: false,
    imageGradient: 'from-amber-200 to-yellow-400'
  },
  {
    id: 2,
    name: 'Artisanal Sourdough Bread',
    price: '$6.50',
    originalPrice: '$8.00',
    rating: 4,
    reviews: 28,
    isSale: true,
    imageGradient: 'from-orange-200 to-amber-500'
  },
  {
    id: 3,
    name: 'Locally Roasted Coffee Beans',
    price: '$16.99',
    rating: 5,
    reviews: 104,
    isSale: false,
    imageGradient: 'from-stone-300 to-stone-600'
  },
  {
    id: 4,
    name: 'Farm Fresh Free-Range Eggs',
    price: '$5.99',
    rating: 4,
    reviews: 65,
    isSale: false,
    imageGradient: 'from-yellow-100 to-yellow-300'
  },
  {
    id: 5,
    name: 'Handcrafted Lavender Soap',
    price: '$8.50',
    originalPrice: '$10.00',
    rating: 5,
    reviews: 89,
    isSale: true,
    imageGradient: 'from-purple-200 to-fuchsia-400'
  },
  {
    id: 6,
    name: 'Organic Strawberry Jam',
    price: '$7.25',
    rating: 4,
    reviews: 34,
    isSale: false,
    imageGradient: 'from-red-200 to-rose-500'
  },
  {
    id: 7,
    name: 'Aged Cheddar Cheese',
    price: '$14.50',
    rating: 5,
    reviews: 56,
    isSale: false,
    imageGradient: 'from-yellow-200 to-orange-400'
  },
  {
    id: 8,
    name: 'Cold-Pressed Olive Oil',
    price: '$22.00',
    originalPrice: '$28.00',
    rating: 5,
    reviews: 112,
    isSale: true,
    imageGradient: 'from-green-200 to-emerald-500'
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Featured Products
            </h2>
            <p className="mt-2 text-gray-500">Handpicked favorites from our local makers.</p>
          </div>
          <a href="#" className="hidden sm:block text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            View All Products &rarr;
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Image Area with Badge */}
              <div className={`relative w-full h-48 bg-gradient-to-br ${product.imageGradient} rounded-xl mb-4 overflow-hidden shadow-inner flex items-center justify-center`}>
                <span className="text-white/40 font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick View
                </span>
                
                {product.isSale && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
                    SALE
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0 z-0"></span>
                    {product.name}
                  </a>
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between z-10 relative">
                  <div className="flex flex-col">
                    <span className="text-xl font-extrabold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white p-2.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Link */}
        <div className="mt-8 text-center sm:hidden border-t border-gray-100 pt-6">
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            View All Products &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
