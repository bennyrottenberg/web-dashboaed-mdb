<template>
  <section class="tables">
    <div class="page-header">
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Advanced Table</h4>
            <b-table :items="items" id="table-list" responsive :per-page="perPage" :current-page="currentPage" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
                
                <build-all-row2 v-for="row in datajson" :key="row._" :date="row.date" :row="row"></build-all-row2>
              <template v-slot:cell(status)="data">
                <span v-html="data.value"></span>
              </template>
              <template v-slot:cell(action)="data">
                <span v-html="data.value"></span>
              </template>
            </b-table>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="table-list"
              align="right">
            </b-pagination>
          </div>
        </div>
      </div>
      </div>
    <div>
    </div>
  </section>
  
</template>
<script>
import Vue from "vue";
import SortedTablePlugin from "vue-sorted-table";
import row2 from '../../components/tables-dev/rows/row2.vue'

Vue.use(SortedTablePlugin, {
  ascIcon: '<i class="mdi mdi-arrow-down"></i>',
  descIcon: '<i class="mdi mdi-arrow-up"></i>'
});

export default {
     components: {
      
      "build-all-row2": row2
  
    },
  data: function() {
    return {
      sortBy: 'name',
      perPage: 30,
        currentPage: 1, 
        sortDesc: false,
        sortByFormatted: true,
        filterByFormatted: true,
        sortable: true,
        fields: [
          { key: 'date', sortable: true },
          { key: 'PLATFORMS', sortable: true },
          { key: 'ott version', sortable: true },
          { key: 'HE component', sortable: true },
          { key: 'Test results', sortable: true },          
          { key: 'status', sortable: true }
        ],
        items: []
    };
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
}
</script>
