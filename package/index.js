const Vue = {
    createApp(config) {
        /*
            编译渲染函数
            MVVM框架中的渲染函数是会通过视图模板的编译建立的。
            编译过程 工厂函数 返回一个函数
            const compile = (template) => {
                //渲染函数
                return (observed, dom) => {
                    // 渲染过程
                }
            }
        */
        // const compile = (template) => () => {
        const compile = (template) => (observed, dom) => {
            // 重新渲染
            // let input = document.querySelector('input');
            // if(!input){
            //     console.log('create input')
            //     input = document.createElement('input');
            //     input.setAttribute('value',observed.message);
            //     window.addEventListener('keydown',()=>{
            //         observed.message = this.value
            //     })
            //     dom.appendChild(input)
            // }
            // let button = document.querySelector('button');
            // if(!button){
            //     console.log('create button')
            //     button = document.createElement('button');
            //     button.addEventListener('click',()=>{
            //         return config.methods.click.apply(observed)
            //     })
            //     dom.appendChild(button)
            // }
            // button.innerText = observed.message
        }

        // 生成渲染函数
        const render = compile();


        // 定义响应函数
        let effective;


        // 数据劫持
        // observed = new Proxy(config.data(), {

        // })







        return {
            mount: function (container) {
                const dom = document.getElementById(container)
                // effective = () => render(observed, dom)
                // render(observed, dom)
            }
        }
    }
}

export default Vue