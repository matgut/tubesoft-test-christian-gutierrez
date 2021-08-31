import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Buttons from './Buttons';



test('click the button play', () => {
    const status = 0;
    const mockHandlerPlay = jest.fn();
    const component = render(<Buttons status={status} functionPlay={mockHandlerPlay} />);

    

    expect(mockHandlerPlay).toHaveBeenCalledTimes(1);
});
