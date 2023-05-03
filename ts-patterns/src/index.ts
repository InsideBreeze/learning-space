interface BaseRecord {
  id: string
}

interface Database<T extends BaseRecord> {
  set: (newValue: T) => void;
  get: (id: string) => T | undefined
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {}

  public set(newValue: T) {
    this.db[newValue.id] = newValue
  }

  public get(id: string) {
    return this.db[id]
  }
}

interface Staff {
  id: string;
  name: string;
  age: number
}

const staffDB = new InMemoryDatabase<Staff>()

staffDB.set({
  id: 'lemon',
  name: 'cc',
  age: 64
})

console.log(staffDB.get('lemon'))

