export {}
/*
타입스크립트는 코드를 캡슐화 할 수 있는 또 다른 수단인 namespace키워드를 제공한다. 
네임스페이스는 파일시스템에서 파일이 어떻게 구성되었는지 세부 사항을 추상화 한다.

.add라는 함수가 /coding/typescript/study/math에 있다는 사실을 알필요없이 Codding.Typescript.Study.Math.add같은 네임스페이스로 접근할 수 있게 해준다. 

타입스크립트에서는 네임스페이스를 코드 캡슐화 수단으로 권하지 않는다. 모듈과 네임스페이스중에 모듈을 사용하는 편이 낫다.
모듈을 사용해사 자바스크립트의 표준을 따르고 의존성을 명시적으로 만드는 것이 좋다. 명시적 의존성은 가독성, 모듈분리, 정적 분석에서 유리하다. 그래서 코드를 제거하고 컴파일된 코드를 여러 파일로 나눠 성능을 높여야 하는 프로젝트에 유용하다. 

네임스페이스에는 반드시 NetWork와 같은 이름이 있어야 한다. 함수 변수 타입 인터페이스 다른 네임스페이스를 익스포트 할 수 있다. 
namespace 블록 안에 모든 코드는 명시적으로 익스포트를 해야지 외부에서 볼 수 있다. 

인터페이스처럼 네임스페이스도 함칠 수 있다. 하나의 네임스페이스를 여러 파일로 쪼개 관리할 수 있다. 타입스크립트는 이름이 같은 네임스페이스를 알아서 재귀적으로 합쳐준다. 

import export와는 달리 네임스페이스는 module설정에 영항을 받지 않고 항상 전역변수로 컴파일 된다.
*/

// namespace Network {
//     export namespace HTTP {
//         export function get<T>(url: string): Promise<T> {
//             //...
//         }
//     }

//     export namespace TCP {
//         listenOn(port: number): Connection {
//             //...
//         }
//         //...
//     }

//     export namespace UDP {
//         //...
//     }

//     export namespace IP {
//         //...
//     }
// }

// Get.ts
// namespace Network {
//     export function get<T>(url: string): Promise<T> {
//         //...
//     }
// }

// App.ts
// namespace App {
//     Network.get<GitRepo>('https://api.github.com/repos/...')
// }
