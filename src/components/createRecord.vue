<template>
<el-row class="attendance">
  <el-form ref="CreateForm" :model="form" :rules="rules"  label-width="80px">
  <el-form-item label="姓名" prop="member" :rules="[{required:true,message:'姓名不能为空'}]">
    <el-input v-model="form.member" placeholder="请输入姓名"></el-input>
  </el-form-item>
  <el-form-item label="请假类型" prop="absenceTypeValue" :rules="[{required:true,message:'请假类型不能为空'}]">
    <el-select v-model="form.absenceTypeValue" placeholder="请选择请假类型" >
      <el-option
        v-for="item in form.absenceType" 
        :key="item.value" 
        :label="item.label" 
        :value="item.value">
       </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="请假时间" prop="absenceDateRange" :rules="[{required:true,message:'请假时间不能为空'}]"> 
    <el-date-picker
      v-model="form.absenceDateRange"
      type="datetimerange"
      placeholder="选择时间范围" >
    </el-date-picker>
  </el-form-item>
  <el-form-item label="请假天数" prop="absenceCount" :rules="[{required:true,message:'请假天数不能为空'},{type:number,message:'请假天数必须为数字值'}]">
    <el-input v-model="form.absenceCount" type="number"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确定</el-button>
    <el-button @click="resetForm">取消</el-button>
  </el-form-item>
</el-form>
</el-row>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          member: '',
          absenceType: [{value:'事假',label:'事假'},{value:'加班',label:'加班'},{value:'病假',label:'病假'},{value:'公出',label:'公出'},{value:'年假',label:'年假'},{value:'婚假',label:'婚假'},{value:'丧假',label:'丧假'},{value:'其他',label:'其他'}],
          absenceTypeValue:'',
          absenceDateRange: '',
          absenceCount: '',
          state: false
        }
      }
    },
    methods: {
      onSubmit () {
      var _this =this;
	    _this.$refs.CreateForm.validate((valid) => {
	        if (valid) {
                let para = Object.assign({}, _this.form);
	              _this.$http.post('/api/createRecord', para).then((data) => {
                   if(data.data){
                      _this.$router.push('/attendanceList');
                   }
	            })
	        }
	     });
    },
    resetForm(){
    this.$refs.CreateForm.resetFields();
    }
    }
  }
</script>
<style>
  .attendance .el-form{width:500px;margin:0 auto;}
  .attendance .el-input{width:350px;}
  .attendance .el-form-item__error{margin-left:35px;}
</style>

