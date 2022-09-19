import styled from '@emotion/styled';

export const Table = styled.table`
  width: 405px;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  table {
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
    font-size: 15px;
    border-collapse: collapse;
    text-align: center;
  }

  th {
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 15px;
    font-weight: 400;
    background: darkturquoise;
    color: white;
    padding: 10px 20px;

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  td {
    background: lightgray;

    padding: 10px 20px;
    border: 1px solid #afb1b8;
    border-style: solid;
    border-width: 0 1px 1px 0;

    text-align: center;
    font-weight: 400;

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;
