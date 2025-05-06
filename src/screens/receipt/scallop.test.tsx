import Scallop from '@/screens/receipt/scallop';
import { render, screen, waitFor } from '@testing-library/react-native';

describe('Scallop', () => {
  it('should render correctly without reverse', async () => {
    render(<Scallop />);
    await waitFor(() => {
      const circle = screen.getByTestId('circle-0');
      expect(circle).toBeDefined();
      expect(circle).toHaveProp('clipPath', 'cut-off-bottom');
    });
  });
  it('should render correctly with reverse', async () => {
    render(<Scallop reverse />);
    await waitFor(() => {
      const circle = screen.getByTestId('circle-0');
      expect(circle).toBeDefined();
      expect(circle).toHaveProp('clipPath', 'cut-off-top');
    });
  });
});
