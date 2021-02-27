
const getWordList = () => `word word word word word lol lol lol word lol lol xd lol word word word lol lol lol word xd xd word word xd word lol word lol word lol`
  .split(' ')
  .sort(() => Math.random() > 0.5 ? 1 : -1);

export default getWordList;