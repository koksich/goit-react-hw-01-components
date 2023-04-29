import styled from "styled-components";

export const Table = styled.table`
  width: 420px;
  text-align: center;

  border-collapse: collapse;
  border-radius: 6px;
  box-shadow: rgb(81, 83, 87) 1px 2px 6px 2px;
`;
    
export const Thead = styled.thead`
color: #fff;
background-color: #6495ed;
text-transform: uppercase;
`

export const Tr = styled.tr`
:nth-child(2n){
    background-color: #eaeaea;
}`

export const Th = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #e3e3e3;
`;

export const Td = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;

  text-transform: capitalize;
  color: rgb(129, 129, 129);

  border: 1px solid #e3e3e3;
`;