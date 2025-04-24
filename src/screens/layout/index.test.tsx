import { DARK } from '@/helpers/constant/theme';
import Layout from '@/screens/layout';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Layout components', () => {
  it('should render correctly', () => {
    render(
      <Layout theme={DARK}>
        <Text>Test</Text>
      </Layout>
    );
    screen.debug();
  });
});
