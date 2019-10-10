# React Starter Kit
Pre-designed project for persian language website with simple standard file structre.


## Description
The project consist of these configrations:

- axios
- ant design library
- react-router
- persian fonts located at res/assets/fonts
- pre-designed style located at res/CssStyles.css

it also contains pre-designed login and signup pages and a header for website.


## Installation

clone the repository use Git:

```bash
git clone https://github.com/salehafzoon/React-Starter-Kit.git
```

change app name in package.json:
```bash
"name": "react-starter-kit",
...
```

to these changes in manifest.json as you like:
```bash
"short_name": "React Starter kit",
"name": "React Starter kit",
...
```
and also index.html in public folder:
```bash
<head>
  <title>React starter kit</title>
</head>
...
```

delete ```yarn.lock``` before installing packages 
and at the last just install packages by:
```terminal
> npm install 
```
or:
```terminal
> yarn install
```

you can set your own color schema by editing css variables located at res/CssStyles.css
```bash
:root {
  --primaryDarkColor: #116466;
  --primaryColor: #009688;
  --accentDarkColor: #ac6f39;
  --accentColor: #cc9666;
}
...
```



