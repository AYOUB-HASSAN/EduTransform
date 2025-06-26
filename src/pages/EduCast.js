import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  SpeakerWaveIcon,
  ArrowDownTrayIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

const EduCast = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);

  const podcasts = [
    {
      id: 1,
      title: 'أساسيات التشريح - الجهاز الدوري',
      instructor: 'د. أحمد محمد',
      subject: 'التشريح',
      duration: '45:30',
      durationSeconds: 2730,
      description: 'شرح مفصل لتشريح القلب والأوعية الدموية مع التركيز على الوظائف الأساسية',
      thumbnail: '🫀',
      audioUrl: '#',
      isFavorite: true,
      downloads: 1250,
      rating: 4.8
    },
    {
      id: 2,
      title: 'علم الأدوية - المضادات الحيوية',
      instructor: 'د. فاطمة علي',
      subject: 'علم الأدوية',
      duration: '38:15',
      durationSeconds: 2295,
      description: 'مراجعة شاملة للمضادات الحيوية وآليات عملها وتصنيفاتها المختلفة',
      thumbnail: '💊',
      audioUrl: '#',
      isFavorite: false,
      downloads: 890,
      rating: 4.9
    },
    {
      id: 3,
      title: 'الطب الباطني - أمراض الصدر',
      instructor: 'د. محمد حسن',
      subject: 'الطب الباطني',
      duration: '52:20',
      durationSeconds: 3140,
      description: 'دراسة أمراض الجهاز التنفسي الشائعة وطرق التشخيص والعلاج',
      thumbnail: '🫁',
      audioUrl: '#',
      isFavorite: true,
      downloads: 1100,
      rating: 4.7
    },
    {
      id: 4,
      title: 'علم الأمراض - الأورام',
      instructor: 'د. عائشة أحمد',
      subject: 'علم الأمراض',
      duration: '41:45',
      durationSeconds: 2505,
      description: 'مقدمة في علم الأورام والتصنيفات المختلفة للأورام الخبيثة والحميدة',
      thumbnail: '🔬',
      audioUrl: '#',
      isFavorite: false,
      downloads: 750,
      rating: 4.6
    }
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % podcasts.length);
    setCurrentTime(0);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + podcasts.length) % podcasts.length);
    setCurrentTime(0);
  };

  const currentPodcast = podcasts[currentTrack];

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
            EduCast - المحاضرات الصوتية
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            استمع إلى محاضرات طبية عالية الجودة في أي وقت ومن أي مكان
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Player Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="medical-card p-8"
            >
              {/* Current Track Info */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentPodcast.thumbnail}</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentPodcast.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                  {currentPodcast.instructor}
                </p>
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                  {currentPodcast.subject}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{currentPodcast.duration}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 cursor-pointer">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(currentTime / currentPodcast.durationSeconds) * 100}%` 
                    }}
                  />
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center space-x-6 space-x-reverse mb-6">
                <button
                  onClick={prevTrack}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <BackwardIcon className="w-6 h-6" />
                </button>

                <button
                  onClick={togglePlayPause}
                  className="p-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-8 h-8" />
                  ) : (
                    <PlayIcon className="w-8 h-8" />
                  )}
                </button>

                <button
                  onClick={nextTrack}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ForwardIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center space-x-4 space-x-reverse mb-6">
                <SpeakerWaveIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                  {volume}%
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 space-x-reverse">
                <button className="flex items-center px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                  {currentPodcast.isFavorite ? (
                    <HeartSolid className="w-5 h-5 ml-2" />
                  ) : (
                    <HeartIcon className="w-5 h-5 ml-2" />
                  )}
                  إعجاب
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  <ShareIcon className="w-5 h-5 ml-2" />
                  مشاركة
                </button>
                <button className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                  <ArrowDownTrayIcon className="w-5 h-5 ml-2" />
                  تحميل
                </button>
              </div>
            </motion.div>
          </div>

          {/* Playlist Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="medical-card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                قائمة التشغيل
              </h3>
              
              <div className="space-y-4">
                {podcasts.map((podcast, index) => (
                  <motion.div
                    key={podcast.id}
                    onClick={() => setCurrentTrack(index)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      currentTrack === index
                        ? 'bg-primary-100 dark:bg-primary-900 border-primary-300 dark:border-primary-700'
                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } border-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl ml-3">{podcast.thumbnail}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white truncate">
                          {podcast.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {podcast.instructor}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {podcast.duration}
                          </span>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              ⭐ {podcast.rating}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              📥 {podcast.downloads}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Current Track Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="medical-card p-6 mt-6"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                تفاصيل المحاضرة
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {currentPodcast.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">المدة:</span>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {currentPodcast.duration}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">التقييم:</span>
                    <div className="font-medium text-gray-900 dark:text-white">
                      ⭐ {currentPodcast.rating}/5
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduCast;