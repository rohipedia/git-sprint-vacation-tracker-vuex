<template>
    <div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <router-link tag="a" to="/allMembers" active-class="active" exact class="nav-link">All Members</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/addMember" active-class="active" exact class="nav-link">Add Member</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <hr>
        <router-view></router-view>
    </div>
</template>
