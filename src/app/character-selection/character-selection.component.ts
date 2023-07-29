import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss']
})
export class CharacterSelectionComponent implements OnInit {
  characters: string[];
  selectedCharacter: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }
}