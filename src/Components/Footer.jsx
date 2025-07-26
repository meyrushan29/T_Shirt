import React from 'react';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import footerimg from '../assets/Pandora -02-01.png'

const Footer = () => {
  return (
    <footer className="  ">
      <div className="w-full mx-auto">
        <div className="bg-white   p-6 border-2  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Logo and Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                        src={footerimg} 
                        alt=" image" 
                        className="w-72 h-full object-cover rounded-lg shadow-lg" 
                      />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800 text-lg">Contact us</h3>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone size={16} />
                  <span className="font-mono">0772345678</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone size={16} />
                  <span className="font-mono">0215678908</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail size={16} />
                  <span>pandara@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium">Export Quality Fabric</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium">High Quality Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium">High Definition Print Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium">Best price in Market</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium">Any Design, Any colours</span>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white border-2 border-gray-800 p-4 rounded-lg">
                <div className="w-24 h-24 bg-gray-900 flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1">
                    {[...Array(64)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 ${
                          Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              @copyrights2025_pandara
            </p>
          </div>
        </div>

         
      </div>
    </footer>
  );
};

export default Footer;