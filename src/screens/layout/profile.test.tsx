import { DARK } from '@/helpers/constant/theme';
import { useGlobalContext } from '@/helpers/context';
import Profile from '@/screens/layout/profile';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native';

jest.mock('@/helpers/context');
describe('Profile component', () => {
  const mockToggleLogoutPrompt = jest.fn();
  const mockToggleProfile = jest.fn();
  const mockSetIsProfileShown = jest.fn();

  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      isProfileShown: true,
      toggleLogoutPrompt: mockToggleLogoutPrompt,
      toggleProfile: mockToggleProfile,
      setIsProfileShown: mockSetIsProfileShown,
    });
  });
  it('should be render correctly', async () => {
    render(<Profile theme={DARK} />);
    expect(screen.getByTestId('wrapper')).toHaveStyle({ backgroundColor: '#E0AA3E' });
    expect(screen.getByTestId('wrapper-1')).toHaveStyle({ backgroundColor: '#121516' });
    expect(screen.getByTestId('wrapper-2')).toHaveStyle({ backgroundColor: '#E0AA3E' });
    expect(screen.getByTestId('text-1')).toHaveStyle({ color: '#FFFFFF' });
    expect(screen.getByTestId('text-2')).toHaveStyle({ color: '#C3CDD1' });
    expect(screen.getByTestId('text-3')).toHaveStyle({ color: '#C3CDD1' });
    expect(screen.getByTestId('text-4')).toHaveStyle({ color: '#FDFDFD' });
    expect(screen.getByTestId('text-5')).toHaveStyle({ color: '#FDFDFD' });
    act(() => {
      fireEvent.press(screen.getByTestId('text-5'));
    });
    await waitFor(() => {
      expect(mockToggleLogoutPrompt).toHaveBeenCalled();
      expect(mockToggleProfile).toHaveBeenCalled();
    });
  });
});
