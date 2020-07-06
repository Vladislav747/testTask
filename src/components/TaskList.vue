<template>
  <div class="taskList max-width-block">
    <filter-module
      v-on:filterTasksFilter="filterResults"
      :tasks="tasks"
     />
    <div class="tasks">
      <table class="table">
        <thead>
          <tr>
            <th scope="row">
              <div class="table__th">
                <div class="th__text">
                  Дата
                </div>
                <div class="th__icon">
                    <font-awesome-icon
                      v-if="sortOrders.dateOrder"
                      icon="sort-up" 
                      size="2x" 
                      data-order="date"
                      @click="sortItems($event.target)"
                    />
                    <font-awesome-icon
                      v-else
                      icon="sort-down" 
                      size="2x"
                      data-order="date"
                      @click="sortItems($event.target)"
        
                    />
                </div>
              </div> 
            </th>
            <th scope="row">
              <div class="table__th">
                <div class="th__text">
                  Название
                </div>
                <div class="th__icon">
                    <font-awesome-icon
                      v-if="sortOrders.nameOrder"
                      icon="sort-up" 
                      size="2x"
                      data-order="name"
                      @click="sortItems($event.target)"
                    />
                    <font-awesome-icon
                        v-else
                        icon="sort-down" 
                        size="2x"
                        data-order="name"
                        @click="sortItems($event.target)"
                    />
              </div>
            </div> 
          </th>
          <th scope="row">
            <div class="table__th">
              <div class="th__text">
                Количество
              </div>
              <div 
                class="th__icon"
                data_sort="quantity">
                  <font-awesome-icon
                    v-if="sortOrders.quantityOrder"
                    icon="sort-up" 
                    size="2x"
                    data-order="quantity"
                    @click="sortItems($event.target)"
      
                  />
                  <font-awesome-icon
                    v-else
                    icon="sort-down" 
                    size="2x"
                    data-order="quantity"
                    @click="sortItems($event.target)"
      
                  />
                </div>
              </div>
            </th>
            <th scope="row">
              <div class="table__th">
                <div class="th__text">
                  Расстояние
                </div>
                <div class="th__icon">
                   <font-awesome-icon
                      v-if="sortOrders.distanceOrder"
                      icon="sort-up" 
                      size="2x" 
                      data-order="distance"
                      @click="sortItems($event.target)"
        
                    />
                    <font-awesome-icon
                      v-else
                      icon="sort-down" 
                      size="2x"
                      data-order="distance"
                      @click="sortItems($event.target)"
        
                    />
                </div>
              </div> 
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in currentTasks" :key="task.id">
            <td>{{ task.dateNew }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.quantity }}</td>
            <td>{{ task.distance }}</td>
        </tr>
        </tbody>
         
      </table>
    </div>
    <paginaton
      :totalPages="totalPages"
      v-on:changePagePagination="changePage"
     />
  </div>  
</template>

<script>
import Paginaton from './Pagination';
import FilterModule from './FilterModule';

export default {
  name: "TaskList",

  components: {
    Paginaton,
    FilterModule,
  },

  data() {
    return {
      isLoading: true,
      tasks: [],
      currentTasks: [],
      totalPages: 0,
      currentPage:1,
      sortOrders:{
        dateOrder: true,
        nameOrder: true,
        quantityOrder: true,
        distanceOrder: true,
      }
    };
  },

  computed: {
    noTasks() {
      return (
        this.isLoading === false && (this.tasks && this.tasks.length === 0)
      );
    },

  },

  mounted() {
    this.getTasks();
  },

  methods: {

    /**
     * Получить задачи
     */
    async getTasks() {
      try {
        const response = await this.$http.get("tasks");
        this.tasks = response.data;
        if(this.tasks.length){
          this.calculatePages(this.tasks);
        }

        this.paginateTasks();
        

      } catch (error) {
        new Error("Ошибка вывода списка задач  " + error);
      }

      this.isLoading = false;
    },

    /**
     * Посчитать количество страниц
     */
    calculatePages(items){
      this.totalPages = items.length / 10;
      return this.totalPages;
    },

    /* Слушатель - Изменилась страница */
    changePage(data){
      this.currentPage = data;
      this.paginateTasks();
    },

    /* Слушатель - Отфильтровались результаты */
      filterResults(data){
       this.tasks = data;
       this.paginateTasks();
    },

    /**
     * Фильтровать задачу по категории
     * @param {object} task - объект текущей задачи
     *
     */
    filterTask(task) {
      if (this.filterCategory !== "") {
        return task.category.toString() === this.filterCategory.toString();
      } else {
        return true;
      }
    },

    /* Выстроить страницы */
    paginateTasks(){
      var startIndex, endIndex;

      if (this.currentPage > 1){
        startIndex = (this.currentPage-1) * 10;
        endIndex = Math.min(startIndex + 10, this.tasks.length + 1);
      } else{
        startIndex = 0;
        endIndex = 10;
      }
      var currentTasks = this.tasks.slice(startIndex, endIndex);
      this.currentTasks = currentTasks;
    },

    /**
     * Сортировать товары
     */
    sortItems(value){
          var sortAttr = value.getAttribute('data-order');

          function sortQuantity(a, b){
            return a.quantity - b.quantity;
          }

          function sortDistance(a, b){
            return a.distance - b.distance;
          }

          function sortDate(a, b){
            return a.date - b.date;
          }

          function sortName(a, b){
            return a.name.localeCompare(b.name);
          }

          switch (sortAttr) {

              case "date":
                if(this.sortOrders.dateOrder){
                  this.tasks.sort(sortDate).reverse();
                }else{
                  this.tasks.sort(sortDate);
                }

                this.sortOrders.dateOrder = !this.sortOrders.dateOrder;
                break;

              case "name":
                if(this.sortOrders.nameOrder){
                  this.tasks.sort(sortName).reverse();
                }else{
                  this.tasks.sort(sortName);
                }

                this.sortOrders.nameOrder = !this.sortOrders.nameOrder;
                break;

              case "quantity":
                if(this.sortOrders.quantityOrder){
                    this.tasks.sort(sortQuantity).reverse();
                  }else{
                    this.tasks.sort(sortQuantity);
                  }

                this.sortOrders.quantityOrder = !this.sortOrders.quantityOrder;
                break;

              case "distance":
                if(this.sortOrders.distanceOrder){
                    this.tasks.sort(sortDistance).reverse();
                  }else{
                    this.tasks.sort(sortDistance);
                  }

                this.sortOrders.distanceOrder = !this.sortOrders.distanceOrder;
                break;

              default:
              break;
            }

        this.paginateTasks();

       },


  },
};
</script>

<style lang="scss" scoped>
@import "../scss/components/TaskList.scss";
</style>
