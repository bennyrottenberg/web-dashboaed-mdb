<template>
  
    <section class = "dropdown-wrapper">
    
    <div @click="isVisible =!isVisible " class= "selected-item">
    <span v-if="selectedItem"> {{this.selectedItem}}</span>
    <span v-else> Select User</span>
    <svg 
    :class="isVisible ? 'dropdown' : ''"
    class="drop-down-icon" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height = "24">
    <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z">
    </path>
    </svg>
    
    
    
    
    </div>
    <div v-if="isVisible" class="dropdown-popover" >
    <input v-model="searchQuery" type="text" placeholder="Seacrch for user"  >
    <span v-if="filteredUser.length === 0" >No data avilable</span>
    <div class="opitons">
        <ul>
        <li @click="selecteItem(user)" 
            v-for="(user, index) in filteredUser" 
            :key="`user-${index}`"
            >
            {{ user.name }}
        </li>
        </ul>
    </div>
    </div>
    </section>
    </template>
    
    <script>
    export default {
        data()
        {
            return {
                searchQuery: '',
                selectedItem: null,
                isVisible: false,
                userArray: []
            }
        },
        methods :{
            selecteItem(user)
            {
             this.selectedItem = user.name
             this.isVisible = false
            }
        },
        mounted(){
            fetch("https://jsonplaceholder.typicode.com/users")
            .then (res => res.json())
            .then(json => 
            {
                console.log (json);
                this.userArray = json

            });
    },
        computed:
        {
            filteredUser(){
                const query = this.searchQuery.toLowerCase()
                if(this.searchQuery === "")
                {
                    return this.userArray
                }
                return this.userArray.filter((user) => {
                    return Object.values(user).some((word => String(word).toLowerCase().includes(query)))
                })
            },
        }}

    </script>
    
    <style scoped lang = "scss">
    .dropdown-wrapper{
    max-width: 350px ;
    position: relative;
    margin: 0 auto; 
    
    .selected-item
    {
      height: 50px;
      border: 2px solid lightgrey;
      border-radius: 5px;  
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      .drop-down-icon
      {
        transform: rotate(0deg);
        transition: all 0.5s ease;
        &.dropdown{
            transform: rotate(180deg);
        }

      }

    }
    
    }
    
    .dropdown-popover
    {
      position: absolute;
      border: 2px solid lightgray;
      top: 46px;
      left: 0;
      right: 0;
      background-color: #fff;
      max-width: 100%;
      padding: 15px;
    
      input
      {
        width: 100%;
        height: 30px;
        border: 2px solid lightgray;
        font-size: 16px;
        padding-left: 8px;
      }
      .opitons{
        width: 100%;
        ul{
            list-style: none;
            text-align: left;
            padding-left: 8px;
            padding-top: 13px;
            max-height: 200px;
            overflow-y:  scroll;
            overflow-x: hidden;
    
            li{
                width: 100%;
                border-bottom: 1px solid lightgray;
                padding: 10px;
                background-color: #f1f1f1;
                cursor: pointer;
                font-size: 15px;
                &:hover{
                    background: #70878a;
                    color: #fff;
                    font-weight: bold;
    
                }
    
    
            }
        }
      }
    }
    
        
    </style>
    