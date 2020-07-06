<template>
    <div class="pagination__wrapper">
           <ul class="pagination">
               <li class="page-wrapper">
                   <a 
                    href="#" 
                    v-bind:class="{ 'disabled': !hasPrev}" 
                    @click.prevent="changePrevPage">«</a>
                </li>
                <li 
                    class="page-wrapper" 
                    v-for="p in totalPages" 
                    :key="p">
                    <button
                        class="btn btn-primary btn-paginate"
                        :class="{'active' : (p == currentPage)}" 
                        @click.prevent="changeCurrentPage(p)">{{p}}
                    </button>
                </li>
                <li class="page-wrapper">
                    <a 
                        href="#" 
                        v-bind:class="{ 'disabled': !hasNext}" 
                        @click.prevent="changeNextPage">»</a>
                </li>
           </ul>
    </div>
</template>

<script>

export default {
    name: "Pagination",

    props:{
        totalPages:0,
    },

    data() {
        return {
            currentPage:1,
        };
    },

    computed: {
        
        hasPrev: function(){
            return this.currentPage > 1;
        },

        hasNext: function(){
            return this.currentPage < this.totalPages;
        },
        
        

    },
    

    methods: {
    
       changeNextPage: function(){
            if(this.currentPage < this.totalPages){
                this.currentPage++;
                this.$emit('changePagePagination', this.currentPage);
            }
        },

        changePrevPage: function(){
            if(this.currentPage > 1){
               this.currentPage--;
               this.$emit('changePagePagination', this.currentPage);
           }
        },

        changeCurrentPage(page){
            this.currentPage = page;
            this.$emit('changePagePagination', this.currentPage);
        },
    }
}
</script>

<style lang="scss" scoped> 
@import "../scss/components/Pagination.scss";

</style>
