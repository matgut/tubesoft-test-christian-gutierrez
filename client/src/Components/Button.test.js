import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Buttons from './Buttons';



test('click the button play', () => {
    const status = 2;
    const mockHandlerPlay = jest.fn();
    const component = render(<Buttons status={status} function={{mockHandlerPlay}}/>);

    expect(mockHandlerPlay).toHaveBeenCalledTimes(1);
});
