---
title: ipress2
layout: ./layout.svelte
---

# {_fm.title}

ipress2 is a static website generator using MDsveX technology.

## Install

```

npx degit twilson63/ipress2 [your project]
cd [your project]
```

Create your Markdown files in the `src` folder.

## Run

```

npm run build
npm start
```

## How to use

* You can write regular markdown
* Each file is converted to an html page
* You can add styles using a style tag
* You can use front matter

example

```

---
title: Hello
date: 2019-06-08
---

My markdown goes here
```

* You can use the server side features of MDsveX

https://github.com/pngwn/MDsveX

> Any dynamic features won't work because this is compiled to static html.

* You can use Svelte Components, but only the serverside bits.

https://svelte.dev

## What can I do with this project?

* Create your own blog
* Create a documentation site
* Create simple static web sites

## Why would I want to use ipress?

* Easy

Markdown is as easy as it gets when writing markup.

* Flexible

Add custom components, create sidebars with svelte, add items to header with svelte:header. 

* Fun

Running enhanced markdown with MDsveX is fun.

## License

MIT

## Thanks

A big thanks to the Svelte Team for all of the wonderful work they have done, this project is just a small abstraction on their hard work:

Shout Out to https://github.com/pngwn for MDsveX and https://github.com/Rich-Harris for his vision and implementation of Svelte and Rollup

Also shout out to `klaw-sync` project for making it easy to walk directories and finally the NodeJS project for creating a great product and ecosystem.



