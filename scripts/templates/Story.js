// External imports
import React from 'react';

// Internal imports
import <%= name %> from './<%= name %>';


export default {
  component: <%= name %>,
  title: '<%= name %>',
};

const Template = (args) => {
    return(
        <<%= name %> {...args} />
    )
}

export const Default = Template.bind({});
Default.args = {
  
};

