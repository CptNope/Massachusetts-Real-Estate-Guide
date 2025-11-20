import { useState } from 'react';

/**
 * Custom hook for Photo Upload and Management
 * Handles photo upload, base64 conversion, and size validation
 */
export const usePhotoUpload = (showNotification, maxSizeMB = 2) => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handlePhotoUpload = (file, setter, photoName = 'photo') => {
    if (!file) return;

    const maxSize = maxSizeMB * 1000000; // Convert MB to bytes
    
    if (file.size > maxSize) {
      showNotification(`⚠️ Photo too large. Maximum size is ${maxSizeMB}MB`, 'error');
      return;
    }

    if (!file.type.startsWith('image/')) {
      showNotification('⚠️ Please upload a valid image file', 'error');
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const base64Image = e.target.result;
      
      // Update the specific setter if provided
      if (setter) {
        setter(base64Image);
      }
      
      // Add to uploaded photos collection
      const newPhoto = {
        id: Date.now().toString(),
        name: file.name,
        size: file.size,
        type: file.type,
        data: base64Image,
        uploadedAt: new Date().toISOString()
      };
      
      setUploadedPhotos(prev => [...prev, newPhoto]);
      
      showNotification(`✅ ${photoName} uploaded successfully!`, 'success');
    };
    
    reader.onerror = () => {
      showNotification('⚠️ Error reading photo file', 'error');
    };
    
    reader.readAsDataURL(file);
  };

  const removePhoto = (photoId) => {
    setUploadedPhotos(prev => prev.filter(photo => photo.id !== photoId));
    showNotification('Photo removed', 'info');
  };

  const clearAllPhotos = () => {
    setUploadedPhotos([]);
    showNotification('All photos cleared', 'info');
  };

  const getPhotoById = (photoId) => {
    return uploadedPhotos.find(photo => photo.id === photoId);
  };

  const getTotalPhotoSize = () => {
    return uploadedPhotos.reduce((total, photo) => total + photo.size, 0);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return {
    // State
    uploadedPhotos,
    
    // Actions
    handlePhotoUpload,
    removePhoto,
    clearAllPhotos,
    getPhotoById,
    getTotalPhotoSize,
    formatFileSize
  };
};

export default usePhotoUpload;
