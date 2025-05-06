import SplashScreen from '@/screens/splashScreen';
import { useNavigation } from '@react-navigation/native';
import { render, screen, waitFor } from '@testing-library/react-native';

jest.mock('@react-navigation/native');
jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));
describe('SplashScreen', () => {
  const mockDispatch = jest.fn();
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      dispatch: mockDispatch,
    });
  });
  it('should render correctly', async () => {
    render(<SplashScreen />);
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
      expect(screen.getByTestId('splash-screen')).toBeDefined();
    });
  });
});
