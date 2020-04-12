class Student(object):
    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_store(self):
        print('%s : %s' % (self.__name, self.__score))

    def get_name(self):
        return self.__name

    def get_score(self):
        return self.__score


bart = Student('Bart Simpson', 59)
# print(bart.__name)
print(bart.get_name())
print(bart.get_score())
bart.__score = 100
print(bart.get_score())
print(bart._Student__name)  # 可以通过Student来间接访问内部私有变量

