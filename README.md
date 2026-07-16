# Random Fact Generator v2.0

A modern, responsive single-page web application that fetches and displays fascinating random facts in real time using a live REST API.

## Description

Version 2.0 upgrades this project from a static, hardcoded list of text into a dynamic, production-ready web application. It connects to a public API via asynchronous JavaScript, introduces a "Copy to Clipboard" feature, and boasts a clean, dark-mode glassmorphism interface. 

## Features

- **Live API Integration:** Dynamically fetches thousands of random facts from an external API (`uselessfacts.jsph.pl`).
- **One-Click Copy:** Seamlessly copy your favorite facts to the clipboard using the modern Web Clipboard API.
- **Async Safety:** Buttons automatically lock into a loading state during API calls to prevent multi-click spam.
- **Glassmorphic UI Design:** A sleek, dark-themed layout built with responsive CSS flexbox variables and blur filters.
- **Modern Iconography:** Clean vector icon integrations powered by the Lucide icon set.

## Project Structure

```text
random-fact-generator/
├── index.html
├── style.css
├── script.js
└── README.md
