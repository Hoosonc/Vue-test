
<template>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">

    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="身份证号" prop="idNumber">
      <el-input v-model="form.idNumber"></el-input>
    </el-form-item>

    <el-form-item label="名族" prop="nation">
      <el-input v-model="form.nation"></el-input>
    </el-form-item>

    <el-form-item label="政治面貌" prop="politics_status">
      <el-select v-model="form.politics_status" placeholder="请选择政治面貌">
        <el-option label="共青团员" value="共青团员"></el-option>
        <el-option label="中共党员" value="中共党员"></el-option>
        <el-option label="中共预备党员" value="中共预备党员"></el-option>
        <el-option label="群众" value="群众"></el-option>
      </el-select>

    </el-form-item>

    <el-form-item label="文化程度">
      <el-select v-model="form.education_background" placeholder="请选择文化程度" disabled>
        <el-option label="共青团员" value="共青团员" ></el-option>
        <el-option label="中共党员" value="中共党员"></el-option>
        <el-option label="中共预备党员" value="中共预备党员"></el-option>
        <el-option label="群众" value="群众"></el-option>
      </el-select>

    </el-form-item>

    <el-form-item label="入团年月" prop="eDate" >
      <el-col :span="11">
        <el-date-picker type="month" placeholder="选择日期" v-model="form.e" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="是否团干部" label-width="100px">
      <el-switch v-model="form.istg"></el-switch>
    </el-form-item>

    <el-form-item label="手机号码" prop="phone">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>

    <el-form-item label="微博">
      <el-input v-model="form.wb"></el-input>
    </el-form-item>

    <el-form-item label="QQ">
      <el-input v-model="form.qq"></el-input>
    </el-form-item>

    <el-form-item prop="email" label="邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>

    <el-form-item label="发展团员编号" prop="devId" label-width="100px">
      <el-input v-model="form.devId"></el-input>
    </el-form-item>

    <el-form-item label="现任团内职务" label-width="100px">
      <el-select v-model="form.post" placeholder="请选择现任团内职务">
        <el-option label="书记" value="书记"></el-option>
        <el-option label="副书记" value="副书记"></el-option>
        <el-option label="组织委员" value="组织委员"></el-option>
        <el-option label="宣传委员" value="宣传委员"></el-option>
        <el-option label="文体委员" value="文体委员"></el-option>
        <el-option label="生产委员" value="生产委员"></el-option>
        <el-option label="权益委员" value="权益委员"></el-option>
        <el-option label="其他" value="其他"></el-option>
      </el-select>

    </el-form-item>

    <el-form-item label="任现职年月" label-width="90px">
      <el-col :span="11">
        <el-date-picker type="month" placeholder="选择日期" v-model="form.r" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="团干部性质" label-width="90px">
      <el-select v-model="form.txz" placeholder="请选择团干部性质">
        <el-option label="专职团干" value="专职团干"></el-option>
        <el-option label="兼职团干" value="兼职团干"></el-option>
        <el-option label="挂职团干" value="挂职团干"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="是否同级党委（支部）成员" label-width="120px">
      <el-switch v-model="form.isdw"></el-switch>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {postInfo} from "network/home";

export default {
  data() {
    return {
      rules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {min: 2, max: 3, message: '长度在 2 到 3 个字符', trigger: 'blur'}
        ],
        idNumber: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {min: 18, max: 18, message: '长度为18', trigger: 'blur'}
        ],
        nation: [
          {required: true, message: '请输入名族', trigger: 'blur'},
        ],
        politics_status: [
          {required: true, message: '请选择政治面貌', trigger: 'blur'},
        ],
        education_background: '大学本科',
        e: [
          {required: true, message: '请选择入团时间', trigger: 'blur'},
        ], // 入团年月
        phone: [
          {required: true, message: '请选输入手机号', trigger: 'blur'},
        ],
        wb: '', // 微博
        qq: '',
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        devId: '', // 发展团员编号
        post: '', // 团内现任职务
        rDate: '', // 任职年月
        dw: '', // 是否同级党委成员
      },
      form: {
        name: '',
        idNumber: '',
        nation: '',
        politics_status: '',
        education_background: '普通本科',
        eDate: '', // 入团年月
        e: '',
        istg: false, // 团干
        tg: '否',
        phone: '',
        wb: '', // 微博
        qq: '',
        email: '',
        devId: '', // 发展团员编号
        post: '', // 团内现任职务
        rDate: '', // 任职年月
        r: '',
        isdw: false,
        txz: '',
        dw: '否', // 是否同级党委成员
      }
    }
  },
  methods: {
    onSubmit() {
      postInfo(this.form.name, this.form.idNumber, this.form.nation,
          this.form.politics_status, this.form.education_background, this.form.eDate,
          this.form.tg, this.form.phone, this.form.wb, this.form.qq, this.form.email,
          this.form.devId, this.form.post, this.form.rDate, this.form.txz, this.form.dw).then(res =>{
        this.$message.success("提交成功")
        console.log(res)
        setTimeout(() =>{
          this.$router.push({
            name: 'success',
            params: {...res}
          })
        },1500)

      }).catch(err =>{
        console.log(err);
      })
    }
  },
  watch: {
    'form.istg': function (v) {
      this.form.tg = v ? '是' : '否'
    },
    'form.isdw': function (v) {
      this.form.dw = v ? '是' : '否'
      console.log(this.form.dw);
    },
    'form.e': function (v){
      if (v.getMonth()>=9){
        this.form.eDate = v.getFullYear() + '-' + (v.getMonth()+1)
      }else {
        this.form.eDate = v.getFullYear() + '-0' + (v.getMonth()+1)
      }
      console.log(this.form.eDate);
    },
    'form.r': function (v){
      if (v.getMonth()>=9){
        this.form.rDate = v.getFullYear() + '-' + (v.getMonth()+1)
      }else {
        this.form.rDate = v.getFullYear() + '-0' + (v.getMonth()+1)
      }
      console.log(this.form.rDate);
    }
  }
}
</script>

<style>

</style>
