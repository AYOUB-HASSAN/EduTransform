import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const PeerHub = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const tutors = [
    {
      id: 1,
      name: 'أحمد محمد علي',
      year: 'السنة الخامسة',
      subject: 'التشريح',
      rating: 4.8,
      sessions: 45,
      avatar: '👨‍⚕️',
      specialties: ['تشريح الجهاز العصبي', 'تشريح القلب والأوعية'],
      contact: {
        whatsapp: '+249123456789',
        email: 'ahmed.med@email.com'
      },
      availability: 'متاح الآن'
    },
    {
      id: 2,
      name: 'فاطمة أحمد حسن',
      year: 'السنة الرابعة',
      subject: 'علم الأدوية',
      rating: 4.9,
      sessions: 38,
      avatar: '👩‍⚕️',
      specialties: ['أدوية القلب', 'المضادات الحيوية'],
      contact: {
        whatsapp: '+249123456788',
        email: 'fatima.med@email.com'
      },
      availability: 'متاح غداً'
    },
    {
      id: 3,
      name: 'محمد عبدالله',
      year: 'طبيب امتياز',
      subject: 'الطب الباطني',
      rating: 5.0,
      sessions: 67,
      avatar: '🧑‍⚕️',
      specialties: ['أمراض الصدر', 'أمراض الكلى'],
      contact: {
        whatsapp: '+249123456787',
        email: 'mohammed.med@email.com'
      },
      availability: 'متاح الآن'
    },
    {
      id: 4,
      name: 'عائشة إبراهيم',
      year: 'السنة الثالثة',
      subject: 'علم الأمراض',
      rating: 4.7,
      sessions: 29,
      avatar: '👩‍⚕️',
      specialties: ['الأمراض المعدية', 'علم الأورام'],
      contact: {
        whatsapp: '+249123456786',
        email: 'aisha.med@email.com'
      },
      availability: 'مشغول حالياً'
    }
  ];

  const subjects = [
    { id: 'all', name: 'جميع المواد' },
    { id: 'التشريح', name: 'التشريح' },
    { id: 'علم الأدوية', name: 'علم الأدوية' },
    { id: 'الطب الباطني', name: 'الطب الباطني' },
    { id: 'علم الأمراض', name: 'علم الأمراض' },
    { id: 'الجراحة', name: 'الجراحة' },
    { id: 'طب الأطفال', name: 'طب الأطفال' }
  ];

  const filteredTutors = selectedSubject === 'all' 
    ? tutors 
    : tutors.filter(tutor => tutor.subject === selectedSubject);

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
            مركز التعلم التشاركي
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            تواصل مع زملائك المتفوقين واحصل على المساعدة في المواد الصعبة
          </p>
        </motion.div>

        {/* Request Group Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="medical-card p-6 mb-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2">
                اطلب مراجعة جماعية
              </h3>
              <p className="text-primary-700 dark:text-primary-300">
                احجز جلسة مراجعة جماعية مع زملائك لمادة معينة
              </p>
            </div>
            <button className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors flex items-center">
              <AcademicCapIcon className="w-5 h-5 ml-2" />
              احجز جلسة
            </button>
          </div>
        </motion.div>

        {/* Subject Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            تصفية حسب المادة:
          </h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSubject === subject.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="medical-card overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl ml-4">{tutor.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold">{tutor.name}</h3>
                    <p className="text-primary-200">{tutor.year}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {tutor.subject}
                  </span>
                  <div className={`px-3 py-1 rounded-full text-xs ${
                    tutor.availability === 'متاح الآن'
                      ? 'bg-green-500 bg-opacity-30'
                      : tutor.availability === 'متاح غداً'
                      ? 'bg-yellow-500 bg-opacity-30'
                      : 'bg-red-500 bg-opacity-30'
                  }`}>
                    {tutor.availability}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <StarIcon className="w-4 h-4 text-yellow-500 ml-1" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        {tutor.rating}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      التقييم
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <ClockIcon className="w-4 h-4 text-blue-500 ml-1" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        {tutor.sessions}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      جلسة
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    التخصصات:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {tutor.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex space-x-2 space-x-reverse">
                  <a
                    href={`https://wa.me/${tutor.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <PhoneIcon className="w-4 h-4 ml-1" />
                    واتساب
                  </a>
                  <a
                    href={`mailto:${tutor.contact.email}`}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <EnvelopeIcon className="w-4 h-4 ml-1" />
                    إيميل
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Study Groups Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            مجموعات الدراسة النشطة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'مجموعة مراجعة التشريح',
                members: 8,
                subject: 'التشريح',
                time: 'غداً 6:00 مساءً',
                location: 'مكتبة الكلية - الطابق الثاني'
              },
              {
                name: 'جلسة أسئلة علم الأدوية',
                members: 12,
                subject: 'علم الأدوية',
                time: 'الخميس 4:00 مساءً',
                location: 'قاعة المحاضرات A'
              }
            ].map((group, index) => (
              <div key={index} className="medical-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {group.name}
                  </h3>
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                    {group.subject}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 ml-2" />
                    {group.members} عضو
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 ml-2" />
                    {group.time}
                  </div>
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="w-4 h-4 ml-2" />
                    {group.location}
                  </div>
                </div>
                
                <button className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  انضم للمجموعة
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PeerHub;