export default {
    namespaced: true,
    state: {
        groupSeq: 0,
        groupList: [],
        detailSeq: 0,
        groupBoardList: [],
        groupBoardDetail: [],
        groupReferenceDetail: [],
        grouDetail: [],
        showGroupInfo: false,
        showBoardList: false,
        showBoardDetail: false,
        showDeleteBtn: false,
        showUpdateBtn: false,
        showReferenceDetail: false,
        total: 0,
        listQuery:{
          page: 1,
          limit: 5,
        },
        searchWord:'',
        s_keyWord:'',
        check1:false,
        check2:false,
    },
    getters: {
        getDetailSeq(){
            this.detailSeq
        }
    },
    mutations: {
        
    },
    actions: {
    }
}