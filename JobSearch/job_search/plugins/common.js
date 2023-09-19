import Vue from 'vue'

const content_type= {
  install(Vue){
    Vue.prototype.content_type = {
      position: 23,
      enterprise: 15,
      profession: 21,
      school: 22,
      community_enterprise: 18,
      post: 19,
      comment: 10,
      lecture: 16
    };
  }
}

// 使用: this.content_type.position
Vue.use(content_type);
