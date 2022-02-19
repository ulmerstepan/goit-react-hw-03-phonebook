import styled from '@emotion/styled';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputFilter = styled.input`
  margin-top: 5px;
  padding: 10px;
  cursor: pointer;
  border: 1.5px solid #000000;
  &:hover,
  &:focus {
    background-color: rgb(202, 221, 245);
  }
`;
