export {}
// 키인연산자
// 복잡한 중첩 타입
// type APIResponse = {
//     user: {
//         userId: string,
//         friendList: {
//             count: number,
//             friends: {
//                 firstName: string,
//                 lastName: string
//             }[]
//         }
//     }
// }

// function getApiResponse() : Promise<APIResponse> {
//     //...
// }
// function renderFriendList(friendList: unknown) {
//     //...
// }

// let response = await getApiResponse()
// renderFriendList(response.user.friendList)

// frinetList를 따로 정의해서, APIResponse도 재정의 하는 방식이 있다.
// type FriendList = {
//     count: number,
//     friends: {
//         firstName: string,
//         lastName: string
//     }[]
// }

// type APIResponse = {
//     user: {
//         userId: string,
//         friendList: FriendList
//     }
// }

// 일일이 다시 만들어야하는 일이 귀찮다.
type APIResponse = {
    user: {
        userId: string,
        friendList: {
            count: number,
            friends: {
                firstName: string,
                lastName: string
            }[]
        }
    }
}

// ㄴO.Oㄱ
type FriendList = APIResponse['user']['friendList']

// 모든 형태(객체, 클래스 생성자, 클래스 인스턴스)와 배열에 키인할 수 있다.
type Friend = FriendList['friends'][number]

// 자바스크립트 객체의 필드를 찾는 문법과 키인의 문법은 의도적으로 비슷하게 만들어 졌다.

// keyof 연산자
// keyof를 이용하면 객체의 모든 키를 문자열 리터럴 타입 유니온으로 얻을 수 있다.
type ResponseKeys = keyof APIResponse // 'user'
type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
type FriendListKeys = keyof APIResponse['user']['friendList'] // 'count' | 'friends'

// 키인와 keyof 연산자를 혼합해서 사용하면 객체에서 주어진 키에 해당하는 값을 반환하는 getter 타입을 안전하게 구현할 수 있다.
function get<O extends object, K extends keyof O>(o: O, k: K):O[K] {
    return o[k]
}
// get함수는 객체 o와 키 k를 받는다.
// keyof O는 문자열 리터럴 타입의 유니온으로 o의 모든 키를 표현한다. 제네릭 타입 K는 그 유니온을 상속받는다.