import {src, dest, series, parallel} from 'gulp';
import template from 'gulp-template';
import rename from 'gulp-rename';
import chalk from 'chalk';
import {argv} from 'yargs';
import fs from 'fs';

// TO RUN 
// gulp --gulpfile scripts/createComponent.babel.js --name "Penis"



// Function called to throw any kind of an error
const createError = (errorMessage) => {
    throw chalk.white.bgRed.bold(errorMessage)
}

// Extracting component name provided by user through the --name flag
const nameArg = argv.name

// Checking the validity of name variable given by user
if (!nameArg || nameArg === true || nameArg.replace(' ', '').length === 0) {
    createError(`
        A name is required to create a container. 
        You can do so by running: 
        npm run create:container --name yourContainerName
    `)
}

// Converts any name given by user to one where the first character is uppercase
const name = nameArg.charAt(0).toUpperCase() + nameArg.slice(1)

const destDir = `../src/components/${name}`

const assertContainerDoesNotExist = (done) => {
    const containerDirectoryExists = fs.existsSync(`../src/components/${name}`)
    if (containerDirectoryExists) {
        createError(`Could not create container, because the directory: '../src/components/${name}' already exists`)
        done()
    }
    done()
}

const component = () => {
    return src('templates/Component.js')
        .pipe(rename(`${name}.js`))
        .pipe(template({name}))
        .pipe(dest(destDir));
}

const story = () => {
    return src('templates/Story.js')
        .pipe(rename(`${name}.stories.js`))
        .pipe(template({name}))
        .pipe(dest(destDir))
}

const index = () => {
    return src(`templates/index.js`)
        .pipe(template({name}))
        .pipe(dest(destDir))
}

const styles = () => {
    return src('templates/Styles.scss')
        .pipe(dest(destDir))
}

const styleConstants = () => {
    return src('templates/Constants.scss')
        .pipe(dest(destDir))
}

const logSuccess = (done) => {
    console.log(chalk.white.bgGreen(`Successfully created container`))
    console.log(`change ${chalk.green.bgBlack.bold('src/components/Penis')} to get started`)
    done();
}
  
exports.default = series(
    assertContainerDoesNotExist,
    parallel(
        component,
        story,
        index,
        styles,
        styleConstants
    ),
    logSuccess
)