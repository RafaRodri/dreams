import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class CategoryService {

    private PATH = 'category/';

    // constructor(private http: HttpClient) {}
    constructor(private db: AngularFireDatabase) {}

    // getCategories(): Observable<Category[]>{
    //     return this.http.get<Category[]>(`${environment.api}/category?_sort=rating&_order=asc`)
    // }

    getCategories() {
        return this.db.list(this.PATH)
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
}
