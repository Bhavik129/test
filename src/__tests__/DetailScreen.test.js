import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DetailScreen from './../DetailScreen';

const mockNavigation = {
  goBack: jest.fn(),
};

const mockRoute = {
  params: {
    post: {
      title: 'Test Title',
      body: 'Test Body',
    },
  },
};

describe('DetailScreen', () => {
  it('renders the component without errors', () => {
    render(<DetailScreen route={mockRoute} navigation={mockNavigation} />);
  });

  it('calls navigation.goBack when the back button is pressed', () => {
    const {getByTestId} = render(
      <DetailScreen route={mockRoute} navigation={mockNavigation} />,
    );

    const backButton = getByTestId('backButton');

    fireEvent.press(backButton);

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
