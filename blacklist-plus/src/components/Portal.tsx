import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MobileBottomSheet, MobileBottomSheetOverlay, MobileBottomSheetContent } from './BlackCatalogPageContent/styles';

const MobileBottomSheetPortal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <MobileBottomSheet onClick={onClose}>
      <MobileBottomSheetOverlay onClick={onClose} />
      <MobileBottomSheetContent onClick={(e) => e.stopPropagation()}>
        {children}
      </MobileBottomSheetContent>
    </MobileBottomSheet>,
    document.body
  );
};

export default MobileBottomSheetPortal;