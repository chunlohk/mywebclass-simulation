PS C:\Users\Chun\PycharmProjects\chun-mywebclass-simulation-4> npm run build

> mywebclass.org@0.1.0 build
> webpack  --config webpack.config.prod.js && node scripts/update-webpack-result.js

assets by status 1.72 MiB [cached] 6 assets
assets by path . 1.15 MiB
  assets by status 897 KiB [compared for emit]
    asset index.js 857 KiB [compared for emit] [minimized] [big] (name: main) 2 related assets
    asset content.html 12.5 KiB [compared for emit]
    asset privacy.html 8.09 KiB [compared for emit]
    asset story.html 6.32 KiB [compared for emit]
    asset index.html 4.47 KiB [compared for emit]
    asset startnow.html 4.35 KiB [compared for emit]
    asset contact.html 4.21 KiB [compared for emit]
  assets by status 279 KiB [emitted]
    asset fonts/bootstrap-icons.woff?24e3eb84d0bcaf83d77f904c78ac1f47 161 KiB [emitted] [from: node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff?24e3eb84d0bcaf83d77f904c78ac1f47] (auxiliary name: main)
    asset fonts/bootstrap-icons.woff2?24e3eb84d0bcaf83d77f904c78ac1f47 118 KiB [emitted] [from: node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?24e3eb84d0bcaf83d77f904c78ac1f47] (auxiliary name: main)
orphan modules 211 KiB [orphan] 62 modules
runtime modules 2.42 KiB 8 modules
cacheable modules 1010 KiB (javascript) 279 KiB (asset)
  asset modules 4.49 KiB (javascript) 279 KiB (asset)
    modules by mime type image/svg+xml 4.4 KiB 16 modules
    modules by path ./ 84 bytes (javascript) 279 KiB (asset)
      ./node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?24e3eb84d0bcaf83d77f904c78ac1f47 42 bytes (javascript) 118 KiB (asset) [built] [code generated]
      ./node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff?24e3eb84d0bcaf83d77f904c78ac1f47 42 bytes (javascript) 161 KiB (asset) [built] [code generated]
  javascript modules 1010 KiB
    modules by path ./node_modules/ 262 KiB 10 modules
    modules by path ./src/ 746 KiB
      ./src/js/main.js + 59 modules 213 KiB [built] [code generated]
      ./src/js/allPages.js 1.96 KiB [built] [code generated]
      + 2 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  assets/images/KidsLearnAI-f99e94c459214caed13b.png (1.38 MiB)
  index.js (857 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (857 KiB)
      index.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.76.3 compiled with 3 warnings in 21255 ms
