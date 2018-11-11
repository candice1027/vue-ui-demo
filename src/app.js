import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
var vm = new Vue({
    el:'#app',
    data: {
        name: 'vue demo',
        loading1: false,
        loading2: true,
        loading3: true,
    },
    methods: {
        changeStatus() {
            console.log(this.loading1)
        }
    }
})

//以下是使用chai做单元测试，
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;
{
    const constructor = Vue.extend(Button); //Button是一个对象，利用Vue.extend()可以成为一个构造函数
    const button = new constructor({
        propsData: {
            icon: 'setting' //传数据
        }
    }); //新建一个button的实例
    button.$mount('#test') //把生成的button 挂在到 test上 ，这就是动态生成了一个按钮
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href');
    console.log(useElement)

    //下面的意思是，期望拿到的xlink:href的值是#i-setting，如果检查出来不是的话，就会报错
    expect(href).to.eq('#i-setting')//期待href等于 #i-setting

    button.$el.remove(); //测试结束后，删除button组件下的所有元素
    button.$destroy(); //销毁button实例

}
//测试Loading
{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            // icon: 'setting',
            loading: true
        }
    });
    button.$mount() //我们也可以不用挂在到某个元素上，所以可以不传参，这样就直接挂在内存中
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href');
    console.log(useElement)
    expect(href).to.eq('#i-loading')

    button.$el.remove(); //测试结束后，删除button组件下的所有元素
    button.$destroy(); //销毁button实例

}

//测试 icon在左边还是右边 这里是通过window.getComputedStyle(svg)来获得svg的order值
//这里判断order值是否等于1， button一定要挂在到页面上的某个元素中，不然页面就不会渲染这个button
// css就不会加在这个Button上，getComputedStyle()方法就获取不到他的样式
//css所有的属性值都是字符串，所以 1 要写成字符串'1'
{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            // icon: 'setting',
            loading: true,
            iconPosition: 'right',
        }
    });
    button.$mount('#test2') //我们也可以不用挂在到某个元素上，所以可以不传参，这样就直接挂在内存中
    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    button.$el.remove(); //测试结束后，删除button组件下的所有元素
    button.$destroy(); //销毁button实例
}
//测试点击事件

{
    const constructor = Vue.extend(Button);
    const gbutton = new constructor({
        propsData: {
           icon: 'setting'
        }
    });

    gbutton.$mount();
    let spy = chai.spy(function() {}); // 这个是spies里面的 间谍

    gbutton.$on('click',spy); //我们监听click 当间谍察觉到有click事件发生时，就会执行
    let button = gbutton.$el;
    button.click();
    expect(spy).to.have.been.called(); //这一步就是 期望 间谍函数被调用

}