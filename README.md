## Creat React component
This is a tool that creates React components based on predefined templates. It comes with node_modules already installed since the overall size isn't too large. Also, it allows to just clone this repository in a React project and almost immediately make use of it without much additional installation or changes in the envirnonment.  
  
### Project structure

This tool assumes a certain project structure. Meaning, components will be only installed in src/components folder. If such folder isn't present, the tool won't work. Therefore, this repository must be cloned at the root of the project.

### To run

Before running the tool, you must 

* Clone this repository in your React project root
`git clone https://github.com/emilsbee/createReactComponent.git`

* Add this script to your project package.json
`"create:component": "cd createReactComponent && yarn create:component"`

* Add this line to your .gitignore
`createReactComponent/`

* Then to create a component with a name of your choosing run
`yarn create:component YOUR_NAME`

