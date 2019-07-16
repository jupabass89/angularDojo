import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../services/marvel-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  title = 'Norris Jokes';
  id: any;
  joke: any;

  constructor(private service: MarvelServiceService) { }

  ngOnInit() {
    this.nextJoke();
  }

  nextJoke() {
    this.service.getJoke().subscribe(
      resp => {
        this.joke = resp.value.joke;
        this.id = resp.value.id;
      }
    );
  }
}
