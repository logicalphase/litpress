# Getting Started

> Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

First, create a fork of the [hyperpress/logicalphase](https://github.com/hyperpress/logicalphase) repo by hitting the `fork` button on the GitHub page.

Next, clone your fork onto your computer with this command (replacing YOUR_USERNAME with your actual GitHub username)

```
git clone git@github.com:YOUR_USERNAME/logicalphase.git
```

Once cloning is complete, change directory to the repo.

```
cd logicalphase
```

# Preparing Your Local Environment for Development

Now that you have cloned the repository, run the following commands to set up the development environment.

```
yarn install
```

This will download and install all packages needed.

# Making Your Changes

Make your changes to the project. Commits are linted using precommit hooks, meaning that any code that raises linting error cannot be committed. In order to help avoid that, we recommend using an IDE or editor with an eslint plugin in order to streamline the development process. Plugins are available for all the popular editors. For more information see [ESLint Integrations](https://eslint.org/docs/user-guide/integrations)

# Committing Your Changes

Logical Phase uses [commitlint](https://github.com/marionebl/commitlint) to standardize commit messages in the project. Commit messages must follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
Logical Phase uses package name as scope. So for example if you fix a _terrible bug_ in the package `@logicalphase/testing`, the commit message should look like this:

```
fix(testing): fix terrible bug
```
