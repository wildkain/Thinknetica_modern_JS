## Определить порядок выполнения операторов с помощью таблицы приоритетов операций.
___
___
### Вырaжение 1: 
```javascript
var x = 6, y = 15, z = 4; 
y /= x + 5 % z;

```
  
1.  5 % z;
2. x + (5 % z);
3. y / (x + (5 % z));
4. y = (y / (x + (5 % z)));

**x = 6; y = 2.142857142857143; z = 4;**
___

### Вырaжение 2: 
```javascript
var x = 6, y = 15, z = 4; 
z = x++ + y * 5; 
```

1. x++;
2. y * 5;
3. (x++) + (y * 5);

**x = 7; y = 15; z = 81;**
___

### Вырaжение 3: 
```javascript
var x = 6, y = 15, z = 4; 
x += y - x++ * z; 
```

1. x++;
2. (x++) * z;
3. y - ((x++) * z);
4. x + (y - ((x++) * z));
5. x = (x + (y - ((x++) * z)));

 **x = -3; y = 15; z = 4;**
___

### Вырaжение 4: 
```javascript
var x = 6, y = 15, z = 4; 
z = -- x - y * 5; 
```

1. --x;
2. y * 5;
3. (--x) - (y * 5);
4. z = ((--x) - (y * 5));

**x = 5; y = 15; z = -70;**
___

### Вырaжение 5: 
```javascript
var a = 3;  
var b = ++a + 1 + a++;
```

1. a++;
2. ++a;
3. (++a) + 1;
4. ((++a) + 1) + (a++);
5. b = (((++a) + 1) + (a++));

**a = 5; b = 9;**
___