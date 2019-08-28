<template>
    <div>
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            label-position="left"
        >
            <el-form-item label="ip地址" prop="ipaddress" required>
            <el-input type="text" v-model="ruleForm.ipaddress"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username" required>
            <el-input type="text" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" required>
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>-->
            <el-form-item label="端口" prop="port" required>
            <el-input v-model.number="ruleForm.port"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="goToWebssh()" plain>连接</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'AddNode',
        data() {
        var checkPort = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("端口不能为空"));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                callback(new Error("请输入数字值"));
                } else {
                if (value < 20) {
                    callback(new Error("必须大于20"));
                } else {
                    callback();
                }
                }
            }, 1000);
            };
            var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
            };
            var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
            };
        return {
            ruleForm: {
                pass: "",
                checkPass: "",
                port: 22,
                ipaddress: "",
                username: "root"
            },
            rules: {
                // pass: [
                //     { validator: validatePass, trigger: 'blur' }
                // ],
                // checkPass: [
                //     { validator: validatePass2, trigger: 'blur' }
                // ],
                port: [{ validator: checkPort, trigger: "blur" }]
            }
        };
        },
        methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        goToWebssh() {
            var jsonStr = `{"username":"${this.ruleForm.username}", "ipaddress":"${this.ruleForm.ipaddress}", "port":${this.ruleForm.port}, "password":"${this.ruleForm.pass}"}`
            var datMsg = window.btoa(jsonStr)
            this.$router.push({
                path:'/webssh',
                name:'WebSSH', 
                params:{
                    msg: 'msg',
                    dataObj: datMsg
                }});
        }
        }
    }
</script>