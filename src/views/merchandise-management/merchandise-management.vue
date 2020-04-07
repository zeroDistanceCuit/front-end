<template>
  <div>
    <el-card
      shadow="never"
      style="position:fixed;padding-bottom:10px;margin-top:-2%;z-index:auto;width:35%;height:60%"
    >
      <el-select
        size="mini"
        style="float:left;width:16%"
        class="select-input"
        v-model="value"
        filterable
        placeholder="类型"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input
        size="mini"
        style="width:30%;float:left;margin-left:6%"
        placeholder="请输入商品名称"
        v-model="input"
        clearable
      ></el-input>
      <el-button type="primary" size="mini" style="margin-left:-20%" plain @click="search">查询</el-button>
      <div>
        <el-table :data="table1" max-height="400" border-top="1px solid black">
          <el-table-column fixed="left" prop="Name" label="商品名称" width="150"></el-table-column>
          <el-table-column prop="Type" label="类型" width="90"></el-table-column>
          <el-table-column prop="Money" label="价格" width="80"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="add(scope.row)" type="text" size="small">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="position:fixed;right:5%;top:15%">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span style="float:left;color:blue">库存</span>
          </div>
          <el-table :data="table2" max-height="400" style="margin-top:-20px">
            <el-table-column fixed="left" prop="Name" label="商品名称" width="150"></el-table-column>
            <el-table-column prop="Type" label="类型" width="120"></el-table-column>
            <el-table-column prop="Money" label="价格" width="100"></el-table-column>
            <el-table-column prop="Num" label="数量" width="100"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                              <el-button @click.native.prevent="update(scope.row)" type="text" size="small">修改</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </el-card>
    <div>
      <el-dialog :visible.sync="dialogVisible" width="30%">
        <el-input-number
          style="float:left;margin-top:2%;margin-left:5%;"
          v-model="nums"
          :min="1"
          label="描述文字"
        ></el-input-number>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addAction">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogDeleteVisible" width="30%">
        <!-- 需要捆绑数据 -->
        <el-input-number
          style="float:left;margin-top:2%;margin-left:5%;"
          v-model="num2"
          :min="0"
          label="描述文字"
        ></el-input-number>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogDeleteVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateAction">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { merchandiseManagement } from "./merchandise-management";
export default {
  mixins: [merchandiseManagement]
};
</script>

<style>
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #22a7f0 !important;
}
</style>