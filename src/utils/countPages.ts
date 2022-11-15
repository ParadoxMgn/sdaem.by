//@ts-ignore
export const countPages = (pages) => {
  const array = [];

  const count = Math.ceil(pages / 9);

  for (let i = 1; i <= count; i++) {
    array.push(i);
  }

  return array;
}