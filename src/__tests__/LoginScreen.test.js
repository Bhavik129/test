import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from './../LoginScreen';

test('renders without errors', () => {
  render(<LoginScreen />);
});

test('handles login button press', () => {
  const {getByText} = render(<LoginScreen />);
  const loginButton = getByText('Login');

  fireEvent.press(loginButton);
});

test('toggles password visibility', () => {
  const {getByTestId} = render(<LoginScreen />);
  const passwordInput = getByTestId('password');
  const toggleButton = getByTestId('toggle-password-visibility');

  expect(passwordInput.props.secureTextEntry).toBe(true);

  fireEvent.press(toggleButton);

  expect(passwordInput.props.secureTextEntry).toBe(false);
});

test('handles login', () => {
  const {getByTestId, getByText} = render(<LoginScreen />);
  const usernameInput = getByTestId('userName');
  const passwordInput = getByTestId('password');
  const loginButton = getByText('Login');

  fireEvent.changeText(usernameInput, 'username');
  fireEvent.changeText(passwordInput, 'password');
  fireEvent.press(loginButton);
});

test('handles invalid login', () => {
  const {getByTestId, getByText} = render(<LoginScreen />);
  const usernameInput = getByTestId('userName');
  const passwordInput = getByTestId('password');
  const loginButton = getByText('Login');

  fireEvent.changeText(usernameInput, 'invalidUsername');
  fireEvent.changeText(passwordInput, 'invalidPassword');
  fireEvent.press(loginButton);
});
