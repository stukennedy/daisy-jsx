#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const COMPONENTS_PATH = path.resolve(__dirname, '../components');
const DEFAULT_DEST_PATH = './components/daisyjsx';
const CONFIG_FILE = path.join(process.cwd(), 'daisyjsx.config.json');

// Create a new Commander program
const program = new Command();

// Define the version of your CLI tool
program.version('1.0.0');

// Helper function to copy a component
async function copyComponent(componentName, destPath) {
  const components = await getAvailableComponents();
  const normalizedComponentName = componentName.toLowerCase();

  // Find the actual component name (case-insensitive match, ignoring extension)
  const actualComponentName = components.find(
    (comp) => path.parse(comp).name.toLowerCase() === normalizedComponentName
  );

  if (!actualComponentName) {
    console.error(chalk.red(`Component "${componentName}" does not exist.`));
    process.exit(1);
  }

  const srcComponentPath = path.join(COMPONENTS_PATH, actualComponentName);
  const destComponentPath = path.join(destPath, actualComponentName);

  try {
    await fs.copy(srcComponentPath, destComponentPath, { overwrite: false, errorOnExist: true });
    console.log(chalk.green(`✔ Component "${actualComponentName}" added successfully.`));
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(chalk.yellow(`Component "${actualComponentName}" already exists at destination.`));
    } else {
      console.error(chalk.red(`Error copying component "${actualComponentName}": ${err.message}`));
    }
  }
}

// Helper function to get available components
async function getAvailableComponents() {
  const items = await fs.readdir(COMPONENTS_PATH);
  return items.filter((item) => {
    const itemPath = path.join(COMPONENTS_PATH, item);
    return fs.lstatSync(itemPath).isDirectory() || path.extname(item) === '.tsx';
  });
}

// Helper function to get the destination path from the config file
async function getDestPath() {
  try {
    const config = await fs.readJson(CONFIG_FILE);
    return config.destPath;
  } catch (err) {
    console.error(chalk.red('Error reading configuration file. Please run "init" command first.'));
    process.exit(1);
  }
}

// `init` command
program
  .command('init')
  .description('Initialize daisyjsx in your project')
  .action(async () => {
    // Prompt the user to select the destination path
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'destPath',
        message: 'Enter the destination path for components:',
        default: DEFAULT_DEST_PATH,
      },
    ]);
    const destPath = answers.destPath;

    // Ensure the destination directory exists
    await fs.ensureDir(destPath);

    // Save the destination path to the config file
    await fs.writeJson(CONFIG_FILE, { destPath });

    console.log(chalk.green('daisyjsx initialized successfully!'));
  });

// `add` command
program
  .command('add <componentName>')
  .description('Add a component to your project')
  .action(async (componentName) => {
    const destPath = await getDestPath();
    await copyComponent(componentName, destPath);
  });

// `update` command (for future implementation)
program
  .command('update [components...]')
  .description('Update components in your project')
  .option('-d, --dest <path>', 'Destination path for components', DEFAULT_DEST_PATH)
  .action(async (components, options) => {
    console.log(chalk.yellow('Update command is not yet implemented.'));
    // Implement update logic here
  });

// Parse the command-line arguments
program.parse(process.argv);