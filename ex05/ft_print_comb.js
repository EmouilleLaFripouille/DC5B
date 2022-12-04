function combination() {
  let sheet=[]
  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      for (let k = j + 1; k < 10; k++) {
          sheet+= [i] + [j] + [k] + '. ';
      }
    }
  }
  console.log(sheet);
}
combination();