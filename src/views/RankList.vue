<template>
    <div id="id_card">
        <img src="./img/ShiroiLogo.png" alt="" id="white_logo">
        <div id="name">Competitor</div>
        <div id="data">
            <div id="place" class="data_elem">
                <h3 class="title">PLACE</h3>
                <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;">12</p>
            </div>
            <div id="tasks" class="data_elem">
                <h3 class="title">TASKS</h3>
                <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;">task6</p>
            </div>
            <div id="place" class="data_elem">
                <h3 class="title">POINT</h3>
                <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;">1200</p>
            </div>
        </div>
        <div id="choice">
          <div id="to_c" class="change_to">计系</div>
          <div id="to_ai" class="change_to">ML</div>
          <div id="to_fr" class="change_to">前端</div>
          <div id="to_ba" class="change_to">后端</div>
        </div>
        <img src="./img/decoration.png" alt="" id="decoration">
    </div>
    <div id="line"><h3>Ranking List of Computer System</h3></div>
    <div id="rank_area">
    </div>
  </template>
  <style>
  #bpp{
    display: none;
  }
  .title{
    text-align: center;
    display: block;
    user-select: none;
    color: rgb(36, 36, 36);
  }
  #rank_area{
    position: absolute;
    width: 1000px;
    height: 600px;
    top: 252px;
    left: 650px;
    background-color: aquamarine;
  }
  #line>h3{
    position: relative;
    bottom: 45px;
    left: 10px;
    font-size: 40px;
    color: black;
  }
  #line{
    position: absolute;
    width: 1000px;
    height: 2px;
    left: 650px;
    top: 250px;
    background-color: #00B0FF;
  }
  #to_c{
    background-color: #ffffff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  #to_ai{
    background-color: #dadada;
  }
  #to_fr{
    background-color: #b8b8b8;
  }
  #to_ba{
    background-color: #919191;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .change_to{
    width: 90px;
    height: 30px;
    display: inline-block;
    text-align: center;
    font-size: 17px;
    padding-top: 3px;
    color: black;
    font-weight: 100px;
    font-family: 微软雅黑;
    cursor: pointer;
  }
  #choice{
    display: block;
    width: 360px;
    height: 30px;
    background-color: aquamarine;
    margin: auto;
    margin-top: 40px;
    border-radius: 20px;
  }
  #decoration{
    position: relative;
    left: 75%;
    top: 5%;
    width: 20%;
  }
  .data_elem{
    width: 130px;
    height: 100px;
    /* background-color: bisque; */
    margin-left: 18.33px;
    margin-right: 18.33px;
    display: inline-block;
  }
  #data{
    margin-top: 75px;
    width:500px;
    height: 100px;
    /* background-color: aliceblue; */
  }
  #name{
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 40px;
    margin-top: 40px;
    user-select: none
  }
  #id_card{
    width: 500px;
    height: 700px;
    margin-left: 150px;
    margin-top: 150px;
    background-color: #00B0FF;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
  #white_logo{
    width: 200px;
    margin: auto;
    display: block;
    padding-top: 45px;
  }
  </style>
  <script>
  import Vue from 'vue';
  const app = {
  data() {
    return {
      sites: [
        { text: 'Google' },
        { text: 'Runoob' },
        { text: 'Taobao' }
      ]
    }
  }
}

Vue.createApp(app).mount('#app')
</script>