import readlineSync from 'readline-sync';

export let name;

 export const helloUser = () => {
  const userName = readlineSync.question('May I have your name? ');

  name = userName;

  return console.log(`Hi ${userName}!`);
};

