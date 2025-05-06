import Home from '@/screens/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { render, screen, waitFor } from '@testing-library/react-native';

jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));
jest.mock('@react-navigation/native');
describe('Home', () => {
  const mockNavigation = jest.fn();
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      addListener: mockNavigation,
    });
    (useRoute as jest.Mock).mockReturnValue({
      name: 'Home',
    });
    AsyncStorage.setItem('isPriority', 'true');
  });
  afterEach(() => {
    AsyncStorage.clear();
  });
  it('should be render correctly with dark theme', () => {
    render(<Home />);
    const welcomingText = screen.getByText('Selamat datang');
    expect(welcomingText).toBeDefined();
    const welcomeDesc = screen.getByText('Silakan pilih layanan');
    expect(welcomeDesc).toBeDefined();
    expect(welcomingText).toHaveStyle({ color: '#303435' });
  });
  it('should be render correctly with light theme', () => {
    AsyncStorage.setItem('isPriority', 'false');
    render(<Home />);
    const welcomingText = screen.getByText('Selamat datang');
    expect(welcomingText).toBeDefined();
    const welcomeDesc = screen.getByText('Silakan pilih layanan');
    expect(welcomeDesc).toBeDefined();
    expect(welcomingText).toHaveStyle({ color: '#303435' });
  });
  it('should be render correctly with default theme', () => {
    AsyncStorage.clear();
    render(<Home />);
    const welcomingText = screen.getByText('Selamat datang');
    expect(welcomingText).toBeDefined();
    const welcomeDesc = screen.getByText('Silakan pilih layanan');
    expect(welcomeDesc).toBeDefined();
    expect(welcomingText).toHaveStyle({ color: '#303435' });
  });
  it('should catch error when async storage is failing', async () => {
    const spy = jest.spyOn(AsyncStorage, 'getItem');
    spy.mockImplementation(() => {
      throw new Error('Async Storage is failing');
    });
    render(<Home />);
    await waitFor(() => {
      expect(spy).toThrow('Async Storage is failing');
    });
  });
});
