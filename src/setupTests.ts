// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

/*
   Importing ROUTES in constants/app.tsx is causing a circular dependency
   in the application (components -> constants/index.ts -> ROUTES -> components -> constants/index.ts).
   While not an issue during development or production builds, during testing
   Jest unfortunately returns undefined when importing something that was previously imported.
   Mocking the routing import solves the problem and there's no need to change the codebase.
*/
/* jest.mock('router', () => ({
    ROUTES: jest.requireActual('router/routes').ROUTES,
})); */

jest.setTimeout(30000);
