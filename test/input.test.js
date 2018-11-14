const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

//describe it相当于一个测试用例模块 '存在'就是测试用例的名字
//describe 和 it 这些是由Mocha引入的，Mocha会自动引入，不需要手动
//expect 是属于chai的
//所以 BDD 也就是行为驱动测试是由mocha引入的 具体的断言是由chai.js引入的
describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy()
        })
        it('可以接收value', () => {

            vm = new Constructor({
                propsData: {
                    value:"1234"
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq('1234')

        })
        it('可以接收disabled',() => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)

        })
        it ('可以接收readonly',() => {

            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.eq(true)

        })
        it ('可以接收error',() => {

            vm = new Constructor({
                propsData: {
                    error: '姓名不能为空'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-err');
            const errMessage = vm.$el.querySelector('span');
            expect(errMessage.innerText).to.eq('姓名不能为空')

        })
    })
    descrbe('事件',() => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy()
        })

        it('它支持change事件',() =>{e
            vm = new Constructor({}).$mount();
            const callback = sinon.fake();
            //监听input change事件
            vm.on('change',callback);
            //触发input change事件
            let event = new Event('change');
            let inputElement = vm.$el.querySelector('input');
            inputElement.dispatchEvent(event);
            //expect(callback).to.have.been.called;
            expect(callback).to.have.been.calledWidth(event);

        })
    })
})