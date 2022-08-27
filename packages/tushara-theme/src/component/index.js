import React from 'react';
import { connect } from "frontity"
import MainLayout from '../MainLayout.js';

const Root = (state)  => {
    return ( <> <MainLayout/> </>
     );
};

export default connect(Root);