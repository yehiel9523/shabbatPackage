# ShabbatPackage

Simple package to control your web on jews Shabbat and Holidays.

## Description

If you'r Shomer Shabbat and you don't want your web to open on Shabbat, by useing that package you can simply control your website that it's not going to work on Shabbat and Yom Tov
from the 'Hadlakat Nerot' time until the 'Havdala' time, the default times are the Jerusalem time, but you can change it see in the options.

You can use the middleware option by useing express app.use() and put inside the shabbatBlockerMiddleware, by that you are using our html Shabbat page,
for example:

```
app.use(shabbatBlockerMiddleware());
```

or you can use the isShabbat function that return boolean value if it's shabbat now ,
for example:

```
isShabbat() // => boolean value
```

From the version 3.1.7 by using the middleware the location of the user is taken automatically.<br>
you shoud still use the second argument for set the default location (as an array like [latitude, longitude]) for case that we not got the location from the user.<br>
By default the location was 'Jerusalem'.<br>
(also see that this package work only in real server and not in localhost server...)


## Installation

```
npm i shabbatpackage
```

Then in case you are using that as a middleware:

```
import express from 'express';
import { shabbatBlockerMiddleware } from 'shabbatpackage';

const app = express();

app.use(shabbatBlockerMiddleware());

app.get('/', (req, res) => {
    // entire code
})
```

Or, in case you want to use that as a function you can use:
```
import { isShabbat } from 'shabbatpackage';

isShabbat(<user_location>);
```

IMPORTANT: the <user_location> should by as a list of latitude and longitude (like that [latitude, longitude])


## Options

We also have 2 optional arguments in our shabbatBlockerMiddleware and isShabbat fuctions:
- The first argument is if you want to check if the package work, you can put 'shbbatDateObj' as an argument like this:
```
import { isShabbat, shbbatDateObj } from 'shabbatpackage';

isShabbat(shbbatDateObj, <user_location>);
```

Or in the middldeware:

```
import { shabbatBlockerMiddleware, shbbatDateObj } from 'shabbatpackage';

app.use(shabbatBlockerMiddleware(shbbatDateObj);
```
<br><br>
- The second argument is for change the local Shabbat time. by default it is takes client location (in case it is fails, it take Jerusalem by default),
For example:

```
const TEL_AVIV_LOCATION = [32.109333, 34.855499];

app.use(shabbatBlockerMiddleware(new Date(), TEL_AVIV_LOCATION));
```

Or:

```
const TEL_AVIV_LOCATION = [32.109333, 34.855499];

isShabbat(new Date(), TEL_AVIV_LOCATION);
```
