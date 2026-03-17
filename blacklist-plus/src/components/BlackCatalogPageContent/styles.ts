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
  max-width: 290px;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    justify-content: flex-start;
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

export const StickyFilterField = styled(FilterField)`
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
  width: 25vw;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
