export function possibleKnightMoves([x, y]) {
  const moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  return moves.filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
}

export function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log(
      `You made it in 0 moves! Here's your path: ${JSON.stringify([start])}`
    );
    return [start];
  }

  const queue = [[start, [start]]];

  const visited = new Set();

  visited.add(start.toString());

  while (queue.length > 0) {
    const [currentPosition, path] = queue.shift();
    const knightMoves = possibleKnightMoves(currentPosition);

    for (const knightMove of knightMoves) {
      if (!visited.has(knightMove.toString())) {
        if (knightMove[0] === end[0] && knightMove[1] === end[1]) {
          const fullPath = [...path, knightMove];
          console.log(
            `You made it in ${
              fullPath.length - 1
            } moves! Here's your path: ${JSON.stringify(fullPath)}`
          );
          return fullPath;
        }
      }

      queue.push([knightMove, [...path, knightMove]]);

      visited.add(knightMove.toString());
    }
  }
}
