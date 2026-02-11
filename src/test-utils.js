import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'assets/theme';
import { VisionUIControllerProvider } from 'context';

const AllTheProviders = ({ children }) => {
  return (
    <VisionUIControllerProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </VisionUIControllerProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
