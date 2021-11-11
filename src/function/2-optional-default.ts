export {}
function stamp(name: string, memberId?: string) {
    let time = new Date().toLocaleTimeString();
    console.log(time, name, memberId || 'memberId가 없습니다.')
};

stamp('Karina', 'cw2xx041d'); // 12:18:24 PM Karina cw2xx041d
stamp('Robert') // 12:18:24 PM Robert memberId가 없습니다.

function stamp2(name: string, memberId = 'memberId가 없습니다.') {
    let time = new Date().toLocaleTimeString(); 
    console.log(time, name, memberId);
};

stamp2('Karina', 'cw2xx041d'); // 12:18:24 PM Karina cw2xx041d
stamp2('Robert'); // 12:18:24 PM Robert memberId가 없습니다.

type Context = {
    appId: string,
    userId: string
};

function log(message: string, context: Context = {
    appId: '123456',
    userId: 'wxx03d'
}) {
    let time = new Date().toLocaleTimeString(); 
    console.log(time, message, context.userId)
}