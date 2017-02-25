export function selectBook (book) {
  //returning an object. this object will be consumed by the reducers.
  // reducred will do different actions based on this actions, or will choose to do nothing.
  return {
    type:'BOOK_SELECTED',
    payload: book,
  }
}
