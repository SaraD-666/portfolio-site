<template>
  <div class="resume" @mousewheel="mouse" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <!-- 右侧自定义滚动条 -->
    <div class="custom-scrollbar">
      <div class="custom-thumb" :style="thumbStyle"></div>
    </div>
    <transition :duration="{ enter: 1000, leave: 500 }" :leave-active-class="`animate__animated ${leaveanimate}`"
      :enter-active-class="`animate__animated ${enteranimate}`" mode="out-in">
      <div class="section" :style="{ height: `${clientHeight}` }" :key="init">
        <div class="sec">
          <component :is="currentView"></component>
        </div>
      </div>
    </transition>
    <div class="next"><i class="iconfont icon-xiala setarrow" @click="nextPage"></i></div>
  </div>
</template>

<script>
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import ContactView from '@/views/ContactView'

export default {
  components: {
    HomeView,
    AboutView,
    ContactView
  },
  data() {
    return {
      clientHeight: '900px',
      init: 1,
      lastscroll: 0,
      isScrolling: false, // 新增：标记是否正在滑动
      leaveanimate: '', // 动态设置退出动画
      enteranimate: '', // 动态设置进入动画
      touchStartY: 0, // 记录触摸开始的 Y 坐标
      touchEndY: 0 // 记录触摸结束的 Y 坐标
    }
  },
  computed: {
    currentView() {
      switch (this.init) {
        case 1: return 'HomeView'
        case 2: return 'AboutView'
        case 3: return 'ContactView'
        default: return 'HomeView'
      }
    },
    thumbStyle() {
      // 总页数
      const total = 3
      // 滑块高度（百分比）
      const height = 100 / total
      // 滑块顶部位置（百分比）
      const top = (this.init - 1) * height
      return {
        height: `${height}%`,
        top: `${top}%`
      }
    }
  },
  methods: {
    mouse(event) {
      if (this.isScrolling) return; // 如果正在滑动，直接返回
      const scrollduration = event.timeStamp - this.lastscroll;

      // 限制滚动触发频率
      if (scrollduration > 2000) {
        this.lastscroll = event.timeStamp;
        this.isScrolling = true; // 设置滑动状态

        if (event.deltaY > 0) {
          // 向下滚动
          if (this.init < 3) {
            this.leaveanimate = 'animate__fadeOutUp'; // 向上退出
            this.enteranimate = 'animate__fadeInUp'; // 从下进入
            this.init++;
          }
        } else {
          // 向上滚动
          if (this.init > 1) {
            this.leaveanimate = 'animate__fadeOutDown'; // 向下退出
            this.enteranimate = 'animate__fadeInDown'; // 从上进入
            this.init--;
          }
        }

        // 动画完成后解除滑动状态
        setTimeout(() => {
          this.isScrolling = false;
        }, 2000); // 动画持续时间
      }
    },
    handleTouchStart(event) {
      // 记录触摸开始的 Y 坐标
      this.touchStartY = event.touches[0].clientY;
    },
    handleTouchEnd(event) {
      if (this.isScrolling) return; // 如果正在滑动，直接返回
      const scrollduration = event.timeStamp - this.lastscroll;

      // 限制触摸滑动触发频率
      if (scrollduration > 1000) {
        this.lastscroll = event.timeStamp;
        this.isScrolling = true; // 设置滑动状态

        // 记录触摸结束的 Y 坐标
        this.touchEndY = event.changedTouches[0].clientY;
        const deltaY = this.touchEndY - this.touchStartY;

        if (Math.abs(deltaY) > 50) {
          // 判断滑动方向
          if (deltaY < 0) {
            // 向上滑动
            if (this.init < 3) {
              this.leaveanimate = 'animate__fadeOutUp'; // 向上退出
              this.enteranimate = 'animate__fadeInUp'; // 从下进入
              this.init++;
            }
          } else {
            // 向下滑动
            if (this.init > 1) {
              this.leaveanimate = 'animate__fadeOutDown'; // 向下退出
              this.enteranimate = 'animate__fadeInDown'; // 从上进入
              this.init--;
            }
          }
        }

        // 动画完成后解除滑动状态
        setTimeout(() => {
          this.isScrolling = false;
        }, 1000); // 动画持续时间
      }
    },
    nextPage() {
      if (this.init === 3) {
        this.init = 1;
      } else {
        this.init = this.init + 1;
      }
    }
  },
  mounted() {
    this.clientHeight = `${document.documentElement.clientHeight}px`;
    window.onresize = () => {
      this.clientHeight = `${document.documentElement.clientHeight}px`;
    };
  }
}
</script>

<style>
.resume {
  position: relative;
  height: 100%;
  overflow: hidden;
}

/* 自定义右侧滚动条样式 */
.custom-scrollbar {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 120px;
  background: #f0f0f0;
  border-radius: 3px;
  z-index: 10;
  box-shadow: 0 0 2px #ccc;
  display: none;
}

.custom-thumb {
  position: absolute;
  left: 0;
  width: 100%;
  background: #409eff;
  border-radius: 3px;
  transition: top 0.3s;
}

.section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 隐藏顶部 Tab 栏（假设 Tab 栏在 nav 中） */
@media screen and (max-width: 768px) {
  nav {
    display: none;
  }
}

.page-indicator {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  transition: background 0.3s;
}

.dot.active {
  background: #409eff;
}
</style>