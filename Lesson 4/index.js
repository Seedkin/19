import './index.css';
import logo from './assets/logo.jpeg';

const title = document.createElement('h1');
title.textContent = 'I love JavaScript';

const jsLogo = document.createElement('img');
jsLogo.src = logo;

const body = document.querySelector('body');
body.append(title);
body.append(jsLogo);