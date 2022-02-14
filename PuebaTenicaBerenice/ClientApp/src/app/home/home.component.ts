import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  public base : string;
  public clientes: ClientDTO[];

  constructor(private formBuilder: FormBuilder,private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ClientDTO[]>(baseUrl + 'api/clientes').subscribe(result => {
      this.base = baseUrl;
      this.clientes = result;
    }, error => console.error(error));
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      documentId: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.email]]
    }
    );
  }

  onSubmit() {
    
    var formData: any = new FormData();
    formData.append("documentId", this.registerForm.get('documentId').value);
    formData.append("name", this.registerForm.get('name').value);
    formData.append("lastname", this.registerForm.get('lastname').value);
    formData.append("phone", this.registerForm.get('phone').value);
    console.log(formData);
    this.http.post<ClientDTO>(this.base+'api/clientes', FormData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

  }


}



interface ClientDTO {
  id: number;
  documentId: number;
  name: string;
  lastname: string;
  phone: number;
  creation_date : string
}
