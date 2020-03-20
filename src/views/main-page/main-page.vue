<template>
  <div style="margin-top:1.5%">
    <div class="block">
      <el-carousel style="width:80%;margin:0 auto" height="450px">
        <el-carousel-item v-for="item in lunboData" :key="item.id">
          <el-image v-on:click="shopInfo()" :src="item.img" fit="contain"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="margin:0 auto;width:80%">
      <div style="border:1px solid black;margin-top:6%;padding:10px;width:20%;">
        <b>优选品牌</b>
      </div>
      <span
        style="display:inline-block;font:16px bolder;float:right;margin-top:-25px;margin-right:10px"
      >MORE</span>
      <div style="margin-top:2%">
        <el-image :src="require('@/assets/brand/1.jpg')" fit="contain"></el-image>
        <el-image style="margin:auto 2.5%" :src="require('@/assets/brand/2.jpg')" fit="contain"></el-image>
        <el-image :src="require('@/assets/brand/3.jpg')" fit="contain"></el-image>

        <div style="margin-top:1%">
          <el-image :src="require('@/assets/brand/4.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/brand/5.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/brand/6.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/brand/7.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/brand/8.jpg')" fit="contain"></el-image>
          <el-image style="margin-left: 1.4%" :src="require('@/assets/brand/9.jpg')" fit="contain"></el-image>
        </div>

        <div style="margin-top:1%">
          <el-image :src="require('@/assets/brand/13.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/brand/10.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/brand/14.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/brand/11.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/brand/15.jpg')" fit="contain"></el-image>
          <el-image style="margin-left: 1.4%" :src="require('@/assets/brand/12.jpg')" fit="contain"></el-image>
        </div>

        <div style="margin-top:1%">
          <el-image :src="require('@/assets/brand/16.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/brand/19.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/brand/17.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/brand/13.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/brand/18.jpg')" fit="contain"></el-image>
          <el-image
            style="margin-left: 1.2%;width:185px"
            :src="require('@/assets/brand/20.jpg')"
            fit="contain"
          ></el-image>
        </div>
      </div>
    </div>

    <div style="margin:0 auto;width:80%">
      <div style="border:1px solid black;margin-top:6%;padding:10px;width:20%;">
        <b>潮流上装</b>
      </div>
      <span
        style="display:inline-block;font:16px bolder;float:right;margin-top:-25px;margin-right:30px"
      >MORE</span>
      <div style="margin-top:2%;text-align:start">
        <div>
          <div style="width:50%;float:left">
            <div style="width:34%;display:inline-block">
              <el-image :src="require('@/assets/tops/1.jpg')" fit="contain"></el-image>
              <el-image :src="require('@/assets/tops/2.jpg')" fit="contain"></el-image>
            </div>
            <el-image :src="require('@/assets/tops/3.jpg')" fit="contain"></el-image>
          </div>
          <div>
            <el-image :src="require('@/assets/tops/4.jpg')" fit="contain"></el-image>
            <el-image style="margin:auto 1%" :src="require('@/assets/tops/5.jpg')" fit="contain"></el-image>
            <el-image :src="require('@/assets/tops/6.jpg')" fit="contain"></el-image>
          </div>
        </div>

        <div style="margin-top:1%">
          <div style="width:50%;float:left;">
            <div style="width:34%;display:inline-block">
              <el-row style="background:#f8f8f8;font-weight:bolder;font-size:14px;width:90%">
                <el-col :span="12">
                  <div style="margin-bottom:22%">T恤</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">卫衣</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">夹克</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">衬衫</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">防风外套</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">风衣</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">PUMA</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">STAYREAL</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">Timberland</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">Life·After Life</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">VANS</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">AKOP.</div>
                </el-col>
              </el-row>
            </div>
            <el-image :src="require('@/assets/tops/7.jpg')" fit="contain"></el-image>
          </div>
          <div>
            <el-image :src="require('@/assets/tops/8.jpg')" fit="contain"></el-image>
            <el-image style="margin:auto 1%" :src="require('@/assets/tops/9.jpg')" fit="contain"></el-image>
            <el-image :src="require('@/assets/tops/10.jpg')" fit="contain"></el-image>
          </div>
        </div>

        <div style="margin-top:1%">
          <el-image :src="require('@/assets/tops/11.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/tops/13.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/tops/12.jpg')" fit="contain"></el-image>
          <el-image style="margin:auto 1.4%" :src="require('@/assets/tops/14.jpg')" fit="contain"></el-image>
          <el-image :src="require('@/assets/tops/15.jpg')" fit="contain"></el-image>
        </div>
      </div>
    </div>

    <div style="margin:0 auto;width:80%">
      <div style="border:1px solid black;margin-top:6%;padding:10px;width:20%;">
        <b>潮流下装</b>
      </div>
      <span
        style="display:inline-block;font:16px bolder;float:right;margin-top:-25px;margin-right:30px"
      >MORE</span>
      <div style="margin-top:2%;text-align:start">
        <div>
          <div style="width:50%;float:left">
            <div style="width:34%;display:inline-block">
              <el-image :src="require('@/assets/bottoms/1.jpg')" fit="contain"></el-image>
              <el-image :src="require('@/assets/bottoms/2.jpg')" fit="contain"></el-image>
            </div>
            <el-image :src="require('@/assets/bottoms/3.jpg')" fit="contain"></el-image>
          </div>
          <div>
            <el-image :src="require('@/assets/bottoms/4.jpg')" fit="contain"></el-image>
            <el-image style="margin:auto 1%" :src="require('@/assets/bottoms/5.jpg')" fit="contain"></el-image>
            <el-image :src="require('@/assets/bottoms/6.jpg')" fit="contain"></el-image>
          </div>
        </div>

        <div style="margin-top:1%">
          <div style="width:50%;float:left;">
            <div style="width:34%;display:inline-block">
              <el-row style="background:#f8f8f8;font-weight:bolder;font-size:14px;width:90%">
                <el-col :span="12">
                  <div style="margin-bottom:22%">休闲裤</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">牛仔裤</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">运动裤</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">工装裤</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">束口裤</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">短裤</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">Converse</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">Lee</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">Dickies</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">DUSTY</div>
                </el-col>

                <el-col :span="12">
                  <div style="margin-bottom:22%">Levi’s</div>
                </el-col>
                <el-col :span="12">
                  <div style="margin-bottom:22%">viishow</div>
                </el-col>
              </el-row>
            </div>
            <el-image :src="require('@/assets/bottoms/7.jpg')" fit="contain"></el-image>
          </div>
          <div>
            <el-image :src="require('@/assets/bottoms/8.jpg')" fit="contain"></el-image>
            <el-image style="margin:auto 1%" :src="require('@/assets/bottoms/9.jpg')" fit="contain"></el-image>
            <el-image :src="require('@/assets/bottoms/8.jpg')" fit="contain"></el-image>
          </div>
        </div>

        <div style="margin-top:1%">
          <el-image :src="require('@/assets/bottoms/11.jpg')" fit="contain"></el-image>
          <el-image
            style="margin:auto 1.4%"
            :src="require('@/assets/bottoms/13.jpg')"
            fit="contain"
          ></el-image>
          <el-image :src="require('@/assets/bottoms/12.jpg')" fit="contain"></el-image>
          <el-image
            style="margin:auto 1.4%"
            :src="require('@/assets/bottoms/14.jpg')"
            fit="contain"
          ></el-image>
          <el-image :src="require('@/assets/bottoms/14.jpg')" fit="contain"></el-image>
        </div>
      </div>
    </div>
    <span style="display:inline-block;margin:auto auto;width:90px;height:30px;line-height:30px;margin-top:5%;color:white;background:black">MORE</span>
    <el-image style="margin-top:10%" :src="require('@/assets/underBg.jpg')" fit="contain"></el-image>
  </div>
</template>

<script>
import { mainPage } from "./main-page";
export default {
  mixins: [mainPage]
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>