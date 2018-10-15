<template>
    <div class="vacation-table">
        <table class="table table-responsive table-borderless table-striped">
            <thead style="text-align: right;">
                <tr>
                    <th class="fixed-column"></th>
                    <th v-for="(item, index) in dates" :key="index">{{ item.dayName }}</th>
                    <th class="fixed-column-summary" colspan="4">Summary</th>
                </tr>
                <tr>
                    <th class="fixed-column"></th>
                    <th v-for="(item, index) in dates" :key="index">{{ item.date }}</th>
                    <div class="fixed-column-summary">
                        <th>P</th>
                        <th>V</th>
                        <th>C</th>
                        <th>W</th>
                        <th>B</th>
                        <th>M</th>
                    </div>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(member, mIndex) in scrum.members" :key="mIndex">
                    <td class="fixed-column">{{ member.name }}</td>
                    <td v-for="(date, dIndex) in dates" :key="dIndex">
                        <select name="" class="custom-select form-control" @change="addVacation($event, member.adid, date.date)" :disabled="date.daySeq === 6 || date.daySeq === 0">
                            <option :selected="type.name == getVacationType(member, date).name" v-for="(type, index) in vacationTypes" :key="index"> {{ type.name }}</option>
                        </select>
                    </td>
                    <div class="fixed-column-summary">
                        <td>{{ member.leaveSummary.P }}</td>
                        <td>{{ member.leaveSummary.V }}</td>
                        <td>{{ member.leaveSummary.C }}</td>
                        <td>{{ member.leaveSummary.W }}</td>
                        <td>{{ member.leaveSummary.B }}</td>
                        <td>{{ member.leaveSummary.M }}</td>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data: function() {
        return {
            vacationTypes: [
                { id: 0, code: 'A', name: 'No Vacation' },
                { id: 1, code: 'P', name: 'Public Holiday' },
                { id: 2, code: 'V', name: 'Vacation' },
                { id: 3, code: 'C', name: 'Compensatory Off' },
                { id: 4, code: 'W', name: 'Work from home' },
                { id: 5, code: 'B', name: 'Bereavement Leave' },
                { id: 6, code: 'M', name: 'Maternity Leave' }
            ],
            dates: []
        }
    },
    methods: {
        findDay(day) {
            switch(day) {
                case 1:
                    return 'Mon';
                case 2:
                    return 'Tue';
                case 3:
                    return 'Wed';
                case 4:
                    return 'Thu';
                case 5:
                    return 'Fri';
                case 6:
                    return 'Sat';
                case 0:
                    return 'Sun';
            }
        },
        getVacationType (member, date) {
            const formattedDate = new Date(`${this.month.name} ${date.date}, ${this.year}`);
            const leaveDate = this.scrum.members.find(m => m.name === member.name).leaves.find(l => l.date.getTime() === formattedDate.getTime());
            const leaveType = leaveDate ? leaveDate.name : 'No Vacation';
            return this.vacationTypes.find(type => type.name === leaveType);
        },
        findDays() {
            const month = this.month.name;
            const year = this.year;
            let dates = [];
            for (let i = 1; i <= this.month.days; i++) {
                dates.push(i);
            }
            this.dates = dates.map(date => {
                const day = new Date(`${month} ${date}, ${year}`).getDay();
                return { date: date, daySeq: day, dayName: this.findDay(day)};
            });
        },

        displaySummary() {
            this.scrum.members.forEach(member => {
                member.leaveSummary = {
                    'P': member.leaves.filter(s => s.code === 'P').length,
                    'V': member.leaves.filter(s => s.code === 'V').length,
                    'C': member.leaves.filter(s => s.code === 'C').length,
                    'W': member.leaves.filter(s => s.code === 'W').length,
                    'B': member.leaves.filter(s => s.code === 'B').length,
                    'M': member.leaves.filter(s => s.code === 'M').length
                };
            })
            console.log(this.scrum.members);
        },
        addVacation(event, adid, vDate) {
            const date = new Date(`${this.month.name} ${vDate}, ${this.year}`);
            const vacationId = this.vacationTypes.find(type => type.name === event.target.value).id;
            this.submitVacation({adid: adid, date: date});
            this.displaySummary();
        },
        ...mapMutations({
            'submitVacation': 'addVacation'
        })
    },
    mounted() {
        this.findDays();
        this.displaySummary();
    },
    watch: {
        year() {
            this.findDays();
        },
        month() {
            this.findDays();
        }
    },
    computed: {
        ...mapGetters({
            'scrum': 'selectedScrum',
            'scrums': 'scrums',
            'year': 'selectedYear',
            'month': 'selectedMonth'
        })
    }
}
</script>
<style scoped>
    .custom-select {
        width: 160px;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
    }
    .vacation-table {
        width: 85%;
        overflow-x: visible;
        margin-left: 4.5em;
        overflow-y: hidden;
        padding: 0;
    }
    .fixed-column {
        position: absolute;
        left: 0%;
        margin-top: 5px;
        border: none;
    }
    .fixed-column-summary {
        position: absolute;
        left: 92%;
        border: none !important;
    }
    .fixed-column-summary th {
        border: none;
    }
</style>
