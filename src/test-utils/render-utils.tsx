import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { AllProviders } from './provider-wrapper';
function customRender(ui: ReactElement, options?: RenderOptions) {
    return render(ui, { wrapper: AllProviders, ...options });
}
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
