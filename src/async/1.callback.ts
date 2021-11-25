export {}
import * as fs from 'fs'

fs.readFile(
    '/var/log/apache2/access_log', 
    {encoding: 'utf8'},
    (error, data) => {
        if (error) {
            console.error('error reading', error)
            return ;
        }
        console.info('success reading!', data)
    }
)

fs.appendFile(
    '/var/log/apache2/access_log',
    'New access log entry',
    error => {
        if (error) console.error('error writing', error)
    }
)

//이들 호출이 비동기로 인어나기 때문에 API호출 순서로는 파일 시스템에서 실행할 동작 순서를 결정할 수 없다.
// 순차적으로 진행될지 아닌지는 알 수 없다.
// 코드를 실행하는 시점에 파일 시스템이 얼마나 바쁘냐에 따라 결과가 달라진다.
// 콜백을 계속 사용하면 콜백 헬에 빠지기 쉬운데 여러 동작을 연달아 실행할 때 보통 한 동작이 성공했을 때만 다음 동작으로 이어가고,
// 에러가 발생하면 즉시 빠져나와야 할 때가 많다. 콜백을 쓰면 일일이 수동으로 처리해야한다.