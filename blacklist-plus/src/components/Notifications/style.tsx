// pages/NotificationsPage.styles.ts
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: #f5f5f5;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NotificationBadge = styled.span`
  background: #ef4444;
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
`;

export const MarkAllReadButton = styled.button`
  background: transparent;
  border: 1px solid #008b8b;
  color: #008b8b;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #008b8b;
    color: white;
  }
`;

export const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface NotificationCardProps {
  isRead: boolean;
}

export const NotificationCard = styled.div<NotificationCardProps>`
  background: ${props => props.isRead ? '#ffffff' : '#eff6ff'};
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  border-left: 4px solid ${props => props.isRead ? '#e2e8f0' : '#008b8b'};
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

interface NotificationContentProps {
  isRead: boolean;
}

export const NotificationContent = styled.p<NotificationContentProps>`
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.isRead ? '#64748b' : '#1e293b'};
  margin: 0;
  flex: 1;
  font-weight: ${props => props.isRead ? '400' : '500'};
`;

export const MarkAsReadButton = styled.button`
  background: transparent;
  border: none;
  color: #008b8b;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #dbeafe;
  }
`;

export const NotificationDate = styled.span`
  font-size: 12px;
  color: #94a3b8;
  display: block;
  margin-top: 8px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
`;

export const EmptyStateIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.7;
`;

export const EmptyStateTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px 0;
`;

export const EmptyStateText = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 12px;
  color: #64748b;
`;

interface LoadingSpinnerProps {
  small?: boolean;
}

export const LoadingSpinner = styled.div<LoadingSpinnerProps>`
  width: ${props => props.small ? '24px' : '40px'};
  height: ${props => props.small ? '24px' : '40px'};
  border: 3px solid #e2e8f0;
  border-top-color: #008b8b;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadMoreButton = styled.button`
  background: transparent;
  border: 1px solid #cbd5e1;
  color: #64748b;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #94a3b8;
  }
`;