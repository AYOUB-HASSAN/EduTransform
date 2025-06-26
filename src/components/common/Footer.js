import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">EduTransform Medical</h3>
                <p className="text-sm text-gray-400">منصة التعلم الطبي</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              منصة تعليمية مبتكرة مصممة خصيصاً لطلاب الطب في السودان، تهدف إلى تسهيل 
              عملية التعلم وتوفير موارد تعليمية عالية الجودة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  لوحة التحكم
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">
                  الأدوات الطبية
                </Link>
              </li>
              <li>
                <Link to="/peer-hub" className="text-gray-400 hover:text-white transition-colors">
                  التعلم التشاركي
                </Link>
              </li>
              <li>
                <Link to="/educast" className="text-gray-400 hover:text-white transition-colors">
                  EduCast
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">المواد الدراسية</h4>
            <ul className="space-y-2 text-gray-400">
              <li>التشريح</li>
              <li>علم الأمراض</li>
              <li>علم الأدوية</li>
              <li>الطب الباطني</li>
              <li>الجراحة</li>
              <li>طب الأطفال</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">
                  كلية الطب - جامعة الجزيرة<br />
                  ود مدني، السودان
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:ayoub.hassan@medical.edu" className="text-sm hover:text-white transition-colors">
                  ayoub.hassan@medical.edu
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+249123456789" className="text-sm hover:text-white transition-colors">
                  +249 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <GlobeAltIcon className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="https://github.com/AYOUB-HASSAN/edutransform-medical" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EduTransform Medical. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                تطوير: أيوب حسن - كلية الطب، جامعة الجزيرة
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;