import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component'
import { AccordsComponent } from './accords/accords.component'
import { GammesComponent } from './gammes/gammes.component'
import { MenuComponent } from './menu/menu.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'guitare-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('guitare-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('guitare-app app is running!');
  });
});
