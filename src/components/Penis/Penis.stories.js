// External imports
import React from 'react';

// Internal imports
import Penis from './Penis';


export default {
  component: Penis,
  title: 'Penis',
};

const Template = (args) => {
    return(
        <Penis {...args} />
    )
}

export const Default = Template.bind({});
Default.args = {
  
};

