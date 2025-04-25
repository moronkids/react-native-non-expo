import { DARK } from '@/helpers/constant/theme';
import { useGlobalContext } from '@/helpers/context';
import { useNavigation } from '@react-navigation/native';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import LogoutPrompt from './logoutPrompt';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));
jest.mock('@/helpers/context', () => ({
  ...jest.requireActual('@/helpers/context'),
  useGlobalContext: jest.fn(),
}));
describe('Logout Prompt', () => {
  const mockNavigate = jest.fn();
  const mockToggleLogoutPrompt = jest.fn();
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });
    (useGlobalContext as jest.Mock).mockReturnValue({
      toggleLogoutPrompt: mockToggleLogoutPrompt,
      logoutPromptIsActive: true,
    });
  });
  it('should be render correctly and close popup using overlay-bg', async () => {
    render(<LogoutPrompt theme={DARK} />);
    const promptText = 'Keluar dari Sistem Antrean?';
    await waitFor(() => {
      expect(screen.getByText(promptText)).toBeDefined();
    });
    const OverlayBG = screen.getByTestId('overlay-bg');
    const LogoutButton = screen.getByTestId('logout-button');
    expect(OverlayBG).toBeDefined();
    expect(LogoutButton).toBeDefined();
    act(() => {
      fireEvent.press(OverlayBG);
    });
    await waitFor(() => {
      expect(mockToggleLogoutPrompt).toHaveBeenCalled();
    });
  });
  it('should be render correctly and close popup using press button logout', async () => {
    render(<LogoutPrompt theme={DARK} />);
    const promptText = 'Keluar dari Sistem Antrean?';
    await waitFor(() => {
      expect(screen.getByText(promptText)).toBeDefined();
    });
    const LogoutButton = screen.getByTestId('logout-button');
    expect(LogoutButton).toBeDefined();
    act(() => {
      fireEvent.press(LogoutButton);
    });
    await waitFor(() => {
      expect(mockToggleLogoutPrompt).toHaveBeenCalled();
    });
  });
});
