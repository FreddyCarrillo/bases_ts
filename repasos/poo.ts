(()=>{

    interface LenguajesAProgramar {
        codeWithPython() : void;
        codeWithTs() : string;
    }

    interface IdesEnUso {
        codeWithVisualStudioCode() : void;
        codeWithJethBrains() : void;
    }

    class Persona {

        private nombre: string;
        private edad: number;
        static DNI: string = "72170220";
        public apellido ?: string;

        constructor(nuevoNombre: string, nuevaEdad: number){
            this.nombre = nuevoNombre;
            this.edad = nuevaEdad;
        }

        setNombre(nuevoNombre:string){
            this.nombre = nuevoNombre;
        }

        private getNombre() : string {
            return this.nombre;
        }

        setEdad(nuevaEdad:number){
            this.edad = nuevaEdad;
        }

        getEdad() : number {
            return this.edad;
        }

        setApellido(nuevoApellido : string) : void {
            this.apellido = nuevoApellido;
        }

    }

    class Developer extends Persona implements LenguajesAProgramar , IdesEnUso {
        updateAge(){
            super.setEdad(12);
        }
        codeWithPython(){

        }
        codeWithTs(){
            return '';
        }
        codeWithVisualStudioCode(){

        }
        codeWithJethBrains(){
            
        }
    }

    console.log(Persona.DNI);

    let persona1 = new Persona('Freddy', 26);
    console.log(persona1.getEdad());
    persona1.setApellido('Carrillo Tucto');
    console.log(persona1.apellido);

    let developer1 = new Developer('Lucas', 23);
    console.log(developer1.getEdad());

})();