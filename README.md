# ipress2

ipress2 is a static website generator using MDsveX technology.

This allows you to create websites in Markdown, MDsveX, and SvelteJs, and renders
to static html such that your HTML has no runtime JavaScript in it. You can use MD, 
MDsveX, Svelte as a way to compose your site into separate components.

This is great for static blogs, documentation sites, and small web sites, once your 
code is generated in the `dist` folder you can publish on any static site service.

## Install

```
npx degit twilson63/ipress2 [your project]
cd [your project]
```

Create your Markdown files in the `src` folder.

## Build and Run Locally

```
npm run build
npm start
```

## How to use ipress

The focus of this tool is simplicity, add your files in the `src` directory
when done, run `npm run build` and `ipress` generates your `html` files in 
the `dist` directory.

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

<svelte:head>
  <title>My Awesome Site</title>
</svelte:head>

# {_fm.title}

My markdown goes here

<style>
p {
  color: peru;
}
</style>
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

* Its Easy

Markdown is as easy as it gets when writing markup.

* Flexible

Add custom components, create sidebars with svelte, add items to header with svelte:head. 

* Fun

Running enhanced markdown with MDsveX is fun. Need to get some content online, you don't need a lot 
of tooling, just write some markdown, use some css and ship it!

## License

MIT

## Thanks

A big thanks to the Svelte Team for all of the wonderful work they have done, this project is just a small abstraction on their hard work:

Shout Out to https://github.com/pngwn for MDsveX and https://github.com/Rich-Harris for his vision and implementation of Svelte and Rollup

Also shout out to `klaw-sync` project for making it easy to walk directories and finally the NodeJS project for creating a great product and ecosystem.


