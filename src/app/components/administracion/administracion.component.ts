import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModulosService } from '../../service/modulos.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [MatTableModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatGridListModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule],
  providers:[ModulosService],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.scss'
})
export class AdministracionComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol2'];
  dataSource = [];
  modulos: any;
  moduloForm: FormGroup;
  responseMessage: string = "";
  showComponentTable = true;


  constructor(private fb: FormBuilder, private modulosService: ModulosService){
    this.moduloForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadModulos();
  }

  loadModulos(): void{
    this.modulosService.getModulos().subscribe(
      (data) => {
        this.modulos = data;
        this.dataSource = this.modulos;
      },
      (error) =>{
        console.error('Eroor obteniendo modulos', error);
      }
    )
  }

  submitForm() {
    if (this.moduloForm.valid) {
      const moduloToSave = this.moduloForm.value;

      if(this.modulos.find((m: any) => m.id == moduloToSave.id)!= null){
        this.modulosService.actualizarModulo(moduloToSave.id, this.moduloForm.value).subscribe(
          response => {
            this.responseMessage = 'Data submitted successfully!';
            console.log('API Response:', response);
            this.moduloForm.reset(); // Reset form after submission
            this.loadModulos();
          },
          error => {
            this.responseMessage = 'Error submitting data!';
            console.error('Submission Error:', error);
          }
        );
      }

      else{
        this.modulosService.guardarModulo(this.moduloForm.value).subscribe(
          response => {
            this.responseMessage = 'Data submitted successfully!';
            console.log('API Response:', response);
            this.moduloForm.reset(); // Reset form after submission
            this.loadModulos();
          },
          error => {
            this.responseMessage = 'Error submitting data!';
            console.error('Submission Error:', error);
          }
        );
      }


    } else {
      this.responseMessage = 'Please fill out the form correctly!';
    }
  }
  

  onEditClick(id:number){
    const currentModulo = this.modulos.find((m: any) => m.id == id)
    this.moduloForm = this.fb.group({
      id: [currentModulo.id, Validators.required], // Default value: 'John Doe'
      nombre: [currentModulo.nombre, [Validators.required]],
    });
  }

  onDeleteClick(id:number){
    this.moduloForm.disable();
    this.modulosService.eliminarModulo(id).subscribe(
      response => {
        console.log('API Response:', response);
        this.loadModulos();
        this.refreshComponent();
        this.moduloForm.enable();
      },
      error => {
        this.responseMessage = 'Error submitting data!';
        console.error('Submission Error:', error);
      }
    );
  }


  refreshComponent() {
    this.showComponentTable = false;
    setTimeout(() => this.showComponentTable = true, 0); // Recreates the component
  }
}

