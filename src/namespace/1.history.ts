export{}
// 처음 자바스크립트는 모듈 시스템을 지원하지 않음
// 모듈이 없어서 모든 것을 전역 네이스페이스에 정의함 => 응용프로그램을 만들고 확장이 어려워짐 / 변수명 고갈로 변수 충돌 발생 / 각 모듈의 API를 명시 하지 않으면 외부에서 어떤 기능이 사용되는지 알 수 없게됨
// 문제를 해결하기 위해 즉시실행함수(IIFE: Immediately Invoked Function Expression)을 전역 window에 할당해서 응용프로그램 다른 모듈에서 사용할 수 있도록 하는 식으로 모듈을 흉내냄

/*
window.emailListModule = {
    renderList() {
        //...
    }
}

window.emailComposerModule = {
    renderComposer() {
        //...
    }
}

window.appModule = {
    renderApp() {
        window.emailListModule.renderList()
        window.emailComposerModule.renderComposer()
    }
}
*/

/* 자바스크립트를 로딩하고 실행하는 동안 브라우저의 UI는 블록이 된다. 웹 응용프로그램이 커질수록 코드가 늘어날 수록 브라우저는 점점 느려졌다.
파일들을 한번에 불러오는 방식이 아닌 필요한 파일만 동적으로 불러오는 방식으로 개발하기 시작
첫페이지가 로딩이 된 다음 자바스크립트를 lazy loading을 지원하는 모듈 로더를 제공했다.

이후에 NodeJS가 개발되면서 JS의 확장성 문제, 그리고 다른 언어에서 얻은 스킬을 바탕으로 모듈 시스템을 자체로 추가하게 되었다.
NodeJS는 CommonJS 모듈  표준을 통해 해결했다.

하지만 CommonJS에도 문제가 있었다. require호출은 반드시 동기 방식이어야 하고, CommonJS 모듈 해석 알고리즘이 웹에 적합하지 않았다. 그리고 코드는 상황에 따라 정적 분석이 불가능 했다. 그이유는 module.exports가 어디서나 등장할 수 있고 require호출도 어디에나 등장 할 수 있었다. 이로인해서 자바스크립트 프로그램을 정적으로 링크하거나, 참조된 모든 파일이 존재하는지 명시된 내용을 그래도 익스포트하는지를 확인할 수 없었다.
ES2015에서 해결이 되었다.

import emailList from 'emailListModule'
import emailComposer from 'emailComposerModule'

*/
