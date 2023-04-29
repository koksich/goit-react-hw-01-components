import PropTypes from 'prop-types';
import { StatisticSection, Title, StatList, StatItem, Percentage } from './Statistics.styled';


export const Statistics = ({title, stats }) => { 
    return (
      <StatisticSection>
            {title && <Title>{ title}</Title>}

        <StatList>          
                {stats.map(({id, label, percentage}) => { 
                    return (
                      <StatItem key={id} bgcColor={getRandomHexColor()} >
                            <span className="label">{ label}</span>
                            <Percentage>{percentage}%</Percentage>
                      </StatItem>
                    );
                })}
        </StatList>
      </StatisticSection>
    );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};