import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import axios from 'axios';
import HomeScreen from './../HomeScreen';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component without errors', () => {
    render(<HomeScreen />);
  });

  it('fetches and displays posts on load', async () => {
    const mockedResponse = {
      data: [
        {id: 1, title: 'Post 1', body: 'Body 1'},
        {id: 2, title: 'Post 2', body: 'Body 2'},
      ],
    };
    axios.get.mockResolvedValue(mockedResponse);

    const {getByTestId} = render(<HomeScreen />);

    await waitFor(() => {
      expect(getByTestId('postItem-1')).toBeTruthy();
      expect(getByTestId('postItem-2')).toBeTruthy();
    });
  });

  it('displays an error message on failed data fetch', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch data'));
    const {getByTestId} = render(<HomeScreen />);

    await waitFor(() => {
      expect(getByTestId('errorContainer')).toBeTruthy();
    });
  });
});
