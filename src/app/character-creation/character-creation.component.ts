import { Component } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent {
  character = { name: '', description: '' };

  constructor(private characterService: CharacterService) { }

  onSubmit(): void {
    this.characterService.createCharacter(this.character).subscribe(() => {
      this.character = { name: '', description: '' };
    });
  }
}
