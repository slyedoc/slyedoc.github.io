if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-455a0d7a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.fdedbaea.js",revision:null},{url:"assets/_name_.21d7c0f3.js",revision:null},{url:"assets/404.d70f01ee.js",revision:null},{url:"assets/about.5defcc1f.js",revision:null},{url:"assets/boids.a42180f8.js",revision:null},{url:"assets/boids.ec342622.css",revision:null},{url:"assets/disco.9937faaf.js",revision:null},{url:"assets/disco.ee4d17ba.css",revision:null},{url:"assets/home.e62b4143.js",revision:null},{url:"assets/index.cb1826e3.css",revision:null},{url:"assets/index.da199132.js",revision:null},{url:"assets/README.ebe269af.js",revision:null},{url:"assets/snake.56e0546c.css",revision:null},{url:"assets/snake.ede1e6ce.js",revision:null},{url:"assets/sponza.e1ac3a18.css",revision:null},{url:"assets/sponza.edd0ba53.js",revision:null},{url:"assets/ui_demo.2c4e736f.js",revision:null},{url:"assets/ui_demo.9a66877e.css",revision:null},{url:"assets/vendor.f7b7f488.js",revision:null},{url:"assets/virtual_pwa-register.6123088e.js",revision:null},{url:"assets/wasm.12511a11.js",revision:null},{url:"index.html",revision:"dad1f1b0356071d58bd532dae7b3025d"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
