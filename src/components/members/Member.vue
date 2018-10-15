<template>
    <form action="" class="form-group col-lg-6 col-md-8">
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="member.name">
        </div>
        <div class="form-group">
            <label for="">ADID</label>
            <input type="text" class="form-control" v-model="member.adid">
        </div>
        <div class="form-group">
            <label for="">email</label>
            <input type="text" class="form-control" v-model="member.email">
        </div>
        <div class="form-group">
            <label for="">Scrum</label>
            <input type="text" class="form-control" v-model="member.scrum">
        </div>
        <button class="btn btn-primary" @click="addMember(member)">Add</button>
    </form>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            member: {}
        }
    },
    methods: {
        ...mapMutations([
            'addMember'
        ])
    }
}
</script>
<style>

</style>
