// @ts-nocheck
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import store from '../../store';

function render(
    ui,
    {
        initialState,
        store = store,
        ...renderOptions
    }
) {
    function Wrapper({ children }) {
        const history = createMemoryHistory();

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Suspense fallback="...">
                        {children}
                    </Suspense>
                </Router>
            </Provider>
        )
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'

export { render };