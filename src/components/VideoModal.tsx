import { useAppSelector, useAppDispatch } from "stores/hook";
import { setModalOpen } from "@stores/Slices/VideoModalSlice";

const VideoModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.videoModal.isModalOpen);
  const videoSrc = useAppSelector((state) => state.videoModal.video);

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={() => dispatch(setModalOpen(false))}
    >
      <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 z-[1000] flex items-center justify-center cursor-pointer"
          onClick={() => dispatch(setModalOpen(false))}
        >
          ✕
        </button>

        {/* Fullscreen Video */}
        <video
          src={videoSrc}
          className="w-full h-auto rounded-xl"
          controls
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

export default VideoModal;
