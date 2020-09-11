const App = {
    // 视图模板
    template: `
    <input v-model="message" />
    <button @click="click">{{message}}</button>
    `,
    // 数据模型
    data(){
        return {
            message: "Hello Vue 3!!!"
        }
    },
    method: {
        click(){
            this.message = this.message.split('').reverse().join('')
        }
    }
}
export default App