import styled from '@emotion/styled';

export const FormContact = styled.form`
  margin: 20px 0;
  padding: 20px 15px;
  border: 1.5px solid #000000;
`;

export const LabelContact = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputContact = styled.input`
  margin-top: 5px;
  padding: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgb(202, 221, 245);
  }
`;

export const AddBtn = styled.button`
  padding: 5px 10px;
  margin-left: auto;
  margin-right: auto;
  color: green;
  border-color: green;

  &:hover,
  &:focus {
    background-color: green;
    color: #fff;
  }
`;
