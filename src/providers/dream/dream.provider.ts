import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class DreamService {

    private PATH = 'dream/';

    // constructor(private http: HttpClient) {}
    constructor(private db: AngularFireDatabase) {}

    getDreams(category?: string) {
        return this.db.list(this.PATH, ref => ref.orderByChild('category').equalTo(category))
            .snapshotChanges()
            .pipe(
                map(changes => {
                    return changes.map(c => ({
                        key: c.payload.key,
                        ...c.payload.val()
                        // data: c.payload.val()  (ou dessa forma)
                    }));
                })
            );
    }

    // getDreams(category?: string): Observable<Dream[]>{
    //     let params: HttpParams = undefined
    //
    //     if (category){
    //         //instancia objeto do tipo HttpParams
    //         //o objeto HttpParams, é imutável, ou seja, sempre que setar um parâmetro, é adicionado um valor,
    //         //e é criado uma cópia, retornando uma instância de HttpParams
    //         //logo, o seguinte trecho não funcionaria:
    //         //params = new HttpParams()
    //         //params.set('q', search)
    //         params = new HttpParams().append('category', category)
    //         //é possível utilizar o método set() ou append(), para passar valor
    //     }
    //
    //     return this.http.get<Dream[]>(`${environment.api}/dream`,{params: params})
    // }
    //
    // getDream(id: string): Observable<Dream>{
    //     let params: HttpParams = undefined
    //
    //     params = new HttpParams().append('id', id)
    //
    //     return this.http.get<Dream>(`${environment.api}/dream`,{params: params})
    //         .pipe(map(x => x[0]));
    // }
}
