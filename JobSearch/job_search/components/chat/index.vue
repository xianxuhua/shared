<template>
<div style="position: fixed;right: 5%;bottom: 10%;width: 300px">
  <div v-if="showChat" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
    <div id="message" style="overflow: auto;height: 300px">
      <div v-for="message in messages">
        <user_message :message="message" ></user_message>
      </div>
    </div>

    <el-input type="textarea" :rows="5" v-model="content"></el-input>
    <el-button style="float: right" @click="addMessage">发送</el-button>
  </div>
  <el-button @click="showChat=!showChat">展开</el-button>
</div>
</template>

<script>
import user_message from "./user_message";
export default {
  name: "chat",
  components: {
    user_message
  },
  data() {
    return {
      showChat: false,
      content: '',
      messages: [

      ],
      sys: ''
    }
  },
  created() {
    let str = navigator.userAgent;
    let rsg = /\;(.*?)\)/;
    let arr = rsg.exec(str);
    let result = "";
    if(arr.length >= 2){
      result = arr[1];
    }else{
      result = str.toLowerCase().indexOf("mac os x") > 0 ? "mac os":"windows"
    }
    this.sys = result
  },
  methods: {
    addMessage() {
      this.messages.push({
        id: 2,
        user: {
          id: 2,
          head_img: '/gopher04.png',
          username: this.sys,
        },
        content: this.content,
        add_time: new Date()
      })

    }
  },
  updated() {
      let e = document.getElementById('message');
      e.scrollTop = e.scrollHeight;
  },
}
</script>

<style scoped>
#message p {
  margin: 10px;
}
</style>
