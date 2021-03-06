import styled from 'styled-components';
import {default as NextLink} from 'next/link';
import { Colors } from './consts';

export const PageContainer = styled.div`
    margin-top: 60px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 30px;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 8px 15px;
    background-color: ${Colors.Indigo};
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    cursor: pointer;
    border: none;
    transition: 0.3s;

    &:disabled {
        background-color: #eee;
        color: #666;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    align-items: space-between;
`;

export const Margin = styled.div`
    margin: ${props => props.margin || '0px'};
    margin-left: ${props => props.marginLeft || '0px'};
    margin-right: ${props => props.marginRight || '0px'};
    margin-top: ${props => props.marginTop || '0px'};
    margin-bottom: ${props => props.marginBotton || '0px'};
`;

export const StyledLink = styled.a`
    color: ${Colors.Indigo};
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
`;

export const Link = ({children, href, ...rest}) => {
    return <NextLink href={href} {...rest}>
        <StyledLink>{children}</StyledLink>
    </NextLink>
};

export const Red = styled.span`
  color: ${Colors.Vermillion};
`;

interface IconProps {
    name: string;
    color?: string;
    margin?: string;
}
export const Icon = ({name, color, margin}: IconProps) => {
    return <span
        style={{color: color || '#000', margin}}
        className="material-icons">
            {name}
    </span>;
}