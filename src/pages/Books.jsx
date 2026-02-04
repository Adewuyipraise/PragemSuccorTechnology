import React from 'react';
import { Book, Star, ShoppingCart } from 'lucide-react';

const Books = () => {
  // Mock data for books
  const books = [
    {
      id: 1,
      title: "The Art of Visual Storytelling",
      author: "Pragem Publications",
      price: "₦5,000",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive guide to understanding the power of visual media."
    },
    {
      id: 2,
      title: "Digital Broadcasting Essentials",
      author: "Pragem Editorial Team",
      price: "₦4,500",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Everything you need to know about modern broadcasting techniques."
    },
    {
      id: 3,
      title: "Creative Writing for Screen",
      author: "Dr. A. B. Johnson",
      price: "₦3,500",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Mastering the script format and storytelling structures."
    },
    {
      id: 4,
      title: "Media Entrepreneurship",
      author: "Pragem Business Series",
      price: "₦6,000",
      image: "https://images.unsplash.com/photo-1554774853-719586f8c277?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Building a successful business in the competitive media landscape."
    }
  ];

  return (
    <div className="bg-warmGray min-h-screen">
      <div className="bg-white shadow-sm py-12">
        <div className="container mx-auto px-4 text-center">
          <Book className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Books & Publications</h1>
          <p className="text-xl text-gray-600">Discover our collection of inspiring and educational reads.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{book.author}</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{book.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-gray-900">{book.price}</span>
                  <button className="flex items-center px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-primary transition-colors">
                    <ShoppingCart size={16} className="mr-1" /> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to publish with us?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We are always looking for new voices. If you have a manuscript or an idea for a book, we would love to hear from you.
          </p>
          <button className="px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-amber-800 transition-colors">
            Submit Manuscript
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
