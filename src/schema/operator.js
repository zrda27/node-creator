/**
 * Created by zengruda on 10/22/16.
 */
export default {
    name : "用户",
    fields: {
        name: {
            type : String,
            name: "名称",
            maxLength: 128,
            required: true,
            index: true,
            constraints: {
            }
        },
        password: {
            type: String,
            name: "密码",
            minLength: 6,
            required: true
        },

    },
    operators: {
        add: {
            name: "增加" + this.name
        }
    }
}
