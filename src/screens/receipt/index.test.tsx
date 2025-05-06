import Receipt from '@/screens/receipt';
import { render, screen } from '@testing-library/react-native';

jest
  .mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useRoute: () => ({ name: 'Home' }),
    useNavigation: () => ({
      addListener: jest.fn(),
    }),
    useNavigationState: () => ({
      params: {
        service: 'Teller',
      },
    }),
  }))
  .mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));
describe('Receipt', () => {
  it('should be render correctly', () => {
    render(<Receipt />);
    const title = screen.getByTestId('title');
    expect(title).toBeDefined();
    expect(title).toHaveStyle({ color: '#303435' });
  });
});
