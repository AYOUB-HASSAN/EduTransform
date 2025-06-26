import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PlayIcon,
  DocumentTextIcon,
  BookOpenIcon,
  SpeakerWaveIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const SubjectModule = () => {
  const { subjectId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in a real app, this would come from your data store
  const subjectData = {
    anatomy: {
      name: 'التشريح',
      nameEn: 'Anatomy',
      description: 'دراسة تركيب جسم الإنسان والأعضاء',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    pathology: {
      name: 'علم الأمراض',
      nameEn: 'Pathology',
      description: 'دراسة الأمراض وأسبابها وتطورها',
      color: 'bg-red-500',
      gradient: 'from-red-500 to-red-600'
    },
    pharmacology: {
      name: 'علم الأدوية',
      nameEn: 'Pharmacology',
      description: 'دراسة الأدوية وتأثيرها على الجسم',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    'internal-medicine': {
      name: 'الطب الباطني',
      nameEn: 'Internal Medicine',
      description: 'تشخيص وعلاج الأمراض الداخلية',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
    surgery: {
      name: 'الجراحة',
      nameEn: 'Surgery',
      description: 'العمليات الجراحية والتدخلات الطبية',
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600'
    },
    pediatrics: {
      name: 'طب الأطفال',
      nameEn: 'Pediatrics',
      description: 'الرعاية الطبية للأطفال والرضع',
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-pink-600'
    }
  };

  const subject = subjectData[subjectId] || subjectData.anatomy;

  const tabs = [
    { id: 'overview', name: 'نظرة عامة', icon: BookOpenIcon },
    { id: 'pdfs', name: 'ملخصات PDF', icon: DocumentTextIcon },
    { id: 'videos', name: 'فيديوهات', icon: PlayIcon },
    { id: 'audio', name: 'EduCast', icon: SpeakerWaveIcon }
  ];

  const pdfResources = [
    { name: 'ملخص الفصل الأول', size: '2.4 MB', downloadUrl: '#' },
    { name: 'مراجعة شاملة للوحدة الثانية', size: '1.8 MB', downloadUrl: '#' },
    { name: 'أسئلة وأجوبة نموذجية', size: '3.1 MB', downloadUrl: '#' },
    { name: 'خرائط ذهنية مفاهيمية', size: '1.2 MB', downloadUrl: '#' },
    { name: 'ملخص الامتحان النهائي', size: '2.7 MB', downloadUrl: '#' }
  ];

  const videoResources = [
    { 
      title: 'مقدمة في التشريح الأساسي', 
      duration: '15:24', 
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    { 
      title: 'تشريح الجهاز التنفسي', 
      duration: '22:18', 
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    { 
      title: 'الجهاز العصبي المركزي', 
      duration: '18:45', 
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const audioResources = [
    { title: 'محاضرة صوتية: أساسيات التشريح', duration: '45:00', url: '#' },
    { title: 'مراجعة سريعة للمفاهيم الأساسية', duration: '30:15', url: '#' },
    { title: 'جلسة أسئلة وأجوبة', duration: '25:30', url: '#' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className={`bg-gradient-to-r ${subject.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-6">
            <Link 
              to="/dashboard" 
              className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
            >
              <ArrowRightIcon className="w-5 h-5 ml-2" />
              العودة إلى لوحة التحكم
            </Link>
          </nav>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{subject.name}</h1>
                <p className="text-xl text-gray-100 mb-4">{subject.description}</p>
                <div className="text-sm opacity-90 ltr text-left">
                  {subject.nameEn}
                </div>
              </div>
              <div className="hidden md:block">
                <Link
                  to="/tools"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <BookOpenIcon className="w-5 h-5 ml-2" />
                  ابدأ مراجعة تفاعلية
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 space-x-reverse overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5 ml-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="medical-card p-6 text-center">
                <DocumentTextIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {pdfResources.length} ملف PDF
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  ملخصات ومراجعات شاملة
                </p>
              </div>
              
              <div className="medical-card p-6 text-center">
                <PlayIcon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {videoResources.length} فيديو تعليمي
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  شروحات مرئية مفصلة
                </p>
              </div>
              
              <div className="medical-card p-6 text-center">
                <SpeakerWaveIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {audioResources.length} محاضرة صوتية
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  EduCast للاستماع أثناء التنقل
                </p>
              </div>
            </div>

            <div className="medical-card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                وصف المادة
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                هذه المادة تغطي الأساسيات المهمة في {subject.name} وتشمل جميع المواضيع 
                المطلوبة للمنهج الدراسي. ستجد هنا مجموعة شاملة من الموارد التعليمية 
                المصممة لمساعدتك على فهم المفاهيم الأساسية وتطبيقها عملياً.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    ما ستتعلمه:
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <ChevronRightIcon className="w-4 h-4 text-primary-500 ml-2 flex-shrink-0" />
                      المفاهيم الأساسية والنظريات المهمة
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="w-4 h-4 text-primary-500 ml-2 flex-shrink-0" />
                      التطبيقات العملية والحالات الإكلينيكية
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="w-4 h-4 text-primary-500 ml-2 flex-shrink-0" />
                      المراجعة الشاملة والاستعداد للامتحانات
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="w-4 h-4 text-primary-500 ml-2 flex-shrink-0" />
                      أحدث المستجدات في المجال
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    طرق التعلم المتاحة:
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <DocumentTextIcon className="w-4 h-4 text-blue-500 ml-2 flex-shrink-0" />
                      ملخصات PDF مُحدثة ومُراجعة
                    </li>
                    <li className="flex items-center">
                      <PlayIcon className="w-4 h-4 text-red-500 ml-2 flex-shrink-0" />
                      فيديوهات شرح تفاعلية
                    </li>
                    <li className="flex items-center">
                      <SpeakerWaveIcon className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                      محاضرات صوتية (EduCast)
                    </li>
                    <li className="flex items-center">
                      <BookOpenIcon className="w-4 h-4 text-purple-500 ml-2 flex-shrink-0" />
                      أدوات مراجعة تفاعلية
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'pdfs' && (
          <motion.div
            key="pdfs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              ملخصات PDF
            </h2>
            {pdfResources.map((pdf, index) => (
              <div key={index} className="medical-card p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center ml-4">
                    <DocumentTextIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {pdf.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {pdf.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
                    <ArrowDownTrayIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'videos' && (
          <motion.div
            key="videos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              فيديوهات تعليمية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoResources.map((video, index) => (
                <div key={index} className="medical-card overflow-hidden">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                        <PlayIcon className="w-8 h-8 mr-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'audio' && (
          <motion.div
            key="audio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              EduCast - المحاضرات الصوتية
            </h2>
            {audioResources.map((audio, index) => (
              <div key={index} className="medical-card p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center ml-4">
                    <SpeakerWaveIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {audio.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {audio.duration}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors">
                  <PlayIcon className="w-6 h-6" />
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SubjectModule;