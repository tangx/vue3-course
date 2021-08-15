import { onMounted, onUnmounted, reactive } from 'vue';

export default function () {

    // 设定鼠标坐标
    let point = reactive({
        x: 0,
        y: 0
    })

    // 方法。 
    // 必须使用命名方法。 匿名方法将会认为是【两个】独立行为相同的方法。

    function savePoint(event: any) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY)
    }

    // 挂载
    onMounted(
        () => {
            console.log("onMounted: usePoint")
            window.addEventListener('click', savePoint)
        }
    )
    // 卸载
    onUnmounted(
        () => {
            console.log("onUnmounted: usePoint")
            window.removeEventListener('click', savePoint)
        }
    )

    // 返回坐标
    return point
}