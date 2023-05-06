import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public rotaAtual: Signal<string | undefined>;

  constructor() {
    const router = inject(Router);

    this.rotaAtual = toSignal(
      router.events.pipe(
        filter(e => e instanceof NavigationEnd),
        map(r => r as NavigationEnd),
        map(r => r.url.substring(1)),
      )
    );
  }

}
