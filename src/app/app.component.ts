import { Component } from '@angular/core';
import { ServiceAppService } from './service-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularioApp';
  comida: String;

  constructor(serviceApp: ServiceAppService) { }

validar(){
  console.log("este es mi console");
 console.log(this.comida);
 this.serviceApp.postValidacion(this.comida);

}


}
