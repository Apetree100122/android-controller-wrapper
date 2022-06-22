import Controller from './index.js'

const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout))
async function start() {
    let controller = new Controller({
        type: 'repl',
        command_type: 'json',
        port: 5678,
        ip: '192.168.40.86',
        query_view: true,
        activity_controller: true,
    })
    await controller.connect()

    // console.log('start wait change');
    // await controller.waitChange()
    // console.log('end wait change');

    await controller.exec(`press a`)
    await sleep(300)
    await controller.exec(`press b`)
    await sleep(300)
    await controller.exec(`press c`)
    await sleep(300)
    await controller.exec(`press d`)
    await sleep(300)
    await controller.exec(`press ENTER`)
    await sleep(300)

    await controller.press(`d`)
    // await controller.tap(50, 50)
    // await controller.clickText("ok")

    await controller.type('福满须防有祸，凶多料必无争。')

    await controller.exec(`press ENTER`)
    await sleep(300)

    await controller.exec(`press BACK`)
    await controller.exec(`press BACK`)
    await controller.exec(`press BACK`)
    await controller.exec(`press BACK`)
    await sleep(300)

    let tree = await controller.getVisibleViewTree()
    console.log('tree', JSON.stringify( tree));
    // await controller.clickText(tree, 'Chrome')
    // await controller.clickText(tree, '云服务')

    await controller.slide(200, 500, 1000, 600, 1000, 100)
    await controller.slide(1000, 500, 200, 600, 1000, 100)

    await controller.quit()
    console.log('over!')

}

start()