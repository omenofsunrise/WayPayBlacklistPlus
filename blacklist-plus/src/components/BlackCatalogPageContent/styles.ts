import styled from "styled-components";
import { CountInfoTitle, CustomTitle, DefaultButton } from "waypay_react_library";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
  }
`;

export const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #007D88;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    stroke: white;
  }
`;

export const StickyHeader = styled(TitleContainer)`
  position: sticky;
  top: 0;
  z-index: 11;
  padding: 12px 0;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 0;
  }
`;

export const HeaderTitleGroup = styled(TitleContainer)`
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const PageTitle = styled(CustomTitle)`
  margin: 0;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.2;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: #6b7280;
  padding: 15px;
`;

export const EmptyStateIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
`;

export const EmptyStateTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #374151;
`;

export const EmptyStateText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  max-width: 500px;
  line-height: 1.5;
`;

const FilterField = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: row;
  text-align: left;
  color: black;
  background-color: rgba(249, 250, 250, 1);
  gap: 15px;
  flex-wrap: wrap;
`;

export const MobileFilterField = styled(FilterField)`
  position: sticky;
  top: 50px;
  z-index: 10;
  padding: 16px 0;
  background: none;
  align-items: center;

  @media (max-width: 768px) {
    top: 0;
    padding: 12px 0;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
    
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ResetButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  margin-left: 16px;
  height: 40px;
  padding: 0;
  width: 100px;

  &:hover {
    color: #374151;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const ContextMenu = styled.div<{ x: number; y: number }>`
  position: fixed;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  min-width: 160px;
  padding: 4px 0;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;

export const MenuItem = styled.div<{ danger?: boolean }>`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${props => (props.danger ? '#ff4d4f' : '#333')};

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

export const StyledCountInfo = styled(CountInfoTitle)`
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

export const DarkCyanButton = styled(DefaultButton)`
  background-color: #008b8b;

  &:hover {
    background-color: #006666;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AddButton = styled(DarkCyanButton)`
  width: 200px;

  @media (max-width: 769px) {
    aspect-ratio: 1 / 1;
    margin-left: auto;
    width: auto;
    height: 50px;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const WildInputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const ClearSearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  font-size: 18px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  line-height: 1;
  
  &:hover {
    color: #333;
    background-color: #f0f0f0;
  }
  
  &:focus {
    outline: none;
  }
`;

export const BlacklistIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff4d4f;
  width: 24px;
  height: 24px;
`;

export const CompletedIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #52c41a;
  width: 24px;
  height: 24px;
`;

// Меню для кнопки добавления
export const AddButtonMenu = styled.div<{ x: number; y: number }>`
  position: fixed;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  min-width: 180px;
  padding: 8px 0;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AddButtonMenuItem = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e8e8e8;
  }
`;

export const AddButtonMenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileBottomSheet = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20000;
  display: flex;
  align-items: flex-end;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileBottomSheetOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MobileBottomSheetContent = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 16px 16px 0 0;
  padding: 20px;
  animation: slideUp 0.3s ease-out;
  max-height: 80vh;
  overflow-y: auto;
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const MobileBottomSheetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`;

export const MobileBottomSheetTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const MobileBottomSheetClose = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
  
  &:active {
    background-color: #e8e8e8;
  }
`;

export const MobileBottomSheetOption = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: #333;
  font-size: 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:active {
    background-color: #e8e8e8;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;