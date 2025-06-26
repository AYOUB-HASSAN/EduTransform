import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon } from '@heroicons/react/24/outline';

const AnatomyViewer = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedPart, setSelectedPart] = useState(null);

  const anatomyParts = [
    { id: 'heart', name: 'القلب', x: 50, y: 30, description: 'عضلة القلب تضخ الدم إلى جميع أجزاء الجسم' },
    { id: 'lungs', name: 'الرئتان', x: 45, y: 25, description: 'الرئتان مسؤولتان عن تبادل الأكسجين وثاني أكسيد الكربون' },
    { id: 'liver', name: 'الكبد', x: 55, y: 45, description: 'الكبد ينقي الدم ويفرز الصفراء' },
    { id: 'stomach', name: 'المعدة', x: 48, y: 50, description: 'المعدة تهضم الطعام بواسطة الأحماض' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        مشاهد التشريح التفاعلية
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden" style={{ height: '500px' }}>
            <motion.div
              className="relative w-full h-full"
              animate={{ scale: zoom }}
              transition={{ duration: 0.3 }}
            >
              {/* Human body silhouette */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
              >
                {/* Body outline */}
                <ellipse cx="50" cy="80" rx="15" ry="18" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
                <ellipse cx="50" cy="50" rx="20" ry="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
                <circle cx="50" cy="15" r="8" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
                
                {/* Anatomy parts */}
                {anatomyParts.map((part) => (
                  <circle
                    key={part.id}
                    cx={part.x}
                    cy={part.y}
                    r="3"
                    fill={selectedPart === part.id ? "#EF4444" : "#10B981"}
                    className="cursor-pointer transition-all duration-300 hover:r-4"
                    onClick={() => setSelectedPart(part.id)}
                  />
                ))}
              </svg>
            </motion.div>
            
            {/* Zoom controls */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              <button
                onClick={() => setZoom(Math.min(zoom + 0.2, 2))}
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <MagnifyingGlassPlusIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setZoom(Math.max(zoom - 0.2, 0.5))}
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <MagnifyingGlassMinusIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            أجزاء الجسم
          </h3>
          <div className="space-y-3">
            {anatomyParts.map((part) => (
              <motion.div
                key={part.id}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedPart === part.id
                    ? 'bg-primary-100 dark:bg-primary-900 border-primary-300 dark:border-primary-700'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedPart(part.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  {part.name}
                </h4>
                {selectedPart === part.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    {part.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomyViewer;