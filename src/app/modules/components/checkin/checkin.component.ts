import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/core/services/workers.service';
import { CompanyWorker } from 'src/app/shared/models/entities/companyWorker';
import Workday from 'src/app/shared/models/entities/workday';
import * as moment from 'moment';
import Entry from 'src/app/shared/models/entities/entry';


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  constructor(private workersService: WorkersService) { }

  private worker: CompanyWorker
  private workers: Array<CompanyWorker>
  private workdays: Array<Workday>
  private months: Array<string>
  private month: number
  private year: number
  private today: moment.Moment
  private id: number

  async ngOnInit() {
    this.id = 0
    this.today = moment().locale('pt-br')
    this.worker = new CompanyWorker('', new Date())
    this.workdays = new Array<Workday>()
    this.months = this.today.localeData().months()
    this.month = this.today.month()
    this.year = this.today.year()

    this.listWorkers()
  }


  async listWorkers() {
    let workers = await this.workersService.list()

    this.workers = workers
  }

  async retrieveWorker(id: number) {

    if (id == 0) {
      return
    }

    let worker = await this.workersService.retrieve(id)
    this.worker = worker
    this.retrieveWorkDaysForMonth(this.month, this.year)
  }

  retrieveWorkDaysForMonth(month: number, year: number) {
    this.workdays = this.worker.workLog.filter(w => w.date.getMonth() == month && w.date.getFullYear() == year)

  }

  newEntry(workday: Workday) {
    let entry = new Entry()
    workday.editEntry(entry)  
  }

  removeEntry(workday: Workday, entry: Entry){
    workday.removeEntry(entry)
  }

  saveEntry(workday: Workday, entry: Entry) {
    workday.saveEntry(entry)
  }


}
