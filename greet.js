// export function greet(userName) {
//   if (userName === undefined) return 'Hello stranger';
//   else if (userName === 'Alex') return 'Hello coach!';
//   else {
//     return `Hello ${userName}!`;
//   }
// }

// export function greet(userName = 'stranger') {
//   // = stranger ( immer wenn username nicht übergeben wird, soll stranger genommen werden -> default parameter)
//   if (userName === undefined) return 'Hello stranger';
//   else if (userName === 'Alex') return 'Hello coach!';
//   else {
//     return `Hello ${userName}!`;
//   }
// }

export function greet(userName = 'stranger') {
  // = stranger ( immer wenn username nicht übergeben wird, soll stranger genommen werden -> default parameter)
  const coach = ['Alex', 'Lene', 'Andrea']; // hier können wir die coach in eine constante packen damit wir alle drin haben. --> array
  if (coach.includes(userName))
    return 'Hello coach!'; // hier schauen wir ob coach einen der namen includes
  else {
    return `Hello ${userName}!`;
  }
}
