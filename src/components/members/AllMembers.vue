<template>
    <div>
        <div class="">
            <table class="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Scrum</th>
                        <th>Name</th>
                        <th>ADID</th>
                        <th>e-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(member, index) in members" :key="index">
                        <td>{{ member.scrum }}</td>
                        <td>{{ member.name }}</td>
                        <td>{{ member.adid }}</td>
                        <td>{{ member.email }}</td>
                        <td style="cursor: pointer;">
                            <i class="fas fa-times" @click="remove(member.adid)"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fas fa-edit"></i> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            'scrums': 'scrums'
        })
    },
    data() {
        return {
            members: []
        }
    },
    methods: {
        remove(adid) {
            const index = this.members.findIndex(member => member.adid === adid);
            this.members.splice(index, 1);
            this.removeMember(adid);
        },
        ...mapMutations({
            'removeMember': 'removeMember'
        })
    },
    mounted() {
        this.scrums.forEach(scrum => {
            scrum.members.forEach(member => {
                this.members.push({
                    'scrum': scrum.name,
                    ...member
                });
            })
        });
    }
}
</script>

