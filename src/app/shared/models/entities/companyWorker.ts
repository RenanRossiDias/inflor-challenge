import Workday from './workday'
import { WeekDay } from '@angular/common'
import * as moment from 'moment'
import Entry from './entry'


export class CompanyWorker {
    id: number
    name: string
    occupation: string
    workingHours: number
    admissionDate: Date
    workLog: Array<Workday>
    get str_admissionDate() : string{
        return moment(this.admissionDate).format('DD/MM/YYYY')
    }

    constructor(name: string, admissionDate: Date, occupation? : string, workingHours?: number, worklog?: Array<Workday>) {
        this.setName(name)
        this.setAdmissionDate(admissionDate)
        this.setWorkingHours(workingHours ? workingHours : 0)
        this.setWorkLog(worklog)
        this.setOccupation(occupation)

    }
    setName(name: string) {
        this.name = name
    }
    setAdmissionDate(admissionDate: Date) {
        this.admissionDate = admissionDate
    }
    setWorkingHours(workingHours: number) {
        this.workingHours = workingHours
    }
    setOccupation(occupation: string) {
        this.occupation = occupation
    }



    getMontlyWorkedHours(month: number, year: number): number {
        return 0
    }

    getMontlyWorkingHours(month: number, year: number): number {

        let date = new Date(year, month, 1, null, null, null, null)
        let workingDays = this.getWorkingDaysFromMonth(date, WeekDay.Monday, WeekDay.Friday)

        return workingDays * this.workingHours
    }

    getWeeklyWorkingHours(): number {
        return this.workingHours * 5
    }


    private getWorkingDaysFromMonth(date: Date, firstWorkingDay: WeekDay, lastWorkingDay: WeekDay): number {

        let month = date.getMonth()
        let day = 0
        let workingDays = 0

        while (++day <= 31) {
            date.setDate(day)
            if (date.getMonth() == month && (date.getDay() >= firstWorkingDay && date.getDay() <= lastWorkingDay)) {
                workingDays++
            }
        }

        return workingDays

    }

    private setWorkLog(worklog?: Array<Workday>) {

        this.workLog = new Array<Workday>()

        let admissionDate = moment(this.admissionDate)
        let today = moment()
        today.add(1, 'days') //Today must be counted as a valid workday so our worker can log it's entries today as well.

        let totalDays: number = today.diff(admissionDate, 'days')
 
        let actualDate = moment(today)
        
        for (let days = totalDays; days > 0; days--) {
            actualDate.subtract(1, 'days')
            let entries = Array<Entry>()

            if (worklog) {
                worklog.forEach(d => {
                    if (d.date.getDay() == actualDate.day()
                        && d.date.getMonth() == actualDate.month()
                        && d.date.getFullYear() == actualDate.year()) {
                        entries = entries.concat(d.entries)
                    }
                });
            }

            let workday = new Workday(actualDate.toDate(), entries)


            this.workLog.push(workday)
        }

        console.log(this.workLog)

    }




}
