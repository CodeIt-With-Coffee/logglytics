## LOGGER

### Installation
```bash
npm install @codeitwithcoffee/logglytics
```
or
```bash
yarn add @codeitwithcoffee/logglytics
```

### Getting api key
- Go to [Logglytics Console](https://logglytics.onrender.com/)
- Create a project
- Open that project
- Click config button on top right of the dashboard
- Copy the configuration snippet

### Javascript SDK Usage
#### Import the logglytics
```js
// ES6
import { default as logglytics } from '@codeitwithcoffee/logglytics';
```

#### Create a config object
Create a config object from the snipper you copied in the console.
```js
const config = {
  apiKey: "apikey",
  projectId: "123456",
};
```

#### Create a logger instance
```js
const logger = logglytics(config);
```

#### Log messages
```js
logger.i("Info message");
logger.d("Debug message");
logger.e("Error message");
logger.t("Trace");
logger.w("Warning message");
logger.f("Fatal message");

logger.log("INFO", "Info");
// Done....
```

#### Push events
```js
logger.event("BUTTON_1");

// Done....
```

### TODO:
- [ ] More improvements to Javascript SDK
- [ ] New SDK for Android
- [ ] New improved Console

Happy coding:)
