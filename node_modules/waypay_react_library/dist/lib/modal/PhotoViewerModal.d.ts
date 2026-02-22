import React from 'react';
interface PhotoViewerModalProps {
    images: string[];
    initialIndex: number;
    onClose: () => void;
}
declare const PhotoViewerModal: React.FC<PhotoViewerModalProps>;
export default PhotoViewerModal;
