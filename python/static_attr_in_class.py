class Student(object):
    count = 0

    def __int__(self, name):
        self.name = name
        Student.count += 1
# 测试
if Student.count != 0:
    print('Test failed')
else:
    bart = Student('Bart')
    if Student.count != 1:
        print('Test failed')
    else:
        lisa = Student('lisa')
        if Student.count != 2:
            print('Test failed')
        else:
            print('Student:', Student.count)
            print('Test success')