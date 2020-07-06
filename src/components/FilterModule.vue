<template>
    <div class="filter__wrapper">
        <h3>Фильтрование элементов</h3>
        <button 
            type="button" 
            class="btn btn-primary"
            @click.prevent="createData()"
            >Создать кастомные данные</button>
           <div class="filter__inner">
               <!-- Фильтр по какому полю  -->
                <div class="filter-property">
                    <span class="filter-property--title">По какому полю фильтровать:</span>
                    <select 
                        class="form-control form-control-lg filter-property--body" 
                        @change="filterCol($event.target.value)">
                        <option 
                        v-for="type in typesFilterCols" 
                        :key="type">{{ type }}</option>
                    </select>
                </div>

                <!-- Фильтр по какому условию  -->
                <div class="filter-property">
                    <span class="filter-property--title">Условие фильтрации</span>
                    <select 
                        class="form-control form-control-lg filter-property--body" 
                        @change="filterCase($event.target.value)">
                        <option 
                        v-for="type in typesFilterCases" 
                        :key="type">{{ type }}</option>
                    </select>
                </div>

                <!-- Фильтр текста  -->

                <div class="filter-property">
                    <span class="filter-property--title">Значение</span>
                    <input
                        class="form-control filter-text" 
                        type="text"
                        @change.prevent="filterTasks($event.target.value)" />
                </div>

           </div>
    </div>
</template>

<script>

export default {
    name: "FilterModule",

    props:{
       tasks: {
            type: Array,
        },
        
    },

    data() {
        return {
            typesFilterCols: ['Дата', 'Название', 'Количество', 'Расстояние'],
            typesFilterCases: ['Больше', 'Меньше', 'Равно', 'Содержит'],
            filterText: '',
            filterColData:'date',
            filterCaseData:'Больше',
            defaultTasks:[],
            filteredTasksData: [],
        };
    },   

    methods: {

        filterCol(data){
            switch(data){
               
                case "Дата":
                this.filterColData = 'date';
                break;

                case "Название":
                this.filterColData = 'name';
                break;

                case "Количество":
                this.filterColData = 'quantity';
                break;

                case "Расстояние":
                this.filterColData = 'distance';
                break;

                default:
                break;

            }
          
        },

        filterCase(data){

            this.filterCaseData = data;
        },

        filterTasks(data){
           
            this.filterText = data || "";
            var filteredTasks = [];
            this.filteredTasksData = this.tasks;
            
            if(this.filterColData && this.filterCase && this.filterText !== ""){
                this.defaultTasks = this.tasks;
                filteredTasks = this.filteredTasksData.filter(this.filterTask)
            }else{
                filteredTasks = this.defaultTasks;
            }
            
            this.$emit("filterTasksFilter", filteredTasks);
            
        },

        filterTask(task){

            switch (this.filterCaseData) {
                case "Больше":
                    if (task[this.filterColData] > this.filterText) {
                        return true;
                    } else {
                        return false;
                    }
                case "Меньше":
                    if (task[this.filterColData] < this.filterText) {
                        return true;
                    } else {
                        return false;
                    }
                   
                case "Равно":
                    if (task[this.filterColData].toString() == this.filterText.toString()) {
                        return true;
                    } else {
                        return false;
                    }
                
                case "Содержит":
                    if(task[this.filterColData].indexOf(this.filterText) !== -1){
                        return true;
                    } else {
                        return false;
                    }
                   
            
                default:
                    break;
            }
           
        },

        //Сгенерировать кастомные данные
        createData(){
            const response = this.$http.post("tasks/createdb")
        },
    }
}

</script>

<style lang="scss" scoped> 
@import "../scss/components/FilterModule.scss";

</style>
