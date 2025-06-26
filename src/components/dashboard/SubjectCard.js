import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PlayIcon, 
  DocumentTextIcon, 
  BookOpenIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const SubjectCard = ({ subject, progress, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="medical-card overflow-hidden group"
    >
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${subject.gradient} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white opacity-10 rounded-full translate-x-8 translate-y-8"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <subject.icon className="w-10 h-10 text-white" />
            <div className="text-left ltr">
              <div className="text-sm opacity-90">{subject.nameEn}</div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
          <p className="text-sm opacity-90 leading-relaxed">{subject.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              التقدم
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full bg-gradient-to-r ${subject.gradient}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-1">
              <BookOpenIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{subject.lessons}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">دروس</div>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-1">
              <PlayIcon className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{subject.videos}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">فيديو</div>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-1">
              <DocumentTextIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{subject.pdfs}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">ملف</div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/subject/${subject.id}`}
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group-hover:bg-primary-100 group-hover:text-primary-700 dark:group-hover:bg-primary-900 dark:group-hover:text-primary-300"
        >
          <ChartBarIcon className="w-5 h-5 ml-2" />
          ادخل إلى المادة
        </Link>
      </div>
    </motion.div>
  );
};

export default SubjectCard;