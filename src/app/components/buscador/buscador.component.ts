import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  termino:string;
  constructor(private activateRoute:ActivatedRoute,
              private _HeroesService: HeroesService,
              private router:Router) {

   }

  ngOnInit() {
    this.activateRoute.params.subscribe( params =>{
      this.termino= params['termino'];
      //console.log(params['termino']);
      this.heroes= this._HeroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);

  }

}
