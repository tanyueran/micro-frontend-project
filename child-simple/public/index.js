let str = [
  `<div>首页</div>`,
  `<div>案例</div>`,
  `<div>查询</div>`,
]
let content = document.getElementById('content');

function handler(index) {
  content.innerHTML = str[index];
}

function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
function mount(props) {
  console.log(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载子应用的应用实例
 */
function unmount() {
}