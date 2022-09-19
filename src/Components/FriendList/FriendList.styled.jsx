import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
  width: 405px;
  display:flex;
  flex-direction:column;
  margin-left:auto;
  margin-right:auto;
  }
`;
export const Description = styled.p`
  margin-left: 85px;
  font-weight: 500;
  font-size: 25px;
`;

export const Image = styled.img`
  padding-left: 20px;
`;

export const Status = styled.span`
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props =>
    props.status === 'online' ? '#51e41d' : '#F40909'};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
