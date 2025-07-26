import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import jersey1 from '../assets/jersey1.png'
import jersey2 from '../assets/jersey2.png'
import jersey3 from '../assets/jersey3.png'
import jersey4 from '../assets/jersey4.png'
import jersey5 from '../assets/jersey5.png'
import jersey6 from '../assets/jersey6.png'
import jersey7 from '../assets/jersey7.png'
import jersey8 from '../assets/jersey8.png'
import jersey9 from '../assets/jersey9.png'
import jersey10 from '../assets/jersey10.png'
import jersey11 from '../assets/jersey11.png'
import jersey12 from '../assets/jersey12.png'

const CollectionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const jerseyImages = {
    jersey1, jersey2, jersey3, jersey4, jersey5, jersey6,
    jersey7, jersey8, jersey9, jersey10, jersey11, jersey12
  };

  const jerseyData = [
    {
      id: 1,
      name: "#001-Chinese collar",
      price: "Rs 2,400.00",
      image: "jersey1",
      sale: true
    },
    {
      id: 2,
      name: "#002-Chinese collar",
      price: "Rs 2,400.00",
      image: "jersey2",
      new: true
    },
    {
      id: 3,
      name: "#003-Normal collar",
      price: "Rs 2,400.00",
      image: "jersey3",
      new: true
    },
    {
      id: 4,
      name: "#004-Round neck",
      price: "Rs 2,400.00",
      image: "jersey4",
      sale: true
    },
    {
      id: 5,
      name: "#005-Round neck",
      price: "Rs 2,400.00",
      image: "jersey5",
      new: true
    },
    {
      id: 6,
      name: "#006-Round neck",
      price: "Rs 2,400.00",
      image: "jersey6",
      new: true
    },
    {
      id: 7,
      name: "#007-Round neck",
      price: "Rs 2,400.00",
      image: "jersey7",
      new: true
    },
    {
      id: 8,
      name: "#008-Round neck",
      price: "Rs 2,400.00",
      image: "jersey8",
      new: true
    },
    {
      id: 9,
      name: "#009-Round neck",
      price: "Rs 2,400.00",
      image: "jersey9",
      new: true
    },
    {
      id: 10,
      name: "#010-Round neck",
      price: "Rs 2,400.00",
      image: "jersey10",
      sale: true
    },
    {
      id: 11,
      name: "#011-Round neck",
      price: "Rs 2,400.00",
      image: "jersey11",
      sale: true
    },
    {
      id: 12,
      name: "#012-Normal collar",
      price: "Rs 2,400.00",
      image: "jersey12",
      sale: true
    }
  ];

  const JerseyCard = ({ jersey }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      {/* Badge */}
      <div className="absolute top-2 left-2 z-10">
        {jersey.sale && (
          <span className="bg-black text-white text-xs px-2 py-1 rounded font-semibold">
            SALE
          </span>
        )}
        {jersey.new && (
          <span className="bg-black text-white text-xs px-2 py-1 rounded font-semibold">
            NEW
          </span>
        )}
      </div>

      {/* Jersey Images */}
      <div className="relative bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 h-48 flex items-center justify-center">
        <img 
          src={jerseyImages[jersey.image]} 
          alt={jersey.name}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-800 text-sm mb-2">
          {jersey.name}
        </h3>
        <p className="text-gray-900 font-semibold text-sm">
          {jersey.price}
        </p>
      </div>
    </div>
  );

  const totalPages = Math.ceil(jerseyData.length / 12);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Jersey Collections
          </h1>
          <p className="text-gray-600">
            Premium quality sports jerseys for every team
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {jerseyData.map((jersey) => (
            <JerseyCard key={jersey.id} jersey={jersey} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <button 
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            &lt;&lt;
          </button>

          <span className="px-3 py-2 text-sm">
            {currentPage}
          </span>

          <button 
            className="px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50"
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>

          <button 
            className="px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50"
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>

          <span className="px-2 text-gray-500">...</span>

          <button 
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            &gt;&gt;
          </button>

          <button 
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Results Info */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Showing {jerseyData.length} of {jerseyData.length} results
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;