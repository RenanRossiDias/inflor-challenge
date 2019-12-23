import { Time } from '@angular/common';
import * as moment from 'moment';
import { EntryType } from './entryType';

export default class Entry {

    time: Time
    entryType : EntryType
    isUnderEdition: boolean

    constructor(time?: Time) {
        this.entryType = EntryType.ClockOut
        if (time) {
            this.time = time
        } else {
            this.time = { hours: 0, minutes: 0 }
            this.isUnderEdition = true
        }
    }

    get str_time() {
        let hours = this.pad2(this.time.hours)
        let minutes = this.pad2(this.time.minutes)

        return hours + ':' + minutes
    }

    set str_time(str_time: string){
        let time = moment(str_time, 'HH:mm')

        this.time.hours = time.get('hours')
        this.time.minutes = time.get('minutes')
    }

    endEdition(){
        this.isUnderEdition = false
    }

    private pad2(number: number) {
        return (number < 10 ? '0' : '') + number
    }
}

