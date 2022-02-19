import styled from '@emotion/styled';

export const ContactItemBox = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #000000;
  &:hover,
  &:focus {
    background-color: rgb(202, 221, 245);
  }
`;
export const ContactInfoBox = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: #fff;
  border: 0.5px solid #000000;
`;
export const NameContact = styled.span``;
export const TelContact = styled.a`
  color: #000000;
  margin-left: auto;
`;
export const DeleteBtn = styled.button`
  padding: 5px 10px;
  color: red;
  border-color: red;
  background-color: #fff;
  margin-top: auto;
  margin-bottom: auto;

  &:hover,
  &:focus {
    background-color: red;
    color: #fff;
  }
`;
