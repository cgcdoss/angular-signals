import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, TrackByFunction, computed, signal } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicTacToeComponent {

  public trackByFunction: TrackByFunction<string> = (_, item) => item;

  public actualPlayer = signal<1 | 2>(1);
  public game = signal([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  public lastMovement = signal<{ x?: number, y?: number }>({});
  public someoneWins = computed(() => {
    const last = this.lastMovement();
    if (last.x === undefined || last.y === undefined) return undefined;

    const game = this.game();
    const actualSymbol = game[last.x][last.y];
    const actualPlayer = actualSymbol === 'X' ? 1 : 2;

    // Verificar linha
    if (
      game[last.x][0] === actualSymbol &&
      game[last.x][1] === actualSymbol &&
      game[last.x][2] === actualSymbol
    ) {
      return actualPlayer;
    }

    // Verificar coluna
    if (
      game[0][last.y] === actualSymbol &&
      game[1][last.y] === actualSymbol &&
      game[2][last.y] === actualSymbol
    ) {
      return actualPlayer;
    }

    // Verificar diagonais
    if (
      game[0][0] === actualSymbol &&
      game[1][1] === actualSymbol &&
      game[2][2] === actualSymbol
    ) {
      return actualPlayer;
    }

    if (
      game[2][0] === actualSymbol &&
      game[1][1] === actualSymbol &&
      game[0][2] === actualSymbol
    ) {
      return actualPlayer;
    }

    // Deu velha
    if (game.flat().filter(r => !!r).length === 9) {
      return -1;
    }

    return undefined;
  });
  public againstBot = signal(false);
  public alreadyPlayed = computed(() => this.game().flat().filter(r => !!r).length > 0);

  public chooseBox(x: number, y: number, isBot?: boolean): void {
    const someoneWins = this.someoneWins();
    const isFilled = !!this.game()[x][y];
    if (someoneWins || isFilled) return;

    if (this.againstBot() && !isBot && this.actualPlayer() === 2) return;

    this.game.mutate((value) => value[x][y] = this.actualPlayer() === 1 ? 'X' : 'O');
    this.actualPlayer.update(value => value === 1 ? 2 : 1);
    this.lastMovement.set({ x, y });

    if (this.againstBot() && !this.someoneWins() && this.actualPlayer() === 2)
      setTimeout(() => this._botPlays(), 1000);
  }

  public reset(): void {
    this.game.set([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    this.actualPlayer.set(1);
    this.lastMovement.set({});
  }

  public toggleBot(): void {
    this.againstBot.update(value => !value);
  }

  private _botPlays(): void {
    const { x, y } = this._getBestMovement();

    if (x !== undefined && y !== undefined) {
      this.chooseBox(x, y, true);
      return;
    }

    const getRandomPositions = () => ({
      x: Math.floor(Math.random() * 3),
      y: Math.floor(Math.random() * 3),
    });

    let currentPosition = getRandomPositions();

    // enquanto encontrar uma célula preenchida, continue procurando
    while (this.game()[currentPosition.x][currentPosition.y] !== '') {
      currentPosition = getRandomPositions();
    }

    this.chooseBox(currentPosition.x, currentPosition.y, true);
  }

  private _getBestMovement() {
    // let movementWin = this._getMovementWin();
    let preventPlayer = this._preventPlayerWin();

    /* if (movemntWin.x !== undefined && movementWin.y !== undefined) {
      return movementWin;
    } */

    return preventPlayer;
  }

  private _preventPlayerWin() {
    const horizontal = this.game().find(r => r.find(c => c === 'X'));
    let x: number | undefined, y: number | undefined;

    if (horizontal && (this.game().find(r => r.find(c => c === 'X'))?.filter(r => r === 'X').length || 0) > 1) {
      x = this.game().indexOf(this.game().find(r => r.find(c => c === 'X')) || []);
      y = this.game().find(r => r.find(c => c === 'X'))?.indexOf('');

      y = y === -1 ? undefined : y;
    }

    return { x, y };
  }

}
