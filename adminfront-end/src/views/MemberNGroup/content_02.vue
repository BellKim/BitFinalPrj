<template>
    <div class="content02_view">
        <h1> Company member Management tool </h1>


      <el-table 
        :data="CompanyMemberAll"
        stripe
        style="width:100%">

            <el-table-column
              prop="memberSeq"
              label="memberSeq"
              width="100">
            </el-table-column>

            <el-table-column
              prop="memberId"
              label="memberId"
              width="100">
            </el-table-column>


            <el-table-column
              prop="memberName"
              label="memberName"
              width="100">
            </el-table-column>

            <el-table-column
              prop="address"
              label="address"
              width="100">
            </el-table-column>



            <el-table-column
              prop="email"
              label="email"
              width="100">
            </el-table-column>

            <el-table-column
              prop="myMoney"
              label="myMoney"
              width="100">
            </el-table-column>


            <el-table-column
              prop="companyInfo"
              label="companyInfo"
              width="100">
            </el-table-column>

            <el-table-column
              prop="auth"
              label="auth"
              width="100">
            </el-table-column>

            <el-table-column
              prop="del"
              label="del"
              width="100">
            </el-table-column>


            <el-table-column
              prop=""
              label="button"
              width="100">
              <el-table-column align="center" label="Actions" width="120">
                <template slot-scope="scope">

                  <router-link :to="'/managemember2/companydetail/'+scope.row.memberId">
                    <el-button type="primary" size="small" icon="el-icon-edit">
                      상세정보
                    </el-button>
                  </router-link>

                </template>
              </el-table-column>

            </el-table-column>



      </el-table>

      <br> <hr>
<!-- 
      <pre>
-> callList
/adminCompanyMemberShowAll
/showCompanyInfo  (Memberdto)
/adminGetCompanyInfoOne
/finishApprovalCompanyList
/adminGetCompanyLocationALl
/adminGetCompanyNmaeAll
      </pre> -->

      <!-- <button v-on:click="showAdminCompanyMamberShowAll"> Call Company List All </button> -->
      <!-- <ul>
        <li v-for="item in CompanyMemberAll" :key="item.memberSeq">{{item}}</li>

      </ul> -->

    

      


    </div>
</template>

<script scoped>

import 'element-ui/lib/theme-chalk/display.css';
const path = "http://localhost:9000";

export default {
    data(){
      return{
        CompanyMemberAll:[]
        




      }
        
    },
    created(){
      this.showMemberDteailAll();

      
    },

    methods:{

      showMemberDteailAll(){
        axios.post(path+"/adminCompanyMemberShowAll")
        .then(res=>{
          console.log("companyDetail show all ")
          console.log(res.data)
          this.CompanyMemberAll=res.data
        })


      }

      
      
        
          
     
    }

}
</script>

<style>

</style>


    <!-- <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table> -->












    <!--

    ELEMENT UI 의 이미지 영역 참조. <<image preview >>

    <div class="demo-image__preview">
  <el-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
</script>




-->