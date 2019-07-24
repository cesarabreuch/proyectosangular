import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Manejo de formularios
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';
// Servicio
import { MoviesService } from './providers/movies.service';
// pipes
import { ImagePipe } from './pipes/image.pipe';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {FrameComponent} from './components/home/frame.component';
import { LoadingComponent } from './shared/loading/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoadingComponent,
    SearchComponent,
    MoviesComponent,
    FrameComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
