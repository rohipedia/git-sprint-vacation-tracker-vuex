import Home from './components/Home.vue';
import Member from './components/members/Member.vue';
import AllMembers from './components/members/AllMembers.vue';
import AddMember from './components/members/AddMember.vue';
import Calendar from './components/calendar/Calendar.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/calendar', component: Calendar, name: 'calendar' },
    { path: '/member', component: Member, name: 'member', children: [
        { path: '/allMembers', component: AllMembers },
        { path: '/addMember', component: AddMember }
    ] }
];