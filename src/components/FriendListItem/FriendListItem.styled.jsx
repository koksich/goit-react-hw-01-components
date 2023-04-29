import styled from "styled-components";

export const FriendItem = styled.li`
  display: flex;
  align-items: center;

  padding: 10px;
  
  width: 400px;

  border-radius: 6px;
  box-shadow: rgb(81, 83, 87) 1px 2px 6px 2px;

`;

export const FriendStatus = styled.span`
  margin-right: 15px;
  
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.status};
`;

export const FriendAvatar = styled.img`
margin-right: 15px;

width: 48px;
`;

export const FriendName = styled.p`
margin-right: auto;
font-size: 32px;
font-weight: 500;
`