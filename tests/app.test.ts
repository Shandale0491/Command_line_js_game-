import { printBoard } from '../app';

describe('function that prints board to command line', () => {
  it('should return board to command line', () => {
    const result = printBoard();
    const board = {
      1: ' ',
      2: ' ',
      3: ' ',
      4: ' ',
      5: ' ',
      6: ' ',
      7: ' ',
      8: ' ',
      9: ' '
    };
    expect(result).toEqual(
      '\n' +
        ' ' +
        board[1] +
        ' | ' +
        board[2] +
        ' | ' +
        board[3] +
        '\n' +
        ' ---------\n' +
        ' ' +
        board[4] +
        ' | ' +
        board[5] +
        ' | ' +
        board[6] +
        '\n' +
        ' ---------\n' +
        ' ' +
        board[7] +
        ' | ' +
        board[8] +
        ' | ' +
        board[9] +
        '\n'
    );
  });
});
