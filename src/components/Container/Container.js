import PropTypes from 'prop-types';
import { MainBox, MainTitle } from './Container.styled';

const Container = ({ title, children }) => (
  <MainBox>
    <MainTitle>{title}</MainTitle>
    {children}
  </MainBox>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
