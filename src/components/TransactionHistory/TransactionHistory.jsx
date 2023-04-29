import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
      <Table >
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </Thead>

            <tbody>
                
                {items.map(({ id, type, amount, currency }) => {
                    return (<Tr key={id}>
                        <Td>{type}</Td>
                        <Td>{amount}</Td>
                        <Td>{currency}</Td>
                    </Tr>)
                } )}
          
          
        </tbody>
      </Table>
    );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};