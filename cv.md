# Gleb Shipov
-------------
### Contacts:
- **Discord:** nebelwerfer
- **Tel:** +79873757651
- **E-mail:** NebelwerferT9@gmail.com
- **GitHub:** [NebelwerferT](https://github.com/NebelwerferT)

### About myself:
I'm a beginner front-end developer. Also, I am a student of the Faculty of Computer Science and Information Technology (CSIT) of the Saratov State University (SSU) named after Chernyshevsky. My specialty is systems analysis and automatic control (SAAC).

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
- RSSCHOOL online course "Node.js Development" (NODEJS 2021 Q2)
- JavaScript https://learn.javascript.ru/

### Work expirience:
No commercial experience yet, but there are projects on my GitHub:

- [Museum](https://rolling-scopes-school.github.io/nebelwerfert-JSFE2021Q3/museum-dom/)
- [Art Quiz](https://nebelwerfert.github.io/art-quiz)
- [Chritsmass tree](https://rolling-scopes-school.github.io/nebelwerfert-JSFE2021Q3/christmas-task2/)
- [CV](https://nebelwerfert.github.io/rsschool-cv)

### Languages:
- Russian
- English

### English level:
-  [EPAM English test](https://examinator.epam.com/Main/PersonalAssignments): **A2**
