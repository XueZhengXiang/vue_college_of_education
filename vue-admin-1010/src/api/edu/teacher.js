import request from '@/utils/request'
export default {
    //讲师列表,条件查询带分页
    getTeacherListPage(current, limit, teacherQuery) {
        return request({
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            data: teacherQuery   //data把teacherQuery转成json传递到接口里面
        })
    },
    //逻辑删除讲师
    deleteTeacherId(id) {
        return request({
            url: `/eduservice/teacher/removeById/${id}`,
            method: 'delete'
        })
    },
    //添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
        })
    },
    //根据id查询
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/findById/${id}`,
            method: 'get',
        })
    },
    //修改讲师
    updateTeacherInfo(teacher){
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
        })
    }
}

