import { push as _push, replace as _replace, goBack as _goBack, goForward as _goForward } from 'react-router-redux';

export const push = (location) => {
    return _push(location);
};

export const replace = (location) => {
    return _replace(location);
};

export const goBack = () => {
    return _goBack();
};

export const goForward = () => {
    return _goForward();
};
