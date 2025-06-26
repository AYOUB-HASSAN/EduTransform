import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  UserGroupIcon,
  HeartIcon,
  BookOpenIcon,
  PlayIcon,
  ChartBarIcon,
  LightBulbIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      name: 'مواد دراسية شاملة',
      description: 'مجموعة كاملة من المواد الطبية مع ملخصات وفيديوهات تعليمية',
      icon: BookOpenIcon,
      color: 'bg-blue-500'
    },
    {
      name: 'أدوات تفاعلية',
      description: 'بطاقات تعليمية ومشاهد إكلينيكية تفاعلية لتعزيز التعلم',
      icon: LightBulbIcon,
      color: 'bg-green-500'
    },
    {
      name: 'التعلم التشاركي',
      description: 'تواصل مع زملائك ومعلمين متطوعين للحصول على المساعدة',
      icon: UserGroupIcon,
      color: 'bg-purple-500'
    },
    {
      name: 'EduCast الصوتي',
      description: 'محاضرات صوتية عالية الجودة يمكنك الاستماع إليها في أي وقت',
      icon: PlayIcon,
      color: 'bg-orange-500'
    },
    {
      name: 'تتبع التقدم',
      description: 'راقب تقدمك الدراسي واحصل على إحصائيات مفصلة',
      icon: ChartBarIcon,
      color: 'bg-red-500'
    },
    {
      name: 'متاح دائماً',
      description: 'ادرس في أي وقت ومن أي مكان مع واجهة سهلة الاستخدام',
      icon: GlobeAltIcon,
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                منصة EduTransform Medical
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                مساعدك الذكي لمذاكرة الطب بطرق بسيطة وفعالة
              </p>
              <p className="text-lg text-primary-200 mb-12 max-w-2xl mx-auto">
                منصة تعليمية مبتكرة مصممة خصيصاً لطلاب الطب في جامعة الجزيرة والسودان
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <AcademicCapIcon className="w-6 h-6 ml-2" />
                ابدأ الآن
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-300"
              >
                <BookOpenIcon className="w-6 h-6 ml-2" />
                تصفح المواد
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                لماذا EduTransform Medical؟
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                منصة شاملة تجمع كل ما تحتاجه لدراسة الطب بطريقة حديثة وفعالة
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="medical-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '6+', label: 'مواد دراسية' },
              { number: '50+', label: 'فيديو تعليمي' },
              { number: '100+', label: 'ملخص PDF' },
              { number: '24/7', label: 'متاح دائماً' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HeartIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلتك التعليمية اليوم
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              انضم إلى مجتمع طلاب الطب في جامعة الجزيرة واحصل على أفضل الموارد التعليمية
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <AcademicCapIcon className="w-6 h-6 ml-2" />
              ابدأ التعلم الآن
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;