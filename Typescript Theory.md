## Readonly - protect the value from being modified
```typescript
    class Zoo {
        readonly name: string;

        constructor(n: string) {
            this.name = n;
        }
    }
```

## Protected - can be accessed only within the declaration class and subclasses
```typescript
    class Zoo {
        protected name: string;
        constructor(n: string) {this.name = n;}
    }

    class Bear extends Zoo {
        private color: string;
        constructor(name: string, c: string) {
            super(name);
            this.color = c;
        }
    }

    let martha = new Bear("Martha", "Brown");
```


## Abstract class
```typescript
    abstract class Department {
        public depName: string;
        constructor(n: string) {this.depName = n;}
        abstract sayHello(): void;
    }
```


```typescript
    interface GenericConstructor<T, V> {
        (arg: T, param: V): [T, V];
    }

    const generatedFn: GenericContructor<string, string> = <T, V>(arg: T, param: V) => {
        return [arg, param];
    }

    const sample = generatedFn("Hello", "There");
```


```typescript
    interface ShowComponents<T, V> {
        print(key: T, value: V): string;
    }

    class Components<T, V> implements ShowComponents<T, V> {
        public key: T;
        public value: V,

        constructor(k: T, v: V) {
            this.key = k;
            this.value = v;
        }

        print() {
            return `Key ${this.key} and value: ${this.value}.`;
        }
    }
```