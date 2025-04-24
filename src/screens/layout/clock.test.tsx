import Clock from '@/screens/layout/clock';

import { act, render, screen } from '@testing-library/react-native';
import React, { MutableRefObject } from 'react';
import { Text } from 'react-native';

jest.useFakeTimers();
describe('Clock components', () => {
  const originalDate = Date;
  const now = '2025-04-24T11:52:43.282Z';
  beforeEach(() => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: null as unknown as MutableRefObject<Text | null>,
    });
    global.Date = jest.fn(() => ({
      getTime: () => now,
      getTimezoneOffset: () => now,
      getHours: () => '1',
      getMinutes: () => '2',
      getSeconds: () => '33',
      getMilliseconds: () => '44',
    })) as any;
  });
  afterEach(() => {
    global.Date = originalDate;
  });
  it('should render correctly', () => {
    render(<Clock />);
    act(() => {
      jest.runOnlyPendingTimers();
    });
    const minuteText = screen.getByTestId('minute');
    const hourText = screen.getByTestId('hour');
    expect(minuteText).toBeDefined();
    expect(hourText).toBeDefined();
    expect(minuteText).toHaveTextContent('02');
    expect(hourText).toHaveTextContent('01');
  });
  it('should render correctly when value below 10', () => {
    global.Date = jest.fn(() => ({
      getTime: () => now,
      getTimezoneOffset: () => now,
      getHours: () => '12',
      getMinutes: () => '22',
      getSeconds: () => '33',
      getMilliseconds: () => '44',
    })) as any;
    render(<Clock />);
    const minuteText = screen.getByTestId('minute');
    const hourText = screen.getByTestId('hour');
    expect(minuteText).toBeDefined();
    expect(hourText).toBeDefined();
    expect(minuteText).toHaveTextContent('22');
    expect(hourText).toHaveTextContent('12');
  });
});
