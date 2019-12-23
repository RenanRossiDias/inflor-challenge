import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyWorker } from 'src/app/shared/models/entities/companyWorker';
import Workday from 'src/app/shared/models/entities/workday';
import Entry from 'src/app/shared/models/entities/entry';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) {
    this.mockWorker()
  }

  private api = 'workers'
  private seq_workers = 0

  private _workers: Array<CompanyWorker> = []
  get workers() { return this._workers }



  async list(): Promise<Array<CompanyWorker>> {

    return Promise.resolve(this._workers)
  }

  async insert(worker: CompanyWorker): Promise<void> {
    worker.id = ++this.seq_workers
    this._workers.push(worker)

    return Promise.resolve();
  }

  async retrieve(id: number): Promise<CompanyWorker> {
    let worker = this._workers.find(x => x.id == id)

    return Promise.resolve(worker)
  }

  private async mockWorker() {
    let worker = new CompanyWorker('Renan Rossi Dias', moment('12/11/2019').toDate(), "Frontend Developer", 8)
    await this.insert(worker)
  }

  mockWeek(): Array<Workday> {

    let nDays = Math.floor((Math.random() * 4) + 3)
    let days = new Array<Workday>()

    for (var i = 0; i < nDays; i++) {
      days.push(this.mockDay())
    }

    return days

  }



  mockDay(): Workday {

    let nEntries = Math.floor((Math.random() * 7) + 2)
    let entries = Array<Entry>()

    for (var i = 0; i < nEntries; i++) {
      entries.push(this.mockEntry())
    }

    let day = new Workday(new Date(), entries)
    return day

  }


  mockEntry(): Entry {

    let entry = new Entry()

    entry.time.hours = Math.floor((Math.random() * 13) + 7)
    entry.time.minutes = Math.floor((Math.random() * 58) + 1)

    return entry
  }



}
