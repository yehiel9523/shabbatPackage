# ShabbatPackage

This is an npm package to close web on jews Shabbat and holidays.

## Description

By useing that package you can feel good about your website that it's not going to work on Shabbat and Yom Tov
from the 'Hadlakat Nerot' time until the 'Havdala' time , the default times are the Jerusalem time , but you can change it see in the options

You can use the default option by useing express middleware app.use() and put inside the useShabbatCheck , and that use the our html Shabbat page,
for example

```
app.use(useShabbatCheck())
```

or you can use the isShabbat function that return boolean value if it's shabbat now ,
for example

```
isShabbat() // => boolean value
```

and use the app.use by yourself and give your custom html Shabbat page , or you can use it without express and do your own functionality.

From the version 3.1.7 you can use the client location by adding to the sever the express-ip package and use express see in the options 
you shoud still use the second argument for set the deafult city for case that you'l not got the location from this package
(also see that this package work only in real server and not in localhost server...)


## Installation

```
npm i shabbatpackage
```

Then in the server page

```
import express from 'express';
import { isShabbat , useShabbatCheck, getUserLocation} from 'shabbatpackage'
const app = express();
```

And then

```
app.use(useShabbatCheck())
```

And then your entire code like thet

```
app.get()....
```

## Options

For useing the local client time (from version 3.1.7)  you have to import the express-ip package like that 
```
import expressip from 'express-ip';
```
And then use it middleware like that 
```
app.use(expressip().getIpInfoMiddleware);
```
And then to use our getUserLocation function like that 
```
app.use(getUserLocation)
```


We also have 2 optional arguments in our useShabbatCheck and isShabbat fuctions
The first argument is if you want to check if the package work , you put in a Date js object and now you can see how the web going to work and look like in this day for exemple

```
app.use(useShabbatCheck(new Date(2021,7,21,0,0,0)))  // => it`s Shabbat so the web going to get our Shabbat page
```

Also if you use the isShabbat function it's the same ,for example

```

isShabbat(new Date(2021,7,21,0,0,0)) // => true
```

The second argument is for change the local Shabbat time from the default that is 'Jerusalem',
For example

```
app.use(useShabbatCheck(new Date(),'New York'))
```

Or

```

isShabbat(new Date(),'New York')
```

In the future we hope to update the package that would check automatically the location of the user , and use his local times...
