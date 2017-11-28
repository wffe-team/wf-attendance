<template>
  <el-table :data="tableDate" border stripe  style="width:100%;">
       <el-table-column prop="member" label="姓名" header-align="center" style="width:10%;"></el-table-column>
       <el-table-column v-for="(item,index) in tableDate.absenceType" 
                        :key="item.label" 
                        :label="item.value" header-align="center">
                        <template scope="scope">                          
                          <span>{{scope.row.person[item.label]}}</span>
                        </template>
         </el-table-column> 
       <el-table-column prop="state" 
                        label="确认" 
                        header-align="center" 
                        style="width:10%;">
                        <template scope="scope">
                            <el-switch v-model="scope.row.state" 
                                        @change="toggleStatus(scope.row)"  
                                        active-color="#13ce66" 
                                        inactive-color="#ff4949" 
                                        onText="已确认" 
                                        offText="请确认"
                                        :width="75"> 
                            </el-switch>
                        </template>
       </el-table-column>
  </el-table>   
</template>
<script>
export default {
  data() {
    return {
      tableDate: [
        {
          member: "",
          absenceType: "",
          person: "",
          state:""
        }
      ]
    };
  },
  methods: {
    getList() {
      this.$http.get("/api/getList").then(data => {
        var simAbsenceType = [
            { value: "事假", label: "事假" },
            { value: "加班", label: "加班" },
            { value: "病假", label: "病假" },
            { value: "公出", label: "公出" },
            { value: "年假", label: "年假" },
            { value: "婚假", label: "婚假" },
            { value: "丧假", label: "丧假" },
            { value: "其他", label: "其他" }
          ],
          attendanceList = data.data,
          resList = [], //合并后的数组
          repeat = {};
        for (var i = 0; i < attendanceList.length; i++) {
          if (!repeat[attendanceList[i].member]) {
            var temporaryType = []; //临时存放请假类型
            var temporaryTime = {}; //临时存放请假时间
            var temporaryCount = {}; //临时存放请假天数
            resList.push(attendanceList[i]);
            temporaryType.push(resList[resList.length - 1].absenceTypeValue); //用于判断下条记录是否和已有记录的请假类型重复
            temporaryTime[attendanceList[i].absenceTypeValue] =
              attendanceList[i].absenceDateRange;
            temporaryCount[attendanceList[i].absenceTypeValue] =
              attendanceList[i].absenceCount;
            resList[resList.length - 1].absenceTypeValue = temporaryType;
            resList[resList.length - 1].absenceDateRange = temporaryTime;
            resList[resList.length - 1].absenceCount = temporaryCount;
            repeat[attendanceList[i].member] = 1;
            resList[resList.length - 1].person = {};
            resList[resList.length - 1].person[
              attendanceList[i].absenceTypeValue
            ] =
              attendanceList[i].absenceDateRange[
                attendanceList[i].absenceTypeValue
              ] +
              "（共" +
              resList[resList.length - 1].absenceCount[
                attendanceList[i].absenceTypeValue
              ] +
              "天）";
          } else {
            for (var j = 0; j < resList.length; j++) {
              if (resList[j].member == attendanceList[i].member) {
                if (
                  resList[j].absenceTypeValue.indexOf(
                    attendanceList[i].absenceTypeValue
                  ) == "-1"
                ) {
                  resList[j].absenceTypeValue.push(
                    attendanceList[i].absenceTypeValue
                  );
                  resList[j].absenceDateRange[
                    attendanceList[i].absenceTypeValue
                  ] =
                    attendanceList[i].absenceDateRange;
                  resList[j].absenceCount[attendanceList[i].absenceTypeValue] =
                    attendanceList[i].absenceCount;
                  resList[j].person[attendanceList[i].absenceTypeValue] =
                    resList[j].absenceDateRange[
                      attendanceList[i].absenceTypeValue
                    ] +
                    "（共" +
                    resList[j].absenceCount[
                      attendanceList[i].absenceTypeValue
                    ] +
                    "天）";
                } else {
                  resList[j].absenceDateRange[
                    attendanceList[i].absenceTypeValue
                  ] =
                    attendanceList[i].absenceDateRange +
                    "；" +
                    resList[j].absenceDateRange[
                      attendanceList[i].absenceTypeValue
                    ];
                  resList[j].absenceCount[attendanceList[i].absenceTypeValue] =
                    Number(attendanceList[i].absenceCount) +
                    Number(
                      resList[j].absenceCount[
                        attendanceList[i].absenceTypeValue
                      ]
                    );
                  resList[j].person[attendanceList[i].absenceTypeValue] =
                    resList[j].absenceDateRange[
                      attendanceList[i].absenceTypeValue
                    ] +
                    "（共" +
                    resList[j].absenceCount[
                      attendanceList[i].absenceTypeValue
                    ] +
                    "天）";
                }
              }
            }
          }
        }
        resList.absenceType = simAbsenceType;
        this.tableDate = resList;
      });
    },
    toggleStatus(stateItem) { 
        var changeState={member:stateItem.member,state:stateItem.state};
        this.$http.post('/api/changeState', changeState).then((data) => {
           console.log(data.data);   
        })
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
