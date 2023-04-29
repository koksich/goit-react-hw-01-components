import styled from "styled-components";

export const StatisticSection = styled.section`
  border-radius: 5px;
  box-shadow: 1px 2px 6px 2px #515357;
  width: 420px;

  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 700;
  padding: 20px;
`;

export const StatList = styled.ul`


  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatItem = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;

  background-color: ${props => props.bgcColor};
  color: #272525;
`;

export const Percentage = styled.span`
  font-weight: 700;
`;