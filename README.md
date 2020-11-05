## This CRA app contains tools to create React components with a terminal command quickly and easily

### Install the prerequisite (dev) packages
  
`yarn add -D @babel/core @babel/preset-env @babel/register chalk gulp gulp-cli gulp-footer gulp-rename gulp-template yargs` 
  

### Files and code to include

This was developed within a CRA app since it would be used in the same or similar environment anyways. In order to make the tool work in other projects, one must copy the **.babelrc** file with its contents, and the **scripts** folder which includes the gulp task file and templates that are used for creating components. Also, **script** from package.json called "create:component" must be copied over to the new project as well.


### Project structure

This tool assumes a certain project structure. Meaning, components will be only installed in src/components folder. If such folder isn't present, the tool won't work. 

### To run

To run the tool and create a component with a name of your choosing
`yarn create:component YOUR_NAME`
