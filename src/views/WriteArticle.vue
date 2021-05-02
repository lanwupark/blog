<template>
    <div class="write-box">
        <div class="center-box">
            <!-- 撰写|编辑文章 -->
            <div class="write-page">
                <!-- 标题 -->
                <div class="write-title">
                    <span>标题</span>
                    <input type="text" placeholder="单行输入">
                </div>
                <!-- 类别 -->
                <div class="write-class">
                    <el-checkbox 
                            class="selectAll"
                            :indeterminate="isIndeterminate" 
                            v-model="checkAll" 
                            @change="handleCheckAllChange" 
                            :results.sync="results"
                        >全选</el-checkbox>
                    <div class="selectBox">
                        <span>类别</span>
                        <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
                            <el-checkbox v-for="item in category" :label="item" :key="item">{{item}}</el-checkbox>
                        </el-checkbox-group>
                        <!-- 自定义类别 -->
                        <el-input
                            class="input-new-tag"
                            v-if="inputVisible"
                            v-model="inputValue"
                            ref="saveTagInput"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm"
                            size="small"
                        >
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">添加新的</el-button>
                    </div>
                </div>
                <!-- 正文 -->
                <div class="write-mainPage">
                    <div class="mainPage-title">正文</div>
                    <el-form :model="validateForm" ref="validateForm">
                        <el-form-item
                            prop="text"
                        >
                            <el-input type="textarea" v-model="validateForm.text" class="input-text"></el-input>
                        </el-form-item>
                        <el-form-item class="mainPage-btn">
                            <el-button type="primary" @click="submitForm('validateForm')" class="save-btn">保存</el-button>
                            <el-button @click="resetForm('validateForm')" class="cancel-btn">取消</el-button>
                        </el-form-item>
                        </el-form>
                </div>
            </div>
            <!-- 头侧用户和好友列表 -->
            <div class="right">
                <ReleaseNotes></ReleaseNotes>
                <Prohibit></Prohibit>
            </div>
        </div>
        <!-- 底部公共组件 -->
        <div class="bottom">
            <Bottom></Bottom>
        </div>
    </div>
</template>

<script>
import ReleaseNotes from "@/components/ReleaseNotes.vue";
import Prohibit from "@/components/Prohibit.vue";
import Bottom from "@/components/Bottom.vue";
const classOptions = ['生活', '军事', '编程'];
export default {
    components: {
        ReleaseNotes,
        Prohibit,
        Bottom,
    },
    data() {
        return {
            checkALl: false,
            checkedItems: [],
            category: classOptions,
            isIndeterminate: true,
            inputVisible: false,
            inputValue: '',
            validateForm: {
                text: ''
            }
        };
    },
    props: {
        defaultChecks: Array,
        results: {
            type: Array,
            required: true
        },
    },
    created() {
        let dc = this.defaultChecks;
        if (dc) {
            for (let i = 0; i < dc.length; i++) {
                this.category.push(dc[i])
            }
        }
    },
    watch: {
        checkedItems(n) {
            this.$emit('update:results', n)
        },
    },
     methods: {
        handleCheckAllChange(val) {
            this.checkedItems = val ? classOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedItemsChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.items.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                if (!this.category.includes(inputValue)) {
                    this.category.push(inputValue)
            }
        }
        this.inputVisible = false;
        this.inputValue = '';
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(() => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
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
        }
    }
};
</script>

<style lang="scss" scoped>
.write-box {
    position: relative;
    background:#eee;
    .center-box {
        height: 1000px;
        position: relative;

        .right {
            position: absolute;
            right: 40px;
        }
        .write-page {
            width: calc(100% - 510px);
            background: #fff;
            border: 2px solid #ccc;
            height: 900px;
            position: absolute;
            top: 40px;
            left: 55px;

            .write-title {
                margin: 50px 70px;
                span {
                    margin-right: 40px;
                }
                input {
                    width: calc(100% - 200px);
                    height: 50px;
                    border: none;
                    border-bottom: 1px solid #bbb;
                }

                input::-webkit-input-placeholder{ /*WebKit browsers*/
                    color: #ccc;
                }

                input::-moz-input-placeholder{ /*Mozilla Firefox*/
                    color: #ccc;
                }

                input::-ms-input-placeholder{ /*Internet Explorer*/ 
                    color: #ccc;
                }
            }

            
            .write-class {
                margin: 0 70px;
                .selectBox {
                    display: flex;
                }
                span {
                    margin-right: 30px;
                    margin-top: -2px;
                }
                .selectAll {
                    margin: 4px 0 4px 62px;
                }
                .button-new-tag {
                    color: #70bdff;
                    margin: -4px 0 0 30px;
                    height: 30px;
                    padding: 0 10px;
                }
            
                .input-new-tag {
                    width: 90px;
                    margin: -4px 0 0 30px;
                }
            }
            
            .mainPage-title {
                margin: 60px 70px 0 70px;
            }
            .input-text {
                width: calc(100% - 150px);
                margin: 6px 0 0 70px;
                /deep/ .el-textarea__inner{
                    resize: none;
                    height: 340px!important;
                }
            }

            .mainPage-btn {
                position: relative;
            }
            .save-btn {
                position: absolute;
                left: 300px;
                top: 10px;
                background: #333;
                padding: 12px 30px;
            }
            .cancel-btn {
                position: relative;
                left: 550px;
                top: 8px;
                color: red;
                padding: 12px 30px;
            }
        }
    }
}


</style>