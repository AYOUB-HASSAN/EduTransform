import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  HeartIcon,
  BeakerIcon,
  UserIcon,
  ScissorsIcon,
  FaceSmileIcon,
  ChartBarIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { useProgress } from '../contexts/ProgressContext';
import SubjectCard from '../components/dashboard/SubjectCard';

const Dashboard = () => {
  const { getSubjectProgress } = useProgress();

  const subjects = [
    {
      id: 'anatomy',
      name: 'التشريح',
      nameEn: 'Anatomy',
      description: 'دراسة تركيب جسم الإنسان والأعضاء',
      icon: UserIcon,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      lessons: 12,
      videos: 8,
      pdfs: 15
    },
    {
      id: 'pathology',
      name: 'علم الأمراض',
      nameEn: 'Pathology',
      description: 'دراسة الأمراض وأسبابها وتطورها',
      icon: HeartIcon,
      color: 'bg-red-500',
      gradient: 'from-red-500 to-red-600',
      lessons: 10,
      videos: 6,
      pdfs: 12
    },
    {
      id: 'pharmacology',
      name: 'علم الأدوية',
      nameEn: 'Pharmacology',
      description: 'دراسة الأدوية وتأثيرها على الجسم',
      icon: BeakerIcon,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      lessons: 14,
      videos: 10,
      pdfs: 18
    },
    {
      id: 'internal-medicine',
      name: 'الطب الباطني',
      nameEn: 'Internal Medicine',
      description: 'تشخيص وعلاج الأمراض الداخلية',
      icon: BookOpenIcon,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      lessons: 16,
      videos: 12,
      pdfs: 20
    },
    {
      id: 'surgery',
      name: 'الجراحة',
      nameEn: 'Surgery',
      description: 'العمليات الجراحية والتدخلات الطبية',
      icon: ScissorsIcon,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600',
      lessons: 11,
      videos: 9,
      pdfs: 14
    },
    {
      id: 'pediatrics',
      name: 'طب الأطفال',
      nameEn: 'Pediatrics',
      description: 'الرعاية الطبية للأطفال والرضع',
      icon: FaceSmileIcon,
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-pink-600',
      lessons: 9,
      videos: 7,
      pdfs: 11
    }
  ];

  const quickActions = [
    {
      name: 'مراجعة سريعة',
      description: 'ابدأ جلسة مراجعة سريعة',
      icon: ClockIcon,
      href: '/tools',
      color: 'bg-blue-500'
    },
    {
      name: 'الأدوات الطبية',
      description: 'بطاقات تعليمية وحالات إكلينيكية',
      icon: FireIcon,
      href: '/tools',
      color: 'bg-green-500'
    },
    {
      name: 'إحصائيات التقدم',
      description: 'راجع تقدمك الدراسي',
      icon: ChartBarIcon,
      href: '/progress',
      color: 'bg-purple-500'
    }
  ];

  const dailyTip = {
    title: '🩺 معلومة اليوم',
    content: 'القلب يضخ حوالي 5 لترات من الدم في الدقيقة الواحدة، وهو ما يعادل ضخ 7,000 لتر يومياً!'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            مرحباً بك في لوحة التحكم
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            واصل رحلتك التعليمية واستكشف المواد الدراسية
          </p>
        </motion.div>

        {/* Daily Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="medical-card p-6 mb-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 border-primary-200 dark:border-primary-700"
        >
          <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-2">
            {dailyTip.title}
          </h3>
          <p className="text-primary-700 dark:text-primary-300">
            {dailyTip.content}
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            إجراءات سريعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={action.name}
                to={action.href}
                className="medical-card p-4 hover:scale-105 transition-transform duration-300 group"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {action.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {action.description}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Subjects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            المواد الدراسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                progress={getSubjectProgress(subject.id)}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Study Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            إحصائيات الدراسة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'المواد المكتملة', value: '3', color: 'text-green-600' },
              { label: 'ساعات الدراسة', value: '24', color: 'text-blue-600' },
              { label: 'البطاقات المراجعة', value: '156', color: 'text-purple-600' },
              { label: 'نسبة التقدم', value: '67%', color: 'text-orange-600' }
            ].map((stat, index) => (
              <div key={index} className="medical-card p-4 text-center">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;