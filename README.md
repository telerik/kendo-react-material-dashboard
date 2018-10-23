# Kendo UI for React showcase application.

> This application shows an example of how one can use Kendo UI for React in react/redux scenario.

> The application is based on the PWA standards, has a manifest.json and a registered Service Worker.

## Build Setup


```bash
# install dependencies
npm install
# serve with hot reload at localhost:3000
npm start
# build for production with minification
npm run build
```

## Further help

Creating a new project via ```create-react-app``` will create a default `manifest.json` file of and a default `service worker`. We can further modify these files to cover different scenarios. [PWA builder](https://www.pwabuilder.com/) is a great tool that can be used to generate `manifest.josn` and a custom `service worker`.

We can suggest checking the official article for the Service Workers which can be helpful to gain more insights on how they can be used:

[Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)

We can also create a manifest.json file that is used to tell the device running the application how to display it on its home screen. For more details about setting up and configuring the manifest.json file check the following article:

[The Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/?utm_source=devtools)

Once the application is up and running, we can check its functionality by inspecting the Application tab of the browser console:
![Service Worker](https://github.com/telerik/react-dashboard/blob/master/src/assets/help_images/sw.png)

We can then check the "Offline" option in order to check the offline functionality of the app:
![Offline](https://github.com/telerik/react-dashboard/blob/master/src/assets/help_images/offline.png)

We can inspect the cached assets:
![Local assets](https://github.com/telerik/react-dashboard/blob/master/src/assets/help_images/cached.png)

Add the app to the home screen:
![Add to home screen](https://github.com/telerik/react-dashboard/blob/master/src/assets/help_images/add_to_home.png)

Added to apps:
![Browser dashboard](https://github.com/telerik/react-dashboard/blob/master/src/assets/help_images/dashboard.png)
