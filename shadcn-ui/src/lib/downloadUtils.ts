/**
 * Utility functions for handling file downloads across different devices and browsers
 */

export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const downloadFile = (url: string, filename: string): void => {
  const isMobile = isMobileDevice();
  
  if (isMobile) {
    // On mobile devices, open in new tab for better compatibility
    // This allows users to view the PDF and use the browser's native download
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    
    // Fallback if popup blocked
    if (!newWindow) {
      // Try direct navigation as fallback
      window.location.href = url;
    }
  } else {
    // On desktop, try direct download first
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Add to DOM temporarily
    document.body.appendChild(link);
    
    try {
      link.click();
    } catch (error) {
      console.warn('Direct download failed, opening in new tab:', error);
      // Fallback to opening in new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    } finally {
      // Clean up
      document.body.removeChild(link);
    }
  }
};

export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || '';
};

export const isValidFileUrl = (url: string): boolean => {
  try {
    new URL(url, window.location.origin);
    return true;
  } catch {
    return false;
  }
};
