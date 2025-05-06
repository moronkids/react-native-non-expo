import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GlobProvider, useGlobalContext } from './index';

function MockComponent() {
  const { isProfileShown, setIsProfileShown, toggleLogoutPrompt, toggleProfile } = useGlobalContext();
  useEffect(() => {
    setIsProfileShown(true);
  }, [setIsProfileShown]);
  return (
    <View testID='mock-component'>
      <Text>{isProfileShown ? 'Loaded' : 'Not Loaded'}</Text>
      <TouchableOpacity onPress={toggleProfile} testID='toggle-profile'>
        <Text>Toggle Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleLogoutPrompt} testID='toggle-logout-prompt'>
        <Text>Toggle Logout Prompt</Text>
      </TouchableOpacity>
    </View>
  );
}
describe('useGlobalContext', () => {
  it('should return default values', async () => {
    render(
      <GlobProvider>
        <MockComponent />
      </GlobProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId('mock-component')).toHaveTextContent('LoadedToggle ProfileToggle Logout Prompt');
    });
  });
  it('should toggle isProfileShown state', async () => {
    render(
      <GlobProvider>
        <MockComponent />
      </GlobProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId('mock-component')).toHaveTextContent('LoadedToggle ProfileToggle Logout Prompt');
    });
  });
  it('should toggle logoutPromptIsActive state', async () => {
    render(
      <GlobProvider>
        <MockComponent />
      </GlobProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId('mock-component')).toHaveTextContent('LoadedToggle ProfileToggle Logout Prompt');
    });
  });
  it('should trigger fireEvent toggleProfile', async () => {
    render(
      <GlobProvider>
        <MockComponent />
      </GlobProvider>
    );
    fireEvent.press(screen.getByTestId('toggle-profile'));
    await waitFor(() => {
      expect(screen.getByTestId('mock-component')).toHaveTextContent('Not LoadedToggle ProfileToggle Logout Prompt');
    });
  });
  it('should trigger fireEvent toggleLogoutPrompt', async () => {
    render(
      <GlobProvider>
        <MockComponent />
      </GlobProvider>
    );
    fireEvent.press(screen.getByTestId('toggle-logout-prompt'));
    await waitFor(() => {
      expect(screen.getByTestId('mock-component')).toHaveTextContent('LoadedToggle ProfileToggle Logout Prompt');
    });
  });
});
