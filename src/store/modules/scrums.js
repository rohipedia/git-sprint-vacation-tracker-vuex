const state = {
    vacationTypes: [
        { id: 0, code: 'A', name: 'No Vacation' },
        { id: 1, code: 'P', name: 'Public Holiday' },
        { id: 2, code: 'V', name: 'Vacation' },
        { id: 3, code: 'C', name: 'Compensatory Off' },
        { id: 4, code: 'W', name: 'Work from home' },
        { id: 5, code: 'T', name: 'Training' },
        { id: 6, code: 'S', name: 'Sick Leave' }
    ],
    selectedScrum: {},
    scrums: [
        {
            "id": 1,
            "name": "Alpha",
            "members": [
                {
                    "name": "Anjam Pathan",
                    "adid": "1",
                    "email": "anjam.pathan@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Bhavik Pandya",
                    "adid": "2",
                    "email": "bhavik.pandya@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        { 
            "id": 2,
            "name": "Baahubali",
            "members": [
                {
                    "name": "Ankit Shukla",
                    "adid": "3",
                    "email": "ankit.c.shukla@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Ashita Sharma",
                    "adid": "4",
                    "email": "ashita.sharma@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 3,
            "name": "Flash",
            "members": [
                {
                    "name": "Komal Shah",
                    "adid": "5",
                    "email": "komal.d.shah@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Kishan Rawal",
                    "adid": "6",
                    "email": "kishan.rawal@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 4,
            "name": "Phantom",
            "members": [
                {
                    "name": "Prasanna Phadke",
                    "adid": "7",
                    "email": "prasanna.phadke@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Bhakti Shah",
                    "adid": "8",
                    "email": "bhakti.vijay.shah@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 5,
            "name": "Roadies",
            "members": [
                {
                    "name": "Divya Achhra",
                    "adid": "9",
                    "email": "divya.achhra@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Chandan Singh Tamang",
                    "adid": "10",
                    "email": "chandan.singh.tamang@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 6,
            "name": "Rogue",
            "members": [
                {
                    "name": "Shikha Singh",
                    "adid": "11",
                    "email": "shikha.m.singh@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Shobhit Jain",
                    "adid": "12",
                    "email": "shobhit.c.jain@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 7,
            "name": "Stormtroopers",
            "members": [
                {
                    "name": "Harmeet Kaur",
                    "adid": "13",
                    "email": "h.kaur.bhengura@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Kanika Khurana",
                    "adid": "14",
                    "email": "kanika.khurana@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 8,
            "name": "Utopians",
            "members": [
                {
                    "name": "Shraddha Modi",
                    "adid": "15",
                    "email": "shraddha.k.modi@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Pawan Dunna",
                    "adid": "16",
                    "email": "dl.pawan.vicky@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 9,
            "name": "WhiteWalkers",
            "members": [
                {
                    "name": "Puja Jain",
                    "adid": "17",
                    "email": "puja.a.jain@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Rohit Vhora",
                    "adid": "18",
                    "email": "rohit.vhora@accenture.com",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        }
    ]
};

const getters = {
    selectedScrum: state => {
        return state.selectedScrum.id ? state.selectedScrum.id : state.scrums[0].id;
    },
    scrums: state => {
        return state.scrums;
    }
};

const mutations = {
    addMember: (state, payload) => {
        state.scrums.find(scrum => scrum.id === payload.scrum).members.push({
            name: payload.name,
            adid: payload.adid,
            email: payload.email,
            leaves: [],
            leaveSummary: {}
        });
    },
    scrumSelected: (state, payload) => {
        state.selectedScrum = state.scrums.find(scrum => scrum.id === payload);
    },
    addVacation: (state, payload) => {
        let member = state.selectedScrum.members.find(m => m.adid === payload.adid);
        const leaves = member.leaves;
        let existingVacation = (leaves.length === 0) ? null : leaves.find(l => payload.date.getTime() === l.date.getTime());
        const vacation = state.vacationTypes.find(type => type.name === event.target.value);
        const vacationDetails = {
            ...vacation,
            date: payload.date
        }
        if (!existingVacation) {
            member.leaves.push(vacationDetails);
        } else {
            const index = leaves.findIndex(l => payload.date.getTime() === l.date.getTime());
            member.leaves.splice(index, 1);
            member.leaves.push(vacationDetails);
        }
    },
    removeMember: (state, payload) => {
        const scrum = state.scrums.find(s => s.members.find(member => member.adid === payload));
        scrum.members.splice(scrum.members.findIndex(member => member.adid === payload), 1);
    }

}

export default {
    state,
    getters,
    mutations
}