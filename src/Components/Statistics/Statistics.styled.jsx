import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  text-align: center;
  width: 405px;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  color: black;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.li`
  display: inline-block;
  flex-basis: calc((100%) / 5);
  text-align: center;
  padding: 12px 20px;
  color: #ffffff;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`;
export const LabelPercentage = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
`;
