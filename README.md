# Weekly Meal Planner

An app to plan your weekly meals. It uses React to manage view and Redux to manage state.

## Set Up Instructions

Clone the project and install its dependencies

```bash
git clone git@github.com:arturjzapater/meal-planner.git
cd meal-planner
npm i
```

Start the applications

```bash
npm start
```

The app will be available on <localhost:3000> by default, but you can change that in [Webpack's configuration](webpack.config.js)

## Known Limitations

The PDF converter doesn't work on a mobile screen. It also doesn't print the schedule extremely well. I am investigating how to fix it.
