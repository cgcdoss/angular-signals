import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { map } from 'rxjs';

import countries from './paises';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCountriesComponent implements AfterViewInit {

  @ViewChild('inp') public inp!: ElementRef<HTMLInputElement>;

  public countries = signal(countries).asReadonly();
  public term = new FormControl<string | null>(null);
  public termSignal = toSignal(this.term.valueChanges.pipe(map(term => term?.toLowerCase())));
  public countriesFiltered = computed(() => {
    const term = this.termSignal();
    if (!term)
      return this.countries();

    return this.countries().filter(p => p.toLowerCase().includes(term));
  });

  public ngAfterViewInit(): void {
    this.inp.nativeElement.focus();
  }

}