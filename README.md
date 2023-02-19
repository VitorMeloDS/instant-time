# Intant Time

* Library created to help programmers on a daily basis.

* Installation

  ```bash 
  npm i instant-time-js
  ```

* Use

  ```bash
  const { DateFormat } = require('instant-time-js');
  
  let dateResult = DateFormat(new Date());
  console.log(dateResult); // Returns 2023-02-01 15:56:34.
  ```

* Format Mask

  ```bash
  const { DateFormat } = require('instant-time-js');
  
  console.log(DateFormat(new Date(), 'dd/mm/yyyy')); // Returns 11/02/2023.
  console.log(DateFormat(new Date(), 'dd/mm')); // Returns 11/02.
  console.log(DateFormat(new Date(), 'mm/yyyy')); // Returns 11/2023.
  console.log(DateFormat(new Date(), 'dd/yyyy')); // Returns 02/2023.
  console.log(DateFormat(new Date(), 'mm')); // Returns 02.
  console.log(DateFormat(new Date(), 'dd/mm/yyyy hh:mm:ss')); // Returns 11/02/2023 15:58:31.

  console.log(DateFormat(new Date(), 'yyyy-mm-dd')); // Returns 2023-02-11.
  console.log(DateFormat(new Date(), 'mm-dd')); // Returns 11/02.
  console.log(DateFormat(new Date(), 'yyyy-mm')); // Returns 11/2023.
  console.log(DateFormat(new Date(), 'yyyy-dd')); // Returns 02/2023.
  console.log(DateFormat(new Date(), 'mm')); // Returns 02.
  console.log(DateFormat(new Date(), 'yyyy-mm-dd hh:mm:ss')); // Returns 2023-02-11 15:58:31.

  console.log(DateFormat(new Date(), 'hh:mm:ss')) // Returns 15:58:31;
  console.log(DateFormat(new Date(), 'hh:mm')) // Returns 15:58;
  console.log(DateFormat(new Date(), 'mm:ss')) // Returns 58:31;
  console.log(DateFormat(new Date(), 'mm')) // Returns 58;
  console.log(DateFormat(new Date(), 'ss')) // Returns 31;

  ```