import styled from 'styled-components';

export interface CardProps {
    padding?: string;
}

const Card = styled.div<CardProps>`
  background-color: #fff;
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: ${({ padding }) => padding !== undefined ? padding : '30px'};
`;

export default Card;
