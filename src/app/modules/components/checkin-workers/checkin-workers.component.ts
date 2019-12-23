import { Component, OnInit } from '@angular/core';
import { CompanyWorker } from 'src/app/shared/models/entities/companyWorker';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'app-checkin-workers',
  templateUrl: './checkin-workers.component.html',
  styleUrls: ['./checkin-workers.component.scss']
})
export class CheckinWorkersComponent implements OnInit {

  constructor(private workersService: WorkersService) { }

  workers: Array<CompanyWorker>

  ngOnInit() {
    this.listWorkers()
  }

  insertWorker() {
    let worker = new CompanyWorker("Teste", new Date('12/03/2019'));

    worker.name = "Teste"
    worker.id = 1
    worker.occupation = "Desenvolvedor"


    this.workersService.insert(worker)
  }

  async listWorkers() {
    let workers = await this.workersService.list()
    this.workers = workers
  }


}
