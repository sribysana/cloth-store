import React from 'react';

import{SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = WrapperComp => ({isLoading, ...otherProps}) => {
    return isLoading ?
        (<SpinnerOverlay><SpinnerContainer/></SpinnerOverlay>) : (<WrapperComp {...otherProps} />)
    }

    export default WithSpinner;