/**
 * @jest-environment jsdom
 */

import React from 'react';
import ArticleList from '../ArticleList';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


// Check if UI has 'Times'
test('renders the correct text', () => {
    render(<ArticleList />);

    const { getAllByText } = render(
        <ArticleList apiKey={'YOUR-API-KEY'} />,
    );

    expect(getAllByText(/Times/i)).toBeTruthy();
});