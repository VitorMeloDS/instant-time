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
  console.log(DateFormat(new Date(), 'dd/mm/yyyy hh:mm:ss')); // Returns 11/02/2023 15:58:31.
  console.log(DateFormat(new Date(), 'yyyy-mm-dd')); // Returns 2023-02-11.
  console.log(DateFormat(new Date(), 'yyyy-mm-dd hh:mm:ss')); // Returns 2023-02-11 16:10:53.
  ```