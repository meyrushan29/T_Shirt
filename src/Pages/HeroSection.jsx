import React from 'react';
import { Check, Phone, MessageCircle } from 'lucide-react';


const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-red-500 transform rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* QR Code and Features Section */}
            <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                {/* QR Code */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white p-2 rounded-lg">
                    <div className="w-full h-full bg-black rounded flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-px">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quality Features */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium">Export Quality Fabric</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium">High Quality Design</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium">High Definition Print Quality</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium">Best price in Market</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium">Any Design, Any colours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Red Section */}
            <div className="bg-red-600 p-6 lg:p-8 rounded-lg shadow-2xl">
              <h1 className="text-white text-xl lg:text-2xl font-bold mb-3 tracking-wide leading-tight">
                PREMIUM SPORTSWEAR MANUFACTURES
              </h1>
              <p className="text-white text-base lg:text-lg mb-3">
                Leading sports wear manufacturer in Sri Lanka
              </p>
              <h2 className="text-white text-lg lg:text-xl font-bold mb-6 leading-tight">
                University | Schools | Company | Sports
              </h2>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-lg lg:text-xl font-bold">071 99 99 989</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-lg lg:text-xl font-bold">023 22 22 220</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative order-1 lg:order-2">
            <div className="flex flex-col items-center space-y-6">
              
              {/* Shop Now Button */}
              <div className="w-full flex justify-center lg:justify-end mb-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200 shadow-lg transform hover:scale-105">
                  SHOP NOW
                </button>
              </div>

              {/* Product Showcase */}
              <div className="w-full max-w-sm mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  {/* Jersey 1 - Blue */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-lg transform group-hover:scale-105 transition-all duration-200 shadow-lg">
                      <div className="aspect-square bg-blue-700/50 rounded-lg flex items-center justify-center border-2 border-blue-400/30">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm mb-1">SPORTS</div>
                          <div className="text-blue-200 text-xs">JERSEY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Jersey 2 - Yellow */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-lg transform group-hover:scale-105 transition-all duration-200 shadow-lg">
                      <div className="aspect-square bg-yellow-600/50 rounded-lg flex items-center justify-center border-2 border-yellow-300/30">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm mb-1">SPORTS</div>
                          <div className="text-yellow-100 text-xs">JERSEY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Jersey 3 - Black */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-lg transform group-hover:scale-105 transition-all duration-200 shadow-lg">
                      <div className="aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center border-2 border-gray-500/30">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm mb-1">SPORTS</div>
                          <div className="text-gray-300 text-xs">JERSEY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Jersey 4 - Red */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-lg transform group-hover:scale-105 transition-all duration-200 shadow-lg">
                      <div className="aspect-square bg-red-700/50 rounded-lg flex items-center justify-center border-2 border-red-400/30">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm mb-1">SPORTS</div>
                          <div className="text-red-200 text-xs">JERSEY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements - Non-overlapping */}
            <div className="absolute -z-10 top-0 right-0 w-16 h-20 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg transform rotate-12"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-12 h-16 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-lg transform -rotate-12"></div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-600/20 to-transparent"></div>
    </div>
  );
};

export default HeroSection;