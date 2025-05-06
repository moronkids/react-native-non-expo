import ItemOfMenu from '@/screens/home/itemOfMenu';
import { useNavigation } from '@react-navigation/native';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

jest.mock('@react-navigation/native');
describe('ItemOfMenu', () => {
  const mockListener = jest.fn();
  const mockDispatch = jest.fn();
  const mockIcon = () => null;
  beforeEach(() => {
    (useNavigation as unknown as jest.Mock).mockReturnValue({
      addListener: mockListener,
      dispatch: mockDispatch,
    });
  });
  it('should be render correctly light theme', () => {
    render(<ItemOfMenu title='Render simas' Icon={mockIcon} isPriority={false} />);
    expect(screen.getByText('Render simas')).toBeTruthy();
    expect(screen.getByTestId('light')).toBeTruthy();
  });
  it('should be render correctly dark theme', () => {
    render(<ItemOfMenu title='Render simas' Icon={mockIcon} isPriority={true} />);
    expect(screen.getByText('Render simas')).toBeTruthy();
    expect(screen.getByTestId('dark')).toBeTruthy();
    expect(screen.getByTestId('item-of-menu')).toBeTruthy();
    act(() => {
      fireEvent.press(screen.getByTestId('item-of-menu'));
    });
    expect(mockDispatch).toHaveBeenCalled();
  });
});
