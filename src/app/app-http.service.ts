import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService {
    protected url: string;
    protected header: Headers;

    constructor (protected http: Http) {
        this.setAccessToken();
    }

    request() {
        return this.http;
    }

    getUser() {
        return this.builder('auth/me')
            .list();
    }

    setAccessToken () {
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVmMTc3OWM0N2QyOWM5MGFiMTIwYThmODhhOGJkYjg1YWY0ZGNiNDFkMzBhOTc4ZmYxYzlhNzFiZGE3YjExMmFmZGRkMzY4OTBkMjEzYjYwIn0.eyJhdWQiOiIzIiwianRpIjoiZWYxNzc5YzQ3ZDI5YzkwYWIxMjBhOGY4OGE4YmRiODVhZjRkY2I0MWQzMGE5NzhmZjFjOWE3MWJkYTdiMTEyYWZkZGQzNjg5MGQyMTNiNjAiLCJpYXQiOjE1MDM2ODQ4MjcsIm5iZiI6MTUwMzY4NDgyNywiZXhwIjoxNTM1MjIwODI2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.FKu2fr6n44KLqkgRVsRfI3fRCj73davaMvpobMRjjTfS1FY63Zd_3WziJ34F24hrUzwsZ7xLdT-5f5mPXfmuRTHW1h8aMs2sJV7d6ZgI3Mq7L5crJWK2NQ0DmSIH1TCekLqx9Rb-A2N3vZ08i1b1bfmFLmGXK6ZpEj4CkV30CXMHWy3l7TKsRizoviwR_HRdIbzwVidagVzAlReyB7-7xhuxM_846EK7uM4fbMA0wdjZtla0K_jsvBPVczVY2mRmOjpl9t_i6mDCrW-4kGQChG5bNJZdphMvaeyQLVHfLCptuJR_HzS0ejM7BDtL9Udx2NVOLCj6ahv2t4YTAEnRfSx68rVJW8SAPaCTqlqzxoVr9B5_eL3GQqsuF2XLjMGJcNVQ7LInpO79boZHOaQgsXncyuNINHiY-oe7lapGnU7_gWVp9mfypE-_PVLIAH880VAT1oQ9nq_Dyq5cqFfa38A5Tt1C8ws8g-5eJi2HAfzvAexTaFeZwwJML0ZOONYQlEwJNIz3C4AB4C3EuefIsJE6IQ5-KrLSHEb4vqVhOWCjJHnhVvjfGLEJ7c2uUMoUhSHksiJyot-gXLTo-PGjvttEwONlB1kfzCfGKbkmMkXMVxS7-8TLYDV_VnmlOvXjjQMjfjxXSAeL0h7lV0P9wHIstdqWB9vv1z5r6X68MnE';
        this.header = new Headers({'Authorization': 'Bearer ' + token, 'Accept': 'application/json'});
    }

    builder (resource: string) {
        this.url = environment.server_url + '/api/v1/' + resource;
        return this;
    }

    list (options: Object = {}) {
        return this.http.get(this.url, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    view (id: number) {
        return this.http.get(this.url + '/' + id, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    update(id: number, data: object) {
        return this.http.put(this.url + '/' + id, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    insert (data: Object) {
        return this.http.post(this.url, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
}