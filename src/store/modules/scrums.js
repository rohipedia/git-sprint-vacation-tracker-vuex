const state = {
    vacationTypes: [
        { id: 0, code: 'A', name: 'No Vacation' },
        { id: 1, code: 'P', name: 'Public Holiday' },
        { id: 2, code: 'V', name: 'Vacation' },
        { id: 3, code: 'C', name: 'Compensatory Off' },
        { id: 4, code: 'W', name: 'Work from home' },
        { id: 5, code: 'B', name: 'Bereavement Leave' },
        { id: 6, code: 'M', name: 'Maternity Leave' }
    ],
    selectedScrum: {},
    scrums: [
        {
            "id": 1,
            "name": "Alpha",
            "members": [
                {
                    "name": "Anjam",
                    "adid": "1",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Bhavik",
                    "adid": "2",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        { 
            "id": 2,
            "name": "Baahubali",
            "members": [
                {
                    "name": "Ankit",
                    "adid": "3",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Ashita",
                    "adid": "4",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        {
            "id": 3,
            "name": "Flash",
            "members": [
                {
                    "name": "Komal",
                    "adid": "5",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Kishan",
                    "adid": "6",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        {
            "id": 4,
            "name": "Phantom",
            "members": [
                {
                    "name": "Prasanna",
                    "adid": "7",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Bhakti",
                    "adid": "8",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        {
            "id": 5,
            "name": "Roadies",
            "members": [
                {
                    "name": "Divya",
                    "adid": "9",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Chandan",
                    "adid": "10",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        {
            "id": 6,
            "name": "Rogue",
            "members": [
                {
                    "name": "Shikha",
                    "adid": "11",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Shobhit",
                    "adid": "12",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        {
            "id": 7,
            "name": "Stormtroopers",
            "members": [
                {
                    "name": "Harmeet",
                    "adid": "13",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Kanika",
                    "adid": "14",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        {
            "id": 8,
            "name": "Utopians",
            "members": [
                {
                    "name": "Shraddha",
                    "adid": "15",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Pawan",
                    "adid": "16",
                    "email": "",
                    "leaves": []
                }
            ]
        },
        {
            "id": 9,
            "name": "WhiteWalkers",
            "members": [
                {
                    "name": "Puja",
                    "adid": "17",
                    "email": "",
                    "leaves": []
                },
                {
                    "name": "Rohit",
                    "adid": "18",
                    "email": "",
                    "leaves": []
                }
            ]
        }
    ]
};

const getters = {
    selectedScrum: state => {
        return state.selectedScrum.id ? state.selectedScrum : state.scrums[0];
    },
    scrums: state => {
        return state.scrums;
    }
};

const mutations = {
    scrumSelected: (state, payload) => {
        state.selectedScrum = state.scrums.find(scrum => scrum.id === payload)
    },
    addVacation: (state, payload) => {
        const member = state.selectedScrum.members.find(m => m.adid === payload.adid);
        const leaves = member.leaves;
        let existingVacation = (leaves.length === 0) ? null : leaves.find(l => payload.date.getTime() === l.date.getTime());
        const vacation = state.vacationTypes.find(type => type.name === event.target.value);
        const vacationDetails = {
            ...vacation,
            date: payload.date
        }
        !existingVacation ? state.selectedScrum.members.find(m => m.adid === payload.adid).leaves.push(vacationDetails) : existingVacation = vacationDetails;
    }
}

export default {
    state,
    getters,
    mutations
}