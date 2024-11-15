import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { TrainingComponent } from './components/training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IntroductionComponent,
    LayoutPageComponent,
    ExperienceComponent,
    AboutmeComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
