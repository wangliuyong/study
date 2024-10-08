const name1: bigint = BigInt(9999999);

const name2: null = null;

const name3: number = undefined;

const name4: boolean = true;

const name5: string = "Hello";

// 元组
const name6: [string, number] = ["1", 4];

interface Person {
  readonly id: number;
  name: string;
  age: number;
}

const name7: Person = {
  id: 1,
  name: "John",
  age: 30,
};

function func<T>(x: number, y?: string): number {
  return 0;
}

const func1 = (x: number, y?: string): number => 0;

// 使用interface 描述函数
interface IFunc {
  (x: number, y?: string): number;
}

// 也可以使用类型别名描述函数
type TFunc = <T = number>(x: T, y: T) => T;

const func2: IFunc = (x, y): number => 0;
const func2_1: TFunc = (x, y) => x;

func2_1<number>(1, 2);

// 联合类型
const name8: number | string = 1;

// 类型断言
const name9 = "123" as const;
// 或者使用typeof 进行类型断言

// 枚举 => 会被编译并进行双向赋值
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

Direction.Down; //0
Direction[0]; //Down

enum Direction1 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

// 常量枚举 => 不会被编译出额外逻辑
const enum Direction3 {
  Up,
  Down,
  Left,
  Right,
}

// 泛型generic
function func3<T, U>(x: T, name: U): U {
  if (x) {
    return name;
  }
}

const data1: boolean = func3(444, true);

// 约束范型
interface Lengthwise {
  length: number;
}

// 泛型约束
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 范型在class中的使用
class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.pop();

// 范型在interface中的使用
interface KeyPair<T, U> {
  key: T;
  value: U;
}

const kp1: KeyPair<number, string> = { key: 1, value: "1" };
const kp2: KeyPair<string, number> = { key: "1", value: 1 };

// 类型别名
type FunType = (x: number, y: number) => number;

const sum: FunType = (x, y) => x + y;

sum(1, 2);

// 交叉类型
type Person1 = {
  name: string;
  age: number;
} & {
  gender: string;
};

const person1: Person1 = {
  name: "1",
  age: 1,
  gender: "1",
};

// 内置类型
// Partial
// key可选;
type TPartial = Partial<Person1>;

const person2: TPartial = {
  name: "1",
};

// Omit忽略某个属性
type TPartial2 = Omit<Person1, "name">;
const person3: TPartial2 = {
  age: 1,
  gender: "1",
};
//
