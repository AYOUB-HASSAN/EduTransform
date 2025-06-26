import React from 'react';
import { motion } from 'framer-motion';

const Flashcard = ({ question, answer, showAnswer, onFlip }) => {
  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer"
      onClick={onFlip}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 medical-card p-6 flex items-center justify-center"
        initial={false}
        animate={{ rotateY: showAnswer ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className={`absolute inset-0 p-6 flex items-center justify-center rounded-2xl ${
            showAnswer ? 'bg-green-50 dark:bg-green-900' : 'bg-blue-50 dark:bg-blue-900'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {showAnswer ? 'الإجابة' : 'السؤال'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {showAnswer ? answer : question}
            </p>
          </div>
        </div>
        
        <div
          className="absolute inset-0 p-6 flex items-center justify-center bg-green-50 dark:bg-green-900 rounded-2xl"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              الإجابة
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400">
        انقر للكشف عن {showAnswer ? 'السؤال' : 'الإجابة'}
      </div>
    </motion.div>
  );
};

export default Flashcard;