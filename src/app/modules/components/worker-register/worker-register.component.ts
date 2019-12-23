import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkersService } from 'src/app/core/services/workers.service';
import { CompanyWorker } from 'src/app/shared/models/entities/companyWorker';
import { Router } from '@angular/router';
import { Time } from '@angular/common';


@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.component.html',
  styleUrls: ['./worker-register.component.scss']
})
export class WorkerRegisterComponent implements OnInit {


  private registerWorkerForm: FormGroup
  private _registerWorkerForm(controlName: string) {
    return this.registerWorkerForm.controls[controlName].value
  }

  constructor(private formBuilder: FormBuilder, private workersService: WorkersService, private router: Router) { }

  ngOnInit() {
    this.registerWorkerForm = this.formBuilder.group({
      name: ['', Validators.required],
      occupation: ['', [Validators.required]],
      workingHours: [0, [Validators.required]],
      admission: [Date.now ,[Validators.required]]
    })
  }

  private submitWorkerForm() {
    let worker = new CompanyWorker(
      this._registerWorkerForm('name'),
      this._registerWorkerForm('admission')
    )
    worker.occupation = this._registerWorkerForm('occupation')
    worker.workingHours = this._registerWorkerForm('workingHours')

    this.workersService.insert(worker)

    this.registerWorkerForm.reset()

    this.router.navigate(['ponto/colaboradores'])
  }

}
