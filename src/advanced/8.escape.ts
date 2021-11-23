export {}
// 탈출구 : 상황에 따라서는 타입을 완벽하게 지정하지 않고도 어떤 작업이 안전하다는 사실을 타입스크립트가 믿도록 만들고 싶을 때가 있다.
/// 타입스크립트에게 안전한 작업임을 증명할 시간이 없을 때 활용할 수 있는 탈출구를 제공한다.

// 타입 어서션
// 타입 B가 있고 A <: B <: C를 만족하면 타입 검사기는 B는 실제로 A이거나 C라고 어서션(assertion: 단언, 확언)할 수 있다.
// 하지만 어떤 하나의 타입은 자신의 슈퍼타입이나 서브타입으로만 어서션 할 수 있다.

function formatInput(input: string) {
    //...
}

function getUserInput(): string | number {
  //...
  let random = Math.random()
  let abs = Math.abs(random * 10)
  if (abs <= 5) return 'hi'
  return 10
}

// 반환으로 number 또는 string이 되는 상황이다.
let input = getUserInput()

// input이 string이라고 어서션(단언)시킨다.
formatInput(input as string)

// 위코드와 같은 의미
formatInput(<string>input)

// Nonnull 어서션
// null이 될 수 있는 상황 (T | null, T | null | undefined)을 대비해 어떤 값이 null이나 undefined가 아니라 T라고 단언하는 문법
// nonnull 어서션 연산자 !
type A = number | null
// function add(a: A): number {
//     return a + 5 // => Object is possibly 'null'.
// }

function add2(a: A): number { 
    return a! + 5 // a의 타입은 이제 number가 되었다.
}

// 확실한 할당 어서션
// let userId: string
// userId.toUpperCase() // 값이 할당 되지 않음

// 확실한 할당 어서션을 이용해서 userId를 사용하는 시점에는 이 변수가 반드시 할당되어 있을 것임을 알려줄 수 있다.
let userId!: string
userId.toUpperCase()

// 브랜디드 타입
// 이름 기반의 타입
type CompanyID = string & { readonly brand: unique symbol }
type OrderID = string & { readonly brand: unique symbol }
type UserID = string & { readonly brand: unique symbol }
type ID = CompanyID | OrderID | UserID

function CompanyID(id: string) {
    return id as CompanyID
}

function OrderID(id: string) {
    return id as OrderID
}

function UserID(id: string) {
    return id as UserID
}

function userData(id: UserID) {
    //...
}

let companyID = CompanyID('com1234')
let orderID = OrderID('ord1234')
let userID = UserID('user1234')

userData(userID)
// userData(companyID) // => 해당함수에 할당 할 수 없다는 에러