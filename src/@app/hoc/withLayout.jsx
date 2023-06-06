import PropTypes from 'prop-types';
import AppLayout from '../core/AppLayout';

const withLayout = (Component, props) => {
  const LayoutWrapper = () => {
    return (
      <AppLayout>
        <Component />
      </AppLayout>
    );
  };
  return LayoutWrapper;
};

withLayout.propTypes = {
  Component: PropTypes.element,
  props: PropTypes.object,
};

export default withLayout;
