function unique(wolox) {

  for (let i = 0; i < wolox.length - 1; i++) {
    for (let c = 0; 0 < wolox.length; c++) {
      if (wolox[i] === wolox[i + 1] && wolox[i] === wolox[c]) {  /*el primer IF es para que compare la ubicacion inicial con la siguiente. y el segundo IF compara las ubicaciones de la palabra entre si*/
        console.log('la palabra NO tiene letras repetidas');
        return false;
      }
    }
  }
  console.log('la palabra tiene letras repetidas');
  return true;
}
