import types

class Animal(object):
    def run(self):
        print('Animal class is running')

class Cat(Animal):
    def run(self):
        print('Cat class is running')

    def eat(self):
        print('Cat eating')

class Dog(Animal):
    def run(self):
        print('Dog class is running')

    def eat(self):
        print('Dog eating')

happy = Cat()
happy.run()
happy.eat()

animal = Animal()

print(isinstance(happy, Animal))
print(isinstance(happy, Cat))
print(isinstance(animal, Cat))

print(type(happy))
print(type(123))

print(type(lambda x: x) == types.LambdaType)
print(type(x for x in range(10)) == types.GeneratorType)

# 根据hasattr(), getattr(), setattr()来获取属性及修改属性
print(hasattr(happy, 'run'))
setattr(happy, 'gender', 'female')
print(getattr(happy, 'gender'))
