class Libro {
    public titulo:string;
    public autor:string;
    constructor(titulo: string, autor: string) {
    this.titulo=titulo;
    this.autor=autor;
    }
  }
  class ListaLibros {
    private static instancia: ListaLibros;
    private libros: Libro[] = [];
  
    private constructor() {}
  
    static obtenerInstancia(): ListaLibros {
      if (!ListaLibros.instancia) {
        ListaLibros.instancia = new ListaLibros();
      }
      return ListaLibros.instancia;
    }
    agregarLibro(libro: Libro): void {
      this.libros.push(libro);
    }
    mostrarLibros(): void {
      console.log("Lista de Libros:");
      this.libros.forEach((libro, index) => {
        console.log(`Libro ${index + 1}:`);
        console.log(`Título: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
        console.log(`ISBN: ${libro.isbn}`);
      });
    }
  }
  
  // Obtener la instancia única de ListaLibros
  const listaCompartida = ListaLibros.obtenerInstancia();
  
  // Crear objetos Libro y agregarlos a la lista compartida
  const libro1 = new Libro("Libro 1", "Autor");
  const libro2 = new Libro("Libro 2", "Autor 2");
  const libro3 = new Libro("Libro 3", "Autor 3");
  
  listaCompartida.agregarLibro(libro1);
  listaCompartida.agregarLibro(libro2);
  listaCompartida.agregarLibro(libro3);
  
  // metodo datos por pantalla
  listaCompartida.mostrarLibros();
