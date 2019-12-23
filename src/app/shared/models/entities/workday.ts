import Entry from './entry';
import * as moment from 'moment'
import { Time } from '@angular/common';
import { EntryType } from './entryType';

export default class Workday {
    date: Date
    entries: Array<Entry>
    get str_date() {
        return moment(this.date).format('DD/MM/YYYY')
    }
    get workedHours(): Time {
        let workedTime: Time = { minutes: 0, hours: 0 }

        let workedMinutes = this.calculateWorkedHours()
        workedTime.hours = Math.round(workedMinutes / 60)
        workedTime.minutes = Math.round(workedMinutes % 60)

        return workedTime
    }
    get str_workedHours(): string {
        let hours = this.pad2(this.workedHours.hours)
        let minutes = this.pad2(this.workedHours.minutes)

        return hours + ':' + minutes
    }

    constructor(date: Date, entries: Array<Entry>) {
        this.entries = entries
        this.date = date
    }

    setEntries(entries: Array<Entry>) {
        this.entries = entries
        this.sortEntries()
    }

    editEntry(entry: Entry) {
        entry.isUnderEdition = true
        this.entries.push(entry)
    }

    removeEntry(entry: Entry) {
        if (entry.isUnderEdition)
            this.entries.splice(this.entries.findIndex(e => e === entry), 1)
    }

    saveEntry(entry: Entry) {
        entry.endEdition()
        let entries = this.entries //.filter(e => !e.isUnderEdition)
        this.setEntries(entries)
    }
    s
    private calculateWorkedHours(): number {
        let workedMinutes = 0
        let lastEntry: Entry

        this.entries.forEach(e => {
            if(!lastEntry){
                lastEntry = e
                lastEntry.entryType = EntryType.ClockIn
            }
            else if(lastEntry && !e.isUnderEdition) {
                workedMinutes += ((e.time.hours * 60 + e.time.minutes) - (lastEntry.time.hours * 60 + lastEntry.time.minutes))
                lastEntry = null
            }else{ 
                //Then it's under edition
            }
        })

        return workedMinutes
    }

    private sortEntries() {
        this.entries.sort((a, b) => {
            if (a.isUnderEdition && !b.isUnderEdition)
                return 1
            else return ((a.time.hours + (0.01 * a.time.minutes)) - (b.time.hours + (0.01 * b.time.minutes)))
        })

    }

    private pad2(number: number) {
        return (number < 10 ? '0' : '') + number
    }

}