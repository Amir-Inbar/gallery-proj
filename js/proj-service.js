var gProjs = createProjs();

function getgProjs() {
  return gProjs;
}

function getProjById(projId) {
  return gProjs.find((proj) => proj.id === projId);
}

function createProjs() {
  return [
    createProj(
      'book-shop',
      'Book-Shop',
      'E-commerce',
      'E-commerce for books',
      '/proj/book-shop/book-shop.jpg',
      '',
      ['book', 'E-commerce']
    ),
    createProj(
      'guessme',
      'Guess Me',
      'Guess Me',
      'Online Game',
      '/proj/EX-GuessMe/guessme.jpg',
      '',
      ['game', 'guess']
    ),
    createProj(
      'minesweeper',
      'Mine Sweeper',
      'find all the mines!',
      'online game for kids',
      '/proj/minesweeper/minesweeper.jpg',
      '',
      ['online game']
    ),
    createProj(
      'pacman',
      'Pacman',
      'eat all the food!',
      'online game for everyone',
      '/proj/pacman/pacman.jpg',
      '',
      ['pacman', 'eat']
    ),
    createProj(
      'proj-todos',
      'ToDo',
      'toDo App',
      'Organize your tasks',
      '/proj/proj-todos/proj-todos.jpg',
      '',
      ['todo', 'tasks']
    ),
    createProj(
      'safe-content',
      'Safe Content',
      'Safe Content',
      'Do something',
      '/proj/safe-content/safe-content.jpg',
      '',
      ['safe']
    ),
  ];
}
function createProj(
  id,
  name,
  title,
  desc,
  url,
  publishedAt = Date.now(),
  labels = []
) {
  return {
    id,
    name,
    title,
    desc,
    url,
    publishedAt: publishedAt ? publishedAt : Date.now(),
    labels,
  };
}
