import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export const myGet = (): (<T>(url: string) => Observable<T>) => {
    const http = inject(HttpClient);
    return <T>(url: string) => http.get<T>(url);
}
