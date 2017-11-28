<template>
    <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="member"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="absenceTypeValue"
        label="请假类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="absenceDateRange"
        label="请假时间">
      </el-table-column>
      <el-table-column
        prop="absenceCount"
        label="请假天数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="state"
        label="确认状态"
        width="180">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            member: '',
            absenceTypeValue: '',
            absenceDateRange: '',
            absenceCount:'',
            state:false
          }]
        }
      },     
      methods:{
          getList(){
              var _this=this;
              _this.$http.get('/api/getList').then((data) => {
                  console.log(data.data);
                   _this.tableData = data.data;
	            })
          }
      },
      mounted(){
          this.getList();
      }
    }
  </script>
  <style>
  .el-table{width:1200px;margin:0 auto;}
    .cell{text-align: center;}
    .new{
    font-size:12px;
    }
  </style>
  