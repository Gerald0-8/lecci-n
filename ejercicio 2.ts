interface Bebida {
    descripcion: string;
    precio: number;
  }
  
  class CafeNormal implements Bebida {
    descripcion: string;
    precio: number;
  
    constructor() {
      this.descripcion = "Café Normal";
      this.precio = 2.5; 
        }
  }
  
  class CafeConLeche implements Bebida {
    descripcion: string;
    precio: number;
  
    constructor() {
      const cafeNormal = new CafeNormal();
      this.descripcion = "Café con Leche";
      this.precio = cafeNormal.precio + 1.0; // Se agrega el costo de la leche
    }
  }
  
  class Mocca implements Bebida {
    descripcion: string;
    precio: number;
  
    constructor() {
      const cafeConLeche = new CafeConLeche();
      this.descripcion = "Mocca";
      this.precio = cafeConLeche.precio + 0.5; // Se agrega el costo del chocolate en polvo
    }
  }
  
  class Carajillo implements Bebida {
    descripcion: string;
    precio: number;
  
    constructor() {
      const cafeNormal = new CafeNormal();
      this.descripcion = "Carajillo";
      this.precio = cafeNormal.precio + 3.0; // Se agrega el costo del whisky
    }
  }
  
  // Ejemplo de uso index
  const cafe = new CafeNormal();
  console.log(`Bebida: ${cafe.descripcion}, Precio: $${cafe.precio}`);
  
  const cafeLeche = new CafeConLeche();
  console.log(`Bebida: ${cafeLeche.descripcion}, Precio: $${cafeLeche.precio}`);
  
  const mocca = new Mocca();
  console.log(`Bebida: ${mocca.descripcion}, Precio: $${mocca.precio}`);
  
  const carajillo = new Carajillo();
  console.log(`Bebida: ${carajillo.descripcion}, Precio: $${carajillo.precio}`);