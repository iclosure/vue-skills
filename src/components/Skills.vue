<template>
  <div class="skills container">
    <div class="holder">

      <form @submit.prevent="addSkill">
        <input type="text" autocomplete="off" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill">
        
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>
      
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key="index">
            {{ data.skill }}
            <i class="fa fa-minus-circle" @click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

      <p>These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>

// import { JParser } from 'protonode'

export default {
  name: 'Skills',
  data () {
    return {
      skill: '',
      skills: [
        { 'skill': 'Vue.js'},
        { 'skill': 'Frontend Developer'}
      ]
    }
  },
  methods: {
    addSkill () {
      if (this.skill.length == 0) {
        return
      }
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({skill: this.skill})
          this.skill = ''
        } else {
          //console.log('Not valid')
        }
      })
    },
    remove (index) {
      this.skills.splice(index, 1)
    }
  }
}
</script>

<style scoped>
@import './animate.css';
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.holder {
  background: #fff;
  border-radius: 12px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.5em;
  background-color: #e0edf4;
  border-left: 6px solid steelblue;
  margin-bottom: 3px;
  color: #3e5252;
}

ul li:hover {
  background-color: lightgray;
}

p {
  text-align: center;
  padding: 10px 0 26px 0;
  font-size: 24px;
  color: gray;
}
 
.container {
  box-shadow: 0 0 100px darkgray;
  padding: 0;
  border-radius: 12px;
}

input {
  width: 100%;
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert {
  box-shadow: 0 0 15px gray;
  background: #f7efd7;
  color: red;
  font-size: 20px;
  font-weight: bold;
  display: inline-flex;
  padding: 10px;
  border-radius: 5px;
  margin-top: -5px;
}

.alert-in-enter-active {
  animation: bounce-in .1s;
}

.alert-in-leave-active {
  animation: bounce-in .1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
}

</style>
