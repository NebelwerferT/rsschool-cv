# Gleb Shipov
----------
### Contacts:
- **Discord:** nebelwerfer
- **Tel:** +79873757651
- **E-mail:** NebelwerferT9@gmail.com

### About myself:
I want to learn FrontEnd Development

### Skills:
- HTML
- CSS
- JS
- Relational DB
- Git

### Code example:
```javascript
function formatDuration (seconds) {
  
  if (seconds === 0) return "now";
  
  const MPH = 60;
  const HPD = 24;
  const DPY = 365;
  
  const SPM = 60;
  const SPH = SPM * MPH;
  const SPD = SPH * HPD;
  const SPY = SPD * DPY;
  
  const SISMTH = {
    years: SPY, days: SPD, hours: SPH, minutes: SPM, seconds: 1,
  }
  
  let date = [];
  
  for (let key in SISMTH) {
    let buffer = Math.floor(seconds/SISMTH[key]);
    if (buffer > 1) date.push(`${buffer} ${key}`);
    else if (buffer === 1) date.push(`${buffer} ${key.slice(0, key.length - 1)}`);
    seconds -= buffer*SISMTH[key];
  }
  
  const lastIdxDate = date.length - 1;
  
  if (date.length > 1) {
    date.forEach((elem, i) => {
      if (i+1 === lastIdxDate) date[i] += ' and ';
      else if (i !== lastIdxDate) date[i] += ', ';
    })
  }
  
  return date.join("");
}
```

### Education and courses:
- Saratov State University, Faculty of Computer Science and Information Technologies, Department of System Analysis and Automatic Control, bachelor degree (2018 – 2022)
- JavaScript https://learn.javascript.ru/

### Languages
- Russian
- English

### English level
-  [EPAM English test](https://examinator.epam.com/Main/PersonalAssignments): **A2**
