const leet = 'OlREASGTBg';

const arr = [...btoa([...Array(100)].map(Math.random).join``)];

const letters = arr.map(x=>/[0-9]/.test(x)?leet[x]:x).join``;
