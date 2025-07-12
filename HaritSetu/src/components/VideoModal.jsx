// src/components/VideoModal.jsx
import { useRef, useEffect } from "react";

const VideoModal = ({ videoSrc, isOpen, onClose }) => {
  const videoRef = useRef(null);

  // Pause and reset when closed
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  if (!isOpen || !videoSrc) return null;

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose(); // Callback to parent
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg relative">
        {/* ❌ Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-gray-700 text-xl hover:text-red-500 z-10"
        >
          ❌
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default VideoModal;
