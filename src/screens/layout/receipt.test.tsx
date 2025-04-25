import { DARK, LIGHT } from '@/helpers/constant/theme';
import { useGlobalContext } from '@/helpers/context';
import Receipt from '@/screens/layout/receipt';
import { THEME } from '@/types/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { Text } from 'react-native';

jest.mock('@/helpers/context', () => ({
  ...jest.requireActual('@/helpers/context'),
  useGlobalContext: jest.fn(),
}));
jest.mock('@react-navigation/native');
describe('Receipt component', () => {
  const mockToggleLogoutPrompt = jest.fn();
  const mockToggleProfile = jest.fn();
  const mockNavigation = jest.fn();
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      addListener: mockNavigation,
      dispatch: jest.fn(),
      goBack: jest.fn(),
      isFocused: jest.fn(),
      navigate: jest.fn(),
      pop: jest.fn(),
      popToTop: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
      remove: jest.fn(),
      setOptions: jest.fn(),
    });
    (useRoute as jest.Mock).mockReturnValue({
      name: 'Receipt',
    });
    (useGlobalContext as jest.Mock).mockReturnValue({
      isProfileShown: true,
      logoutPromptIsActive: true,
      toggleLogoutPrompt: mockToggleLogoutPrompt,
      toggleProfile: mockToggleProfile,
    });
  });
  const RenderView = ({ theme }: Readonly<{ theme: THEME }>) => {
    return (
      <Receipt theme={theme}>
        <Text>content</Text>
      </Receipt>
    );
  };
  it('should be render correctly with dark theme', async () => {
    render(<RenderView theme={DARK} />);
    await waitFor(() => {
      expect(screen.getByTestId('containerLogoDark')).toBeDefined();
      expect(screen.getByTestId('containerFooterDark')).toBeDefined();
      expect(screen.getByTestId('halfCircleDark')).toBeDefined();
      expect(screen.getByTestId('bgShadowDark')).toBeDefined();
      expect(screen.getByTestId('bgImgDark')).toBeDefined();
      expect(screen.getByTestId('profile-dark')).toBeDefined();
    });
  });
  it('should be render correctly with light theme', async () => {
    (useRoute as jest.Mock).mockReturnValue({
      name: 'Home',
    });
    (useGlobalContext as jest.Mock).mockReturnValue({
      isProfileShown: true,
      logoutPromptIsActive: false,
      toggleLogoutPrompt: mockToggleLogoutPrompt,
      toggleProfile: mockToggleProfile,
    });
    render(<RenderView theme={LIGHT} />);
    await waitFor(() => {
      expect(screen.getByTestId('containerLogoLight')).toBeDefined();
      expect(screen.getByTestId('containerFooterLight')).toBeDefined();
      expect(screen.getByTestId('halfCircleLight')).toBeDefined();
      expect(screen.getByTestId('bgShadowLight')).toBeDefined();
      expect(screen.getByTestId('bgImgLight')).toBeDefined();
      expect(screen.getByTestId('profile-light')).toBeDefined();
      expect(screen.getByTestId('toggle-profile')).toBeDefined();
    });
    act(() => {
      fireEvent.press(screen.getByTestId('toggle-profile'));
    });
    await waitFor(() => {
      expect(mockToggleProfile).toHaveBeenCalled();
    });
    const mockCallsForNavigation = mockNavigation.mock.calls[0][1] as (e: any) => void;
    mockCallsForNavigation({ preventDefault: () => {} });
    await waitFor(() => {
      expect(mockToggleLogoutPrompt).toHaveBeenCalled();
    });
  });
});
