import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { BuscaCepComponent } from './busca-cep.component';

describe('BuscaCepComponent', () => {
  let component: BuscaCepComponent;
  let fixture: ComponentFixture<BuscaCepComponent>;
  let http: jasmine.SpyObj<HttpClient>;
  let spyOnMyGetFn: any;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [
        BuscaCepComponent,
      ],
      providers: [
        { provide: HttpClient, useValue: http },
      ],
    });

    http.get.and.returnValue(of({ cidade: 'tal' }));

    fixture = TestBed.createComponent(BuscaCepComponent);
    component = fixture.componentInstance;
    spyOnMyGetFn = spyOn(component, '_myGetFn' as any);
    spyOnMyGetFn.and.returnValue(of({}));
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('Dado que o usuário digitou um novo CEP, ele deve ser buscado', () => {
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = '12345678';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(spyOnMyGetFn).toHaveBeenCalledWith(`https://viacep.com.br/ws/12345678/json/`);
  });

  it('Dado que houve um erro, ele deve ser tratado', () => {
    spyOnMyGetFn.and.returnValue(of({ erro: true }));

    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = '12345678';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('pre')).nativeElement.textContent).toContain('Houve um erro');
  });

});
