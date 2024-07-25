<script setup lang="ts"></script>

<template>
  <div class="layui-container">
    <form class="layui-form layui-form-pane" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-block">
          <input
            type="text"
            name="username"
            lay-verify="required"
            placeholder="请输入"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-block">
          <input
            type="text"
            name="password"
            lay-verify="required"
            placeholder="请输入"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-inline layui-input-wrap">
          <input
            type="text"
            name="vercode"
            lay-verify="required"
            autocomplete="off"
            lay-affix="clear"
            class="layui-input"
          />
        </div>
      </div>
      <button type="button" class="layui-btn">确认</button>
      <button type="button" class="layui-btn layui-bg-blue">忘记密码</button>
    </form>
  </div>
</template>

<style lang="scss">
#app {
  background-color: #f2f2f2;
}

.layui-container {
  background-color: #fff;
}
</style>
