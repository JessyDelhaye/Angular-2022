import { Component, OnInit } from '@angular/core';
import { Pokemon } from '..//pokemon';
import { POKEMONS } from '..//mock-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
