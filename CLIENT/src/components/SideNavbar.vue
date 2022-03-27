<template>
<aside class="column is-2 aside is-fullheight">

        <div class="columns side-nav-top border-btm mt-0">
            <div class="column no-padding-top">
                <div class="main-logo">GEDSI</div>
            </div>
            <div class="column"></div>
        </div>
        <ul class="menu-list main">
            <li><a><font-awesome-icon icon="circle-info" /> Overview</a></li>
            <li><a><font-awesome-icon icon="file-lines" /> Assessments</a></li>
            <li><a><font-awesome-icon icon="chart-line" /> Dashboard & Insights</a></li>
        </ul>
</aside>

</template>

<style scoped>
.side-nav-top{
    padding: 20px 0 0 0;
}
.column.no-padding-top{
    margin-top: -30px;
}
.main-logo{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding: 10px 10px 0px 30px;
    font-size: 2rem;
    color: #fff;
    margin-bottom: -6px;
}
.border-btm{
    border-bottom: 1px solid #70B7D1;
}

</style>