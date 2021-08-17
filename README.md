# ShabbatPackage

This is an npm package to close web on jews Shabbat and holidays

## Description

By useing that package you can feel good about your website that it's not going to work on Shabbat and Yom Tov
from the 'Hadlakat Nerot' time until the 'Havdala' time , the default times are the Jerualem time , but you can change it see in the options

## Installation

```
npm i shabbatpackage
```

Then in the server page 

```
import express from 'express';
import { shabbatCheck } from 'shabbatpackage'
const app = express();
```

And then

```
app.use(shabbatCheck())
```

And then your entire code like thet

```
app.get()....
```

## Options

To see how your web going to look like on Shabbat you can use the first optional argument  in the function by true like that

```
shabbatCheck(true)
```

Also in the the default times of Shabbat are by 'Jerusalem' time , but you can change it by the second argument like that

```
shabbatCheck(false,'New York')
```

In the future we hope to update the package that would check  automatically the location of the user , and use his local times...
