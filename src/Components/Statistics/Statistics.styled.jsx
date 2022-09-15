import styled from '@emotion/styled';

export const Section = styled.section`
  border: 0.1px solid #afb1b8;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 405px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
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
