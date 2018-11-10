# min2phase
- Javascript version of [min2phase](http://github.com/cs0x7f/min2phase).

# Usage

```javascript

//without initialization:
var cube = min2phase.randomCube(); // or some other valid state
min2phase.solve(cube); // the first solve will spend about 200ms
min2phase.solve(cube); // the next 25 solves will spend about 10ms to 50ms on average
min2phase.solve(cube); // after 26 solves, initialization is finished. Each solve will spend about 5ms on average

//initialization and solve
min2phase.initFull(); // initialization will spend about 350ms, and about 150ms if partially initialized by the first solve.
var solution = min2phase.solve(cube); // about 2.3ms on average, all solutions are no more than 21 moves.
console.log(solution);

// All timing values are measured by nodejs 8.10.0 on an Intel Core-i7 6700HQ processor.
```

# License GPLv3

    Copyright (C) 2018  Shuang Chen

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
