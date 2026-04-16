import { Component, inject } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { DeviseService } from '../../services/devise-service';


@Component({
  selector: 'app-exemples-observables',
  imports: [],
  templateUrl: './exemples-observables.html',
  styleUrl: './exemples-observables.scss',
})
export class ExemplesObservables {

  listeDevise= []

  deviseService = inject(DeviseService);  

  displayDevise(){
      console.log("Début de display devise");
      this.deviseService.getAllDevise$().
        subscribe({
         
            next : ((tabDev : any[]) =>  
              //console.log("Données reçues après 5000ms"); 
              console.log(tabDev))
              //this.listeDevise = tabDev 
              }
         );
        

      console.log("Fin de display devise");
  }

}
