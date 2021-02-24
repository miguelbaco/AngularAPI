export class Trivial {
  public category:Array<string> = [];
  public preguntas:Array<string> = [];
  public respuestas:Array<string> = [];
  public respuestasmal: Array<Array<string>> =[];
  public numpreguntas: number = 10;
  public numcategory: number = null;

  constructor(public npreguntas:number, public buscategory: string) {
    if(npreguntas == null) {
      this.numpreguntas = 10;
    } else {
      this.numpreguntas = npreguntas;
    }

      switch(buscategory) { 
        case "General-Knowledge": { 
           this.numcategory = 9; 
           break; 
        } 
        case "Books": { 
          this.numcategory = 10; 
          break; 
        }
        case "Films": { 
          this.numcategory = 11; 
          break; 
        }
        case "Music": { 
          this.numcategory = 12; 
          break; 
        }
        case "Musicals & Theatres": { 
          this.numcategory = 13; 
          break; 
        }
        case "Television": { 
          this.numcategory = 14; 
          break; 
        }
        case "Video Games": { 
          this.numcategory = 15; 
          break; 
        }
        case "Board Games": { 
          this.numcategory = 16; 
          break; 
        }
        case "Science & Nature": { 
          this.numcategory = 17; 
          break; 
        }
        case "Computers": { 
          this.numcategory = 18; 
          break; 
        }
        case "Mathematics": { 
          this.numcategory = 19; 
          break; 
        }
        case "Mythology": { 
          this.numcategory = 20; 
          break; 
        }
        case "Sports": { 
          this.numcategory = 21; 
          break; 
        }
        case "Geography": { 
          this.numcategory = 22; 
          break; 
        }
        case "History": { 
          this.numcategory = 23; 
          break; 
        }
        case "Politics": { 
          this.numcategory = 24; 
          break; 
        }
        case "Art": { 
          this.numcategory = 25; 
          break; 
        }
        case "Celebrities": { 
          this.numcategory = 26; 
          break; 
        }
        case "Animals": { 
          this.numcategory = 27; 
          break; 
        }
        case "Vehicles": { 
          this.numcategory = 28; 
          break; 
        }
        case "Comics": { 
          this.numcategory = 29; 
          break; 
        }
        case "Gadgets": { 
          this.numcategory = 30; 
          break; 
        }
        case "Anime & Manga": { 
          this.numcategory = 31; 
          break; 
        }
        case "Cartoon": { 
          this.numcategory = 32; 
          break; 
        }
        default: {
          this.numcategory = 0;
          break;
        }
     } 
  }
}