# ShabbatPackage
This is an npm package to close web on jews Shabbat and holidays

## Description
to use that you just need to use express and put this middleware in app.use 
and now your web going to use shabbat page on shabbat from 'Hadlakat Nerot' until 'Havdala'
you can also chack how its look in your web by use `shabbatChacke(true)` 
and you can also change the city of the times in the second argument like that `shabbatChacke(false,'NewYork')`

## Installation
```
npm i shabbatpackage
```

Then 
```
import express from 'express';
import { shabbatChack } from 'shabbatpackage'
const app = express();
```

And then 
```
app.use(shabbatChack())
```

And then your entire code like thet 
```
app.get()....
```
## Options
To see how your web going to look like on Shabbat you can use the first optional argumant in the fubction by true like that 
```
shabbatChacke(true)
```
Also in the the times of Shabbat are by "Jerusalem' time , but you can change it by the second argument like that
```
shabbatChacke(false,'New York')
```
In the future we hope to update the package that would chack automatically the location of the user , and use his times...
