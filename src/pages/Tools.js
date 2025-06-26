import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  UserIcon,
  LightBulbIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Flashcard from '../components/learning/Flashcard';
import AnatomyViewer from '../components/learning/AnatomyViewer';
import ClinicalCase from '../components/learning/ClinicalCase';

const Tools = () => {
  const [activeFlashcard, setActiveFlashcard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const tools = [
    {
      id: 'flashcards',
      name: 'البطاقات التعليمية',
      description: 'مراجعة سريعة باستخدام نظام التكرار المتباعد',
      icon: BookOpenIcon,
      color: 'bg-blue-500'
    },
    {
      id: 'anatomy',
      name: 'مشاهد التشريح',
      description: 'استكشاف تفاعلي لتشريح جسم الإنسان',
      icon: UserIcon,
      color: 'bg-red-500'
    },
    {
      id: 'cases',
      name: 'الحالات الإكلينيكية',
      description: 'حل مشاكل طبية واقعية',
      icon: LightBulbIcon,
      color: 'bg-green-500'
    },
    {
      id: 'progress',
      name: 'تتبع التقدم',
      description: 'مراقبة أدائك وإحصائياتك',
      icon: ChartBarIcon,
      color: 'bg-purple-500'
    }
  ];

  const [activeTool, setActiveTool] = useState('flashcards');

  const flashcards = [
    {
      question: 'ما هو العضو المسؤول عن ضخ الدم في جسم الإنسان؟',
      answer: 'القلب - وهو عضلة قوية تضخ الدم عبر الجهاز الدوري إلى جميع أجزاء الجسم'
    },
    {
      question: 'كم عدد الغرف في قلب الإنسان؟',
      answer: 'أربع غرف: أذينان (علويان) وبطينان (سفليان)'
    },
    {
      question: 'ما هي وظيفة الكبد الرئيسية؟',
      answer: 'تطهير الجسم من السموم، إنتاج الصفراء، تخزين الفيتامينات والمعادن'
    }
  ];

  const nextFlashcard = () => {
    setShowAnswer(false);
    setActiveFlashcard((prev) => (prev + 1) % flashcards.length);
  };

  const prevFlashcard = () => {
    setShowAnswer(false);
    setActiveFlashcard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            الأدوات الطبية التفاعلية
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            استخدم أدوات التعلم التفاعلية لتحسين فهمك ومراجعة المواد
          </p>
        </motion.div>

        {/* Tool Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {tools.map((tool, index) => (
            <motion.button
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTool(tool.id)}
              className={`medical-card p-4 text-center transition-all duration-300 ${
                activeTool === tool.id 
                  ? 'ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-900' 
                  : 'hover:scale-105'
              }`}
            >
              <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <tool.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {tool.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Tool Content */}
        <motion.div
          key={activeTool}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="medical-card p-6"
        >
          {activeTool === 'flashcards' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                البطاقات التعليمية
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="mb-4 text-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    البطاقة {activeFlashcard + 1} من {flashcards.length}
                  </span>
                </div>

                <Flashcard
                  question={flashcards[activeFlashcard].question}
                  answer={flashcards[activeFlashcard].answer}
                  showAnswer={showAnswer}
                  onFlip={() => setShowAnswer(!showAnswer)}
                />

                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={prevFlashcard}
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                    السابق
                  </button>

                  <div className="flex space-x-2 space-x-reverse">
                    <button className="p-3 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                      <CheckIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    onClick={nextFlashcard}
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    التالي
                    <ArrowLeftIcon className="w-5 h-5 mr-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTool === 'anatomy' && <AnatomyViewer />}
          {activeTool === 'cases' && <ClinicalCase />}
          
          {activeTool === 'progress' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                تتبع التقدم
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    البطاقات المراجعة
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    156
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">
                    هذا الأسبوع
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                    الحالات المحلولة
                  </h3>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    23
                  </div>
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    هذا الشهر
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    ساعات الدراسة
                  </h3>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    47
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 text-sm">
                    هذا الشهر
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Tools;