<img src="src/images/logo.png" width="100">

# **Simple Fitness Blog**

This project is powered by **Gatsby** and is created for a personal use.

Created with **WordPress Rest API**.

<br>

![](screenshot.png)

<br>

## Installation

Use these commands to install the dependencies and start the server.

1. **Clone from Github**

   ```
   $ git clone git@github.com:devmaroy/simplefitnessblog_cu_pe_ga_wpapi_en.git
   ```

2. **Install dependencies**
   ```
   $ yarn install / npm install
   ```
3. **Navigate into your directory where you cloned repository**

   ```
   $ cd my-folder
   ```

4. **Open or create .env file and set your own settings**

   You will need a website where data lives (WP site with REST API) - **API_URL**

   And also the protocol the website uses (https or http) (WP site with REST API) - **API_PROTOCOL**

   Disquis chat ID (reqister new if you dont have one) - **GATSBY_DISQUS_NAME**

5. **Start it up** `$ gatsby develop` <br>

**Your site is now running at `http://localhost:8000`!**

<br>

## Structure

A quick look at the top-level files and directories you'll see in my project.

    .
    ├── node_modules
    ├── src
    ├── utils
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package.json
    ├── screenshot.png
    ├── yarn.lock
    ├── .env.example
    └── README.md

<br>

1.  **`/node_modules`**: This directory contains all of the modules of code that project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of site (what you see in the browser) such as site header or a page template. `src` is a convention for “source code”.

3.  **`/utils`**: This directory will contain all of the helpers functions and files for better code management. The main use case here is to separate logic into multiple files instead of one (especially gatsby-node can get large) and few helper functions.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierignore`**: Configuration file for prettier - for files to ignore.

6.  **`.prettierrc`**: Configuration file for prettier.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where is information about site (metadata) like the site title and description, Gatsby plugins, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for project.

12. **`screenshot.png`**: Screenshots of the final website.

13. **`yarn.lock`**: There is an identifier for every dependency and sub dependency that is used for a project.

14. **`.env.example`**: This file is an example for .env file you need to create if you want to run this project.

15. **`README.md`**: A text file containing useful reference information about project.

<br>

<hr>

<br>

### Live example:

**[simplefitnessblog.marekmatejovic.com](https://simplefitnessblog.marekmatejovic.com)**

<br>

Created by **[@devmaroy](https://twitter.com/devmaroy)** feel free to contact me

e-mail: **[hello@devmaroy.com](mailto:hello@devmaroy.com?subject=[GitHub]%20simplefitnessblog_cu_pe_ga_wpapi_en.git)**
