export class Trivial {
  public category:Array<string> = [];
  public preguntas:Array<string> = [];
  public respuestas:Array<string> = [];
  public respuestasmal: Array<Array<string>> =[];
  public numpreguntas: number = 0;

  constructor(public npreguntas:number, public buscategory: string) {
    this.numpreguntas = npreguntas;
  }
}