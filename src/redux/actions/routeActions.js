import { push as _push, replace as _replace, goBack as _goBack, goForward as _goForward } from 'react-router-redux';

export const push = (location) => {
    _push(location);
};

export const replace = (location) => {
    _replace(location);
};

export const goBack = () => {
    _goBack();
};

export const goForward = () => {
    _goForward();
};
