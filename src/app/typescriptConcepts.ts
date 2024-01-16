export const carCounts = {
  fiat: 1,
  renault: 2,
  bmw: 4,
};

type SingleCarCount =
  | {
      fiat: number;
    }
  | {
      renault: number;
    }
  | {
      bmw: number;
    };

const singleCarCount: SingleCarCount = {
  fiat: 2,
  renault: 3,
  bmw: 6,
};

export const fruitCounts = {
  apple: 1,
  melon: 2,
  banana: 4,
};

type FruitCounts = typeof fruitCounts;

type NewSingleFruitCounts = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
}[keyof FruitCounts];

const singleFruitCount: NewSingleFruitCounts = {
  apple: 3,
};









/*

============================================================================================
!Type Record 
?Record nos permite agregarle al objeto user la prop age pese a que no esta definida.

^Record<string, number | string>. Record es un tipo genérico incorporado en TypeScript 
^que representa un objeto cuyas claves son de tipo string y cuyos valores pueden ser de tipo 
^number o string.

============================================================================================
*/

const user: Record<string, number | string> = {
  name: "Matt",
};

user.age = 24;




/*
==============================================================================================
^Acá las claves del objeto pueden ser de tipo string o number y los valores pueden ser de tipo 
^number o string o boolean.
============================================================================================

*/
const car: Record<string | number, number | string | boolean> = {
  name: "bob",
};

car.name = "frederick";
car[42] =
  "Answer to the Ultimate Question of Life, the Universe, and Everything";
car.isSafe = false;





/*
============================================================================================
*ERROR 2 : Solving the Possibly Null or Undefined Error
============================================================================================
*/

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");

// hovering over `id` shows:
// const id: string | null;

// !console.log(id.toUpperCase()); // This will throw a runtime error if id is null

// id podra ser un string o NULL, COMO RESOLVERMOS ESTO?

// ASI: 
const result = id?.toUpperCase();

// O ASI 
if (typeof id === "string") {
	console.log(id.toUpperCase());
}
 


/*
https://www.totaltypescript.com/tutorials/solving-typescript-errors/errors/fixing-types-of-property-are-incompatible/solution
*/