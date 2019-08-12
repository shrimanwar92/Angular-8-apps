import {Component, OnInit} from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.less']
})

export class HeroesComponent implements OnInit {
	heroes: Hero[] = HEROES;
	selectedHero: Hero;
	
	constructor() {}

	ngOnInit() {

	}

	onSelect(hero) {
		this.selectedHero = hero;
	}
}

interface Hero {
	id: number;
	name: string;
};