export {}
class MessageQueue {
    private constructor(
        private messages: string[],
    ) {};
};

// class BadMessage extends MessageQueue {} => Cannot extend a class 'MessageQueue'. Class constructor is marked as private.

// let message = new MessageQueue => Cannot extend a class 'MessageQueue'. Class constructor is marked as private.

class WaitingList {
    private constructor(
        private waitingList: string[]
    ) {}
    static newWait(waitingList: string[]) {
        return new WaitingList(waitingList)
    }
};

// class BadWaitingList extends WaitingList{} => Cannot extend a class 'MessageQueue'. Class constructor is marked as private.

WaitingList.newWait([]);

// factory pattern : 어떤 객체를 만들지를 전적으로 팩토리에 위임
interface City {
    continent?: string
};

class Seoul implements City {
    continent?: string
    constructor(continent?: string) {
        this.continent = 'Asia';
    };
};

class Paris implements City {
    continent: string
    constructor(continent?: string) {
        this.continent = 'Europe';
    };
};

class Melbourne implements City {
    continent: string
    constructor(continent?: string) {
        this.continent = 'Oceania';
    }
};

// 캠패니언 객체 타입
let City = {
    create(type: 'seoul' | 'paris' | 'melbourne'): City {
        switch(type) {
            case 'seoul': return new Seoul();
            case 'paris': return new Paris();
            case 'melbourne' : return new Melbourne();
        }
    }
}

City.create('seoul');

// builder pattern : 객체의 생성과 구현방식을 분리할 수 있다. 
class RequestBuilder {
    private data: object | null = null;
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }
    setData(data: object): this {
        this.data = data
        return this
    }
    setUrl(url: string): this {
        this.url = url
        return this
    }
    //...
}

new RequestBuilder()
  .setUrl('/users')
  .setMethod('get')
  .setData({ name: 'Joon' })