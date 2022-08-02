import request from '@/utils/request'

export default {
    //分页查询评论
    getPageList(page, limit, courseId) {
        return request({
            url: '/eduservice/comment/getCommentInfo/' + page + "/" + limit,
            method: 'get',
            params: { courseId }
        })
    },
    addComment(comment) {
        return request({
            url: `/eduservice/comment/auth/addComment`,
            method: 'post',
            data: comment
        })
    }
}