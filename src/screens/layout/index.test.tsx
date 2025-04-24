import { DARK } from '@/helpers/constant/theme';
import { useGlobalContext } from '@/helpers/context';
import Layout from '@/screens/layout';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { act } from 'react';
import { Text, View } from 'react-native';

jest.mock('@react-navigation/native');
jest.mock('@/helpers/context', () => ({
  ...jest.requireActual('@/helpers/context'),
  useGlobalContext: jest.fn(),
}));
describe('Layout components', () => {
  const mockToggleLogoutPrompt = jest.fn();
  const mockToggleProfile = jest.fn();
  const mockNavigation = jest.fn();
  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      isProfileShown: true,
      toggleLogoutPrompt: mockToggleLogoutPrompt,
      toggleProfile: mockToggleProfile,
    });
    (useRoute as jest.Mock).mockReturnValue({
      name: 'layout',
    });
    (useNavigation as jest.Mock).mockReturnValue({
      addListener: mockNavigation,
    });
  });
  const RenderView = ({ desc }: Readonly<{ desc: string }>) => {
    return (
      <Layout theme={DARK}>
        <View>
          <Text>{desc}</Text>
        </View>
      </Layout>
    );
  };
  it('should render correctly', () => {
    render(<RenderView desc='render children' />);
    expect(screen.getByText('render children')).toBeTruthy();
  });
  it('should render correctly with layout regist', () => {
    (useRoute as jest.Mock).mockReturnValue({
      name: 'Regist',
    });
    render(<RenderView desc='render children regist' />);
    expect(screen.getByText('render children regist')).toBeTruthy();
  });
  it('should render correctly with layout home and press toggle profile', async () => {
    (useRoute as jest.Mock).mockReturnValue({
      name: 'Home',
    });
    render(<RenderView desc='render children Home' />);
    expect(screen.getByText('render children Home')).toBeTruthy();
    await waitFor(() => {
      expect(mockNavigation).toHaveBeenCalled();
    });
    const mockCallsForNavigation = mockNavigation.mock.calls[0][1] as (e: any) => void;
    mockCallsForNavigation({ preventDefault: () => {} });
    expect(mockToggleLogoutPrompt).toHaveBeenCalled();
    const overlayProfile = screen.getByTestId('profile-btn');
    expect(overlayProfile).toBeTruthy();
    act(() => {
      fireEvent.press(overlayProfile);
    });
    await waitFor(() => {
      expect(mockToggleProfile).toHaveBeenCalled();
    });
  });
});
