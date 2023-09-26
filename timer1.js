const timerInput = process.argv.slice(2);
for (let i = 0; i < timerInput.length; i++) {
  if (isNaN(timerInput[i])) {
    continue;
  }
  else {setTimeout(() =>{
    process.stdout.write('\x07' + timerInput[i]);
  }, 1000*timerInput[i])}
};
