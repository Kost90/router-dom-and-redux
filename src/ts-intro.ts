// let x: number | string | boolean
// x = 1
// x = '1'
//
// console.log(x)

// interface User {
//   name: string
//   age: number
//   email?: string
// }

// type User = {
//     name: string
//     age: number
//     email?: string
// }

// const user: User = {
//   name: 'Igor',
//   age: 33,
// }
//
// user.email = 'email_1@asd'
//
// console.log(user)

// function sum(x: number, y: number) {
//   return x + y
// }
//
// export type SumResult = ReturnType<typeof sum>
//
// const x: SumResult = 2
//
// sum(x, 2)

// function generateUser() {
//   return {
//     name: 'Test',
//     age: 20,
//     email: 'test@email',
//   }
// }
//
// type User = ReturnType<typeof generateUser>
//
// const userA = generateUser()
//
// const userB: User = {
//   name: 'Test',
//   age: 20,
//   email: 'test@email',
// }
//
// console.log(userA, userB)

interface User {
  name: string
  age: number
  email?: string
}

interface Admin extends User {
  getRole(): string
}

const admin: Admin = {
  name: 'Name',
  age: 20,
  getRole() {
    return 'Admin'
  },
}
interface Level {
  a: (number | string)[]
  // useState: [number, (x: number) => void]
}

type Student = Pick<Admin, 'name' | 'email' | 'getRole'> & { level: Level }
// type Student = Omit<Admin, 'age'>

const student: Student = {
  name: 'Name',
  email: 'email',
  getRole() {
    return 'Student'
  },
  level: {
    a: [1, 2, '3', 5],
    // useState: [1, (x) => x, 4],
  },
}

interface Todo {
  title: string
  description: string
}

type PartialTodo = Partial<Todo>

const todo: PartialTodo = {}

console.log(admin, student, todo)
