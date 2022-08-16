import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PokemonModule, AppRoutingModule],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
