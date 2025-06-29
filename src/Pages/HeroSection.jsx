import React from 'react';
import { 
  Check, 
  Phone, 
  MessageCircle, 
  Star, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Clock 
} from 'lucide-react';


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
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
                    Premium Sportswear
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Leading manufacturer of high-quality sportswear in Sri Lanka. We specialize in custom jerseys, team uniforms, and athletic apparel for universities, schools, companies, and sports teams.
                  </p>
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-400 ml-2">4.9/5 Customer Rating</span>
                  </div>
                </div>
                
                {/* Social Media */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    'Home',
                    'About Us',
                    'Our Products',
                    'Custom Orders',
                    'Bulk Orders',
                    'Gallery',
                    'Testimonials',
                    'Contact Us'
                  ].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex items-center group">
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 mr-2" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products & Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Products & Services</h4>
                <ul className="space-y-3">
                  {[
                    'Sports Jerseys',
                    'Team Uniforms',
                    'Track Suits',
                    'School Uniforms',
                    'Corporate Wear',
                    'Custom Designs',
                    'Bulk Manufacturing',
                    'International Shipping'
                  ].map((service, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex items-center group">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{service}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
                <div className="space-y-4">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Our Location</div>
                      <div className="text-sm text-gray-300">123 Industrial Zone<br />Colombo 10, Sri Lanka</div>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Phone Numbers</div>
                      <div className="text-sm text-gray-300">
                        <div>+94 23 22 22 220</div>
                        <div>+94 71 99 99 989 (WhatsApp)</div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Email Address</div>
                      <div className="text-sm text-gray-300">
                        <div>info@premiumsportswear.lk</div>
                        <div>orders@premiumsportswear.lk</div>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">
                    <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Business Hours</div>
                      <div className="text-sm text-gray-300">
                        <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                        <div>Saturday: 8:00 AM - 4:00 PM</div>
                        <div>Sunday: Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
   
  );
};

export default HeroSection;