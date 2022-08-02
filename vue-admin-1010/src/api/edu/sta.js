import request from '@/utils/request'
export default {
    //统计某天注册人数
    createStaData(day){
        return request({
            url: `/edusta/stadaily/registerCount/${day}`,
            method: 'post'
          })
    },
    getDataSta(searchObj){
        return request({
            url: `/edusta/stadaily/showData/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
            method: 'get'
          })
    }
}