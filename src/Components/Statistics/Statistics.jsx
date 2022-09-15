import PropTypes from 'prop-types';

import {
  Section,
  Title,
  StatsList,
  Item,
  Label,
  LabelPercentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(element => (
          <Item
            key={element.id}
            style={{
              backgroundColor: `${color()}`,
            }}
          >
            <Label>.{element.label}</Label>
            <LabelPercentage>{element.percentage}%</LabelPercentage>
          </Item>
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

export default Statistics;
