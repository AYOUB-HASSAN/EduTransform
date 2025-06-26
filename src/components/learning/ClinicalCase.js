import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ClinicalCase = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const clinicalCase = {
    title: 'حالة إكلينيكية: ألم في الصدر',
    scenario: `
      مريض يبلغ من العمر 55 عاماً يراجع العيادة يشكو من ألم في الصدر مستمر منذ 30 دقيقة.
      الألم حاد وضاغط، ينتشر إلى الذراع الأيسر والفك. المريض يبدو متعرقاً وقلقاً.
      التاريخ المرضي: ارتفاع ضغط الدم، السكري، التدخين.
      العلامات الحيوية: ضغط الدم 160/95، النبض 110، الحرارة 37.2°م
    `,
    question: 'ما هو التشخيص الأكثر احتمالاً؟',
    options: [
      {
        id: 'a',
        text: 'التهاب الغشاء التاموري',
        correct: false,
        explanation: 'التهاب الغشاء التاموري عادة ما يسبب ألماً حاداً يتحسن بالجلوس للأمام'
      },
      {
        id: 'b',
        text: 'احتشاء عضلة القلب الحاد',
        correct: true,
        explanation: 'الأعراض والعلامات والعوامل الخطر تشير بقوة إلى احتشاء عضلة القلب الحاد'
      },
      {
        id: 'c',
        text: 'ارتجاع معدي مريئي',
        correct: false,
        explanation: 'الارتجاع المعدي المريئي لا يسبب عادة انتشار الألم للذراع والفك'
      },
      {
        id: 'd',
        text: 'التهاب الجنبة',
        correct: false,
        explanation: 'التهاب الجنبة يسبب ألماً حاداً يزداد مع التنفس العميق والسعال'
      }
    ]
  };

  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
    setShowFeedback(true);
  };

  const resetCase = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        الحالات الإكلينيكية
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="medical-card p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {clinicalCase.title}
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-xl mb-6">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
              وصف الحالة:
            </h4>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed whitespace-pre-line">
              {clinicalCase.scenario}
            </p>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {clinicalCase.question}
          </h4>
          
          <div className="space-y-3">
            {clinicalCase.options.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={showFeedback}
                className={`w-full p-4 text-right rounded-xl transition-all duration-300 ${
                  selectedAnswer === option.id
                    ? option.correct
                      ? 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700'
                      : 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
                } border-2`}
                whileHover={{ scale: showFeedback ? 1 : 1.02 }}
                whileTap={{ scale: showFeedback ? 1 : 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center ml-3 text-sm font-medium">
                      {option.id.toUpperCase()}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {option.text}
                    </span>
                  </div>
                  
                  {showFeedback && selectedAnswer === option.id && (
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      option.correct ? 'bg-green-600' : 'bg-red-600'
                    }`}>
                      {option.correct ? (
                        <CheckIcon className="w-4 h-4 text-white" />
                      ) : (
                        <XMarkIcon className="w-4 h-4 text-white" />
                      )}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
          
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <div className={`p-4 rounded-xl ${
                clinicalCase.options.find(o => o.id === selectedAnswer)?.correct
                  ? 'bg-green-50 dark:bg-green-900'
                  : 'bg-red-50 dark:bg-red-900'
              }`}>
                <h5 className={`font-semibold mb-2 ${
                  clinicalCase.options.find(o => o.id === selectedAnswer)?.correct
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-red-800 dark:text-red-200'
                }`}>
                  {clinicalCase.options.find(o => o.id === selectedAnswer)?.correct
                    ? '✅ إجابة صحيحة!'
                    : '❌ إجابة خاطئة'
                  }
                </h5>
                <p className={`leading-relaxed ${
                  clinicalCase.options.find(o => o.id === selectedAnswer)?.correct
                    ? 'text-green-700 dark:text-green-300'
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {clinicalCase.options.find(o => o.id === selectedAnswer)?.explanation}
                </p>
              </div>
              
              <div className="mt-4 flex justify-center">
                <button
                  onClick={resetCase}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  حالة جديدة
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClinicalCase;