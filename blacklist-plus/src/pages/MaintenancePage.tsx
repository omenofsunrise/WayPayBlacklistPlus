import styled, { keyframes } from 'styled-components';
import { FaCog } from 'react-icons/fa';

interface MaintenancePageProps {
    title?: string;
    description?: string;
    estimatedTime?: string;
    supportPhone?: string;
}

const DEFAULT_TITLE = 'Технические работы';
const DEFAULT_DESCRIPTION =
    'Мы временно недоступны — улучшаем сервис для вас. Пожалуйста, попробуйте зайти чуть позже.';
const DEFAULT_PHONE = '8 (989) 924-24-24';

const MaintenancePage = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    estimatedTime,
    supportPhone = DEFAULT_PHONE,
}: MaintenancePageProps) => {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <Page>
            <Card>
                <IconWrapper aria-hidden="true">
                    <GearIcon $delay="0s" $size={92}>
                        <FaCog />
                    </GearIcon>
                    <GearIcon $delay="-1.6s" $size={58} $reverse $offsetX={62} $offsetY={62}>
                        <FaCog />
                    </GearIcon>
                </IconWrapper>

                <Title>{title}</Title>
                <Description>{description}</Description>

                {estimatedTime && (
                    <EstimateRow>
                        <EstimateLabel>Ориентировочное время:</EstimateLabel>
                        <EstimateValue>{estimatedTime}</EstimateValue>
                    </EstimateRow>
                )}

                <RetryButton type="button" onClick={handleRetry}>
                    Попробовать снова
                </RetryButton>

                <Divider />

                <SupportSection>
                    <SupportText>Если что-то срочное — свяжитесь с поддержкой:</SupportText>
                    <SupportPhone href={`tel:${supportPhone.replace(/\D/g, '')}`}>
                        {supportPhone}
                    </SupportPhone>
                </SupportSection>
            </Card>
        </Page>
    );
};

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const spinReverse = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
`;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    background:
        radial-gradient(circle at 20% 10%, rgba(0, 125, 136, 0.12), transparent 55%),
        radial-gradient(circle at 80% 90%, rgba(37, 203, 161, 0.12), transparent 55%),
        #f5f7f8;
`;

const Card = styled.div`
    width: 100%;
    max-width: 520px;
    background: #ffffff;
    border-radius: 24px;
    padding: 40px 32px 32px;
    box-shadow:
        0 20px 60px rgba(0, 125, 136, 0.12),
        0 2px 6px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: ${fadeIn} 0.4s ease-out;
`;

const IconWrapper = styled.div`
    position: relative;
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
`;

const GearIcon = styled.div<{
    $delay: string;
    $size: number;
    $reverse?: boolean;
    $offsetX?: number;
    $offsetY?: number;
}>`
    position: absolute;
    top: ${({ $offsetY }) => $offsetY ?? 0}px;
    left: ${({ $offsetX }) => $offsetX ?? 0}px;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    color: ${({ $reverse }) => ($reverse ? 'rgba(37, 203, 161, 1)' : 'rgba(0, 125, 136, 1)')};
    animation: ${({ $reverse }) => ($reverse ? spinReverse : spin)} 6s linear infinite;
    animation-delay: ${({ $delay }) => $delay};

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

const Title = styled.h1`
    margin: 0 0 12px;
    font-size: 26px;
    font-weight: 700;
    color: #111827;
    letter-spacing: -0.02em;
`;

const Description = styled.p`
    margin: 0 0 24px;
    font-size: 15px;
    line-height: 1.55;
    color: #4b5563;
    max-width: 420px;
`;

const EstimateRow = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(0, 125, 136, 0.08);
    border-radius: 999px;
    margin-bottom: 24px;
`;

const EstimateLabel = styled.span`
    font-size: 13px;
    color: #4b5563;
`;

const EstimateValue = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: rgba(0, 125, 136, 1);
`;

const RetryButton = styled.button`
    background: rgba(0, 125, 136, 1);
    color: #ffffff;
    border: none;
    border-radius: 12px;
    padding: 12px 28px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.1s ease;

    &:hover {
        background: rgba(0, 105, 116, 1);
    }

    &:active {
        transform: translateY(1px);
    }

    &:focus-visible {
        outline: 2px solid rgba(0, 125, 136, 0.5);
        outline-offset: 2px;
    }
`;

const Divider = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 28px 0 20px;
`;

const SupportSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`;

const SupportText = styled.span`
    font-size: 13px;
    color: #6b7280;
`;

const SupportPhone = styled.a`
    font-size: 18px;
    font-weight: 600;
    color: rgba(0, 125, 136, 1);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export default MaintenancePage;
