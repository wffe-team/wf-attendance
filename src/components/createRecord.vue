<template>
  <el-form ref="CreateForm" :model="form" label-width="80px">
  <el-form-item label="姓名">
    <el-input v-model="form.member"></el-input>
  </el-form-item>
  <el-form-item label="请假类型">
    <el-select placeholder="请选择请假类型">
      <el-option v-for="item in form.absenceType" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="请假时间">
    <el-date-picker
      v-model="form.absenceDateRange"
      type="datetimerange"
      placeholder="选择时间范围">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="请假天数">
    <el-input v-model="form.absenceCount"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确定</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          member: '',
          absenceType: [{value:'选项1',label:'事假'},{value:'选项2',label:'加班'},{value:'选项3',label:'病假'},{value:'选项4',label:'公出'},{value:'选项5',label:'年假'},{value:'选项6',label:'婚假'},{value:'选项7',label:'丧假'},{value:'选项8',label:'其他'}],
          absenceDateRange: '',
          absenceCount: '',
          state: '0'
        }
      }
    },
    methods: {
      onSubmit () {
	    this.$refs.CreateForm.validate((valid) => {
	        if (valid) {
                let para = Object.assign({}, this.form);
	            this.$http.post('/api/createRecord', para).then((data) => {
                    console.log(data);
	            })
	        }
	     });
    }
    }
  }
</script>
<style scope>
  .el-form{width:500px;margin:0 auto;}
  .el-input{width:350px;}
</style>

