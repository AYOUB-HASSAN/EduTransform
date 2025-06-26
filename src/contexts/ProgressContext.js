import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('userProgress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (subjectId, lessonId, completed = true) => {
    setProgress(prev => ({
      ...prev,
      [subjectId]: {
        ...prev[subjectId],
        [lessonId]: completed
      }
    }));
  };

  const getSubjectProgress = (subjectId) => {
    const subjectProgress = progress[subjectId] || {};
    const completed = Object.values(subjectProgress).filter(Boolean).length;
    const total = Object.keys(subjectProgress).length || 1;
    return Math.round((completed / total) * 100);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, getSubjectProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};